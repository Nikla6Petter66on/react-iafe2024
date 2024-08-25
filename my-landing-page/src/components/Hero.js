import React from 'react';

const Hero = ({ title, backgroundImage }) => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="text-5xl font-extrabold mb-8">{title}</h2>
      <span className="material-symbols-outlined text-yellow-400 text-6xl mt-12">
        arrow_downward
      </span>
    </section>
  );
};

export default Hero;
