import React, { useState } from 'react';
import InteractiveWorldGlobe from './InteractiveGlobe';

const GlobalServicesGlobeSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const handleCountrySelect = (name: string) => {
    setSelectedCountry((prev) => (prev === name ? null : name));
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-violet-50/40 to-sky-50/60 py-16 sm:py-20 lg:py-5"
      aria-labelledby="global-services-heading"
      data-section="global-services"
    >
      <div className="order-1 lg:order-2">
        <InteractiveWorldGlobe
          selectedCountry={selectedCountry}
          hoveredCountry={hoveredCountry}
          onCountrySelect={handleCountrySelect}
          onCountryHover={setHoveredCountry}
        />
      </div>
    </section>
  );
};

export default GlobalServicesGlobeSection;
