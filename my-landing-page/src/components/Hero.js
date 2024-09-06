import React from 'react';

const Hero = ({ title, backgroundImage }) => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center text-center px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8">
        {title}
      </h2>
      
    </section>
  );
};

export default Hero;
