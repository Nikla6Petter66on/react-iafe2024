import React from 'react';
import Hero from './Hero';
import Header from './Header';
import Footer from './Footer';

const ContactMe = () => {
  return (
    <div className="bg-white">

      <section className="bg-black text-white">
        <Header />
        <Hero
          title="Lets grab a (virtual) coffee."
          backgroundImage="/images/backgroundimage.png"
        />
      </section>

      {/* Contact Me Button Section */}
      <section className="flex items-start justify-center min-h-[70vh] py-8 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact me</h2>
          <h3 className="text-xl font-semibold mb-4">Shoot me an email</h3>
          <a
            href="mailto:info@iamfrontend.com?subject=Lets grab a coffee&body=Hi Niklas, looking forward to getting in touch"
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg inline-block"
          >
            Click here
          </a>

        
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactMe;
