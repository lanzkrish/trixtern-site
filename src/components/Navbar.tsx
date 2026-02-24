'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5 sticky top-0">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/logos/2.png"
            alt="Trixtern"
            className="h-7 md:h-8 w-auto"
          />
          <div className="flex flex-col leading-tight items-center justify-center">
            <span
              className="text-[#ec1313] text-lg md:text-xl tracking-[0.05em] uppercase font-bold"
              style={{ fontFamily: 'BPdots, sans-serif' }}
            >
              TRIXTERN
            </span>
            <span
              className="text-black text-[8px] md:text-[9px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              TECHNOLOGIES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-[#ec1313]'
                  : 'text-black hover:text-[#ec1313]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#ec1313] transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-black p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 px-6 py-5 space-y-1 animate-[fadeIn_0.2s_ease]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-base font-medium py-3 ${
                pathname === link.href ? 'text-[#ec1313]' : 'text-black'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 bg-black text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-[#ec1313] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
