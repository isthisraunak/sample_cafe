import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/#home" className="text-cream font-playfair text-2xl uppercase tracking-wider">
            <span className="font-bold">ÉLYSÉE</span>
            <span className="block text-xs mt-[-2px] tracking-widest">FINE DINING</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="/#home" className="nav-link text-cream">Home</Link>
          <Link href="/#about" className="nav-link text-cream">About</Link>
          <Link href="/#menu" className="nav-link text-cream">Menu</Link>
          <Link href="/#reservations" className="nav-link text-cream">Reservations</Link>
          <Link href="/#contact" className="nav-link text-cream">Contact</Link>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" className="text-cream hover:text-gold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
