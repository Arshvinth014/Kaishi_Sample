import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { geoCentroid, geoContains, geoGraticule10, geoOrthographic, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Feature, FeatureCollection, Geometry } from 'geojson';
import type { GeometryCollection, Topology } from 'topojson-specification';
import { Minus, Plus, RotateCcw } from 'lucide-react';

const WORLD_ATLAS_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const SIZE = 440;
const RADIUS = SIZE / 2 - 12;
const MIN_SCALE = 0.85;
const MAX_SCALE = 1.35;
const SPHERE = { type: 'Sphere' as const };

export type CountryFeature = Feature<Geometry, { name: string }>;

type Props = {
  selectedCountry: string | null;
  hoveredCountry: string | null;
  onCountrySelect: (name: string) => void;
  onCountryHover: (name: string | null) => void;
  className?: string;
};

function clampPhi(phi: number): number {
  return Math.max(-60, Math.min(60, phi));
}

const InteractiveWorldGlobe: React.FC<Props> = ({
  selectedCountry,
  hoveredCountry,
  onCountrySelect,
  onCountryHover,
  className = '',
}) => {
  const uid = useId().replace(/:/g, '');
  const oceanId = `globe-ocean-${uid}`;
  const glowId = `globe-glow-${uid}`;

  const [countries, setCountries] = useState<CountryFeature[]>([]);
  const [loadError, setLoadError] = useState(false);
  const [rotation, setRotation] = useState<[number, number]>([145, -12]);
  const [scaleMul, setScaleMul] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<{ x: number; y: number; rot: [number, number]; moved: boolean } | null>(null);
  const didDragRef = useRef(false);
  const countriesRef = useRef<CountryFeature[]>([]);

  useEffect(() => {
    countriesRef.current = countries;
  }, [countries]);

  useEffect(() => {
    let cancelled = false;
    fetch(WORLD_ATLAS_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load map data');
        return res.json() as Promise<Topology>;
      })
      .then((world) => {
        if (cancelled) return;
        const coll = world.objects.countries as GeometryCollection;
        const fc = feature(world, coll) as FeatureCollection<Geometry, { name: string }>;
        setCountries(fc.features as CountryFeature[]);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const projection = useMemo(
    () =>
      geoOrthographic()
        .translate([SIZE / 2, SIZE / 2])
        .scale(RADIUS * scaleMul)
        .rotate([rotation[0], rotation[1], 0])
        .clipAngle(90),
    [rotation, scaleMul]
  );

  const pathGen = useMemo(() => geoPath(projection), [projection]);
  const graticulePath = useMemo(() => pathGen(geoGraticule10()) ?? '', [pathGen]);
  const spherePath = useMemo(() => pathGen(SPHERE) ?? '', [pathGen]);

  const activeLabel = hoveredCountry ?? selectedCountry;

  const focusCountry = useCallback((name: string) => {
    const feat = countriesRef.current.find((f) => f.properties?.name === name);
    if (!feat) return;
    const [lon, lat] = geoCentroid(feat);
    setRotation([-lon, clampPhi(-lat)]);
  }, []);

  useEffect(() => {
    if (!selectedCountry || countries.length === 0) return;
    focusCountry(selectedCountry);
  }, [selectedCountry, countries.length, focusCountry]);

  useEffect(() => {
    if (isDragging || selectedCountry) return undefined;
    const id = window.setInterval(() => {
      setRotation(([lambda, phi]) => [lambda + 0.22, phi]);
    }, 50);
    return () => window.clearInterval(id);
  }, [isDragging, selectedCountry]);

  const pickCountryAt = useCallback(
    (clientX: number, clientY: number) => {
      const svg = svgRef.current;
      if (!svg || countriesRef.current.length === 0) return;
      const pt = svg.createSVGPoint();
      pt.x = clientX;
      pt.y = clientY;
      const ctm = svg.getScreenCTM();
      if (!ctm) return;
      const local = pt.matrixTransform(ctm.inverse());
      const invert = projection.invert;
      if (!invert) return;
      const coords = invert([local.x, local.y]);
      if (!coords) return;
      for (let i = countriesRef.current.length - 1; i >= 0; i -= 1) {
        const f = countriesRef.current[i];
        if (geoContains(f, coords)) {
          onCountrySelect(f.properties?.name ?? '');
          return;
        }
      }
    },
    [onCountrySelect, projection]
  );

  const onPointerDown = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    if (e.button !== 0) return;
    dragRef.current = { x: e.clientX, y: e.clientY, rot: [...rotation], moved: false };
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  }, [rotation]);

  const onPointerMove = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const dx = e.clientX - drag.x;
    const dy = e.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) > 4) {
      drag.moved = true;
      onCountryHover(null);
    }
    if (!drag.moved) return;
    const sensitivity = 0.35;
    setRotation([
      drag.rot[0] + dx * sensitivity,
      clampPhi(drag.rot[1] - dy * sensitivity),
    ]);
  }, [onCountryHover]);

  const endPointer = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      const drag = dragRef.current;
      if (drag?.moved) didDragRef.current = true;
      dragRef.current = null;
      setIsDragging(false);
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    },
    []
  );

  const onClick = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      if (didDragRef.current) {
        didDragRef.current = false;
        return;
      }
      pickCountryAt(e.clientX, e.clientY);
    },
    [pickCountryAt]
  );

  const resetView = () => {
    setRotation([145, -12]);
    setScaleMul(1);
  };

  return (
    <div className={`relative ${className}`}>
      <p
        className="pointer-events-none absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-full bg-slate-900/75 px-3 py-1 text-[11px] font-semibold text-white shadow-lg backdrop-blur-sm sm:text-xs"
        aria-live="polite"
      >
        {activeLabel ? `Selected: ${activeLabel}` : 'Drag the globe · Click any country'}
      </p>

      <div className="relative mx-auto flex max-w-[440px] justify-center rounded-3xl border border-violet-200/60 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 p-3 shadow-2xl shadow-violet-900/25 sm:p-4">
        {loadError ? (
          <div className="flex h-[440px] w-full items-center justify-center text-center text-sm text-violet-200">
            Map data could not be loaded. Check your connection and refresh.
          </div>
        ) : countries.length === 0 ? (
          <div
            className="flex h-[440px] w-full items-center justify-center"
            aria-busy="true"
            aria-label="Loading world map"
          >
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-violet-400 border-t-transparent" />
          </div>
        ) : (
          <svg
            ref={svgRef}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className={`h-auto w-full max-w-full select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ touchAction: 'none' }}
            role="img"
            aria-label="Interactive world globe — drag to rotate and click a country"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endPointer}
            onPointerCancel={endPointer}
            onClick={onClick}
          >
            <defs>
              <radialGradient id={oceanId} cx="38%" cy="32%" r="68%">
                <stop offset="0%" stopColor="#1e3a5f" />
                <stop offset="55%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </radialGradient>
              <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#a78bfa" floodOpacity="0.65" />
              </filter>
            </defs>

            <circle cx={SIZE / 2} cy={SIZE / 2} r={RADIUS * scaleMul + 2} fill={`url(#${oceanId})`} />
            {spherePath ? (
              <path d={spherePath} fill={`url(#${oceanId})`} stroke="rgba(148,163,184,0.35)" strokeWidth={0.6} />
            ) : null}
            {graticulePath ? (
              <path d={graticulePath} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth={0.35} pointerEvents="none" />
            ) : null}

            {countries.map((f) => {
              const name = f.properties?.name ?? '';
              const d = pathGen(f);
              if (!d) return null;
              const isSelected = selectedCountry === name;
              const isHovered = hoveredCountry === name && !isSelected;
              return (
                <path
                  key={name}
                  d={d}
                  className="transition-[fill] duration-200"
                  fill={isSelected ? '#a855f7' : isHovered ? '#38bdf8' : '#64748b'}
                  stroke={isSelected ? '#f5f3ff' : '#1e293b'}
                  strokeWidth={isSelected ? 0.65 : 0.35}
                  filter={isSelected || isHovered ? `url(#${glowId})` : undefined}
                  onMouseEnter={() => !isDragging && onCountryHover(name)}
                  onMouseLeave={() => onCountryHover(null)}
                  style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
                />
              );
            })}
          </svg>
        )}

        <div
          className="absolute bottom-3 right-3 z-20 flex flex-col overflow-hidden rounded-lg border border-white/15 bg-slate-900/90 shadow-lg backdrop-blur-sm"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setScaleMul((s) => Math.min(MAX_SCALE, s + 0.08))}
            className="flex h-8 w-8 items-center justify-center text-violet-200 hover:bg-white/10"
            aria-label="Zoom in"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setScaleMul((s) => Math.max(MIN_SCALE, s - 0.08))}
            className="flex h-8 w-8 items-center justify-center border-t border-white/10 text-violet-200 hover:bg-white/10"
            aria-label="Zoom out"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={resetView}
            className="flex h-8 w-8 items-center justify-center border-t border-white/10 text-violet-200 hover:bg-white/10"
            aria-label="Reset globe"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveWorldGlobe;
