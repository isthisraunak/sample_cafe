import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0e1320] text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Link href="/#home" className="text-cream font-playfair text-2xl uppercase tracking-wider">
                <span className="font-bold">ÉLYSÉE</span>
              </Link>
            </div>
            <p className="text-lightgray mb-4 text-sm">
              Modern French cuisine in an elegant atmosphere. We use the finest seasonal
              ingredients to create dishes that delight the senses.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-cream hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="https://instagram.com" className="text-cream hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
              <Link href="https://twitter.com" className="text-cream hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-gold text-lg font-playfair mb-4">Contact</h3>
            <div className="flex items-start mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-lightgray">123 Culinary Avenue, Fine City</p>
              </div>
            </div>
            <div className="flex items-start mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-lightgray">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-lightgray">info@elysee.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gold text-lg font-playfair mb-4">Hours</h3>
            <div className="mb-3">
              <h4 className="text-cream font-semibold mb-1">Dinner Service</h4>
              <p className="text-lightgray">Tuesday - Sunday: 5:30 PM - 10:00 PM</p>
            </div>
            <div className="mb-3">
              <h4 className="text-cream font-semibold mb-1">Bar</h4>
              <p className="text-lightgray">Tuesday - Sunday: 4:30 PM - 11:00 PM</p>
            </div>
            <p className="text-lightgray">Closed Mondays</p>
          </div>
        </div>

        <div className="border-t border-[#2a3044] mt-12 pt-8 text-center text-lightgray text-sm">
          <p>© {new Date().getFullYear()} Élysée Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
