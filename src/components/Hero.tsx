import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-navy"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://ext.same-assets.com/855428837/2863075997.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl text-cream font-playfair mb-4">ÉLYSÉE</h1>
        <p className="text-xl text-cream mb-8 font-montserrat">A culinary journey through modern French cuisine</p>
        <Link
          href="/#reservations"
          className="gold-button"
        >
          RESERVE A TABLE
        </Link>
      </div>
    </section>
  );
}
