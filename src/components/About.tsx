import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">A culinary sanctuary where tradition meets innovation</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="rounded-lg overflow-hidden h-[400px] relative">
            <Image
              src="https://ext.same-assets.com/855428837/800726048.jpeg"
              alt="Élysée Restaurant Interior"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-playfair mb-4 text-navy">A Legacy of Excellence</h3>
            <p className="text-darkblue mb-6">
              Founded in 2010 by acclaimed Chef Jean-Luc Beaumont, Élysée has become a beacon of culinary excellence in the heart of the city. Our philosophy is simple: source the finest seasonal ingredients, prepare them with meticulous attention to detail, and serve them in an atmosphere of refined elegance.
            </p>
            <p className="text-darkblue mb-6">
              Each dish tells a story of tradition, innovation, and passion. We honor classic French techniques while embracing global influences, creating a dining experience that is both familiar and surprising.
            </p>
            <blockquote className="border-l-4 border-gold pl-4 italic text-lightgray">
              "Cuisine is an art form that engages all the senses. At Élysée, we create not just meals, but memories."
              <cite className="block mt-2 text-sm not-italic">— Chef Jean-Luc Beaumont</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
