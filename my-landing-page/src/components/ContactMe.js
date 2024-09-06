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
            title="Lets grab a coffee."
            backgroundImage="/images/backgroundimage.png"
        
        />

        </section>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-64 flex items-center justify-center text-white" style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}>
        <h1 className="text-4xl font-bold">Let's grab a coffee.</h1>
      </section>

    {/* Contact Me Button Section */}
    <section className="flex items-start justify-center min-h-[70vh] py-8 px-8"> {/* Reduced min-h and aligned items to start */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact me</h2>
          <div className="p-8 rounded-lg shadow-lg inline-block">
            <h3 className="text-xl font-semibold mb-4">Shoot me an email</h3>
            <h5 className="font-semibold mb-4">Clicking on the button will expose my email address and open your email program</h5>
            <a
              href="mailto:niklas@iamfrontend.com?subject=Lets grab a coffee&body=Hi Niklas, looking forward to getting in touch"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg inline-block"
            >
              Click here
            </a>
          </div>
        </div>
      </section>

      <Footer/>

    </div>
  );
};

export default ContactMe;
