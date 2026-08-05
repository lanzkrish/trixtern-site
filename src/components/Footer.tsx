import Link from 'next/link';

const quickLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/services#solutions' },
  { label: 'Industries', href: '/services#industries' },
  { label: 'Case Studies', href: '/work' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

const socialLinks = [
  { label: 'Email', href: 'mailto:hello@trixtern.com' },
  { label: 'Phone', href: 'tel:+916372669269' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/trixtern/' },
  { label: 'GitHub', href: 'https://github.com/trixtern' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 md:pt-28 pb-8 md:pb-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-16 md:mb-24">
          {/* Branding & Contact Info */}
          <div className="lg:w-1/3 flex flex-col items-start gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
              <img
                src="/logos/trixternnobg.png"
                alt="Trixtern"
                className="h-20 md:h-24 w-auto"
              />
              <div className="flex flex-col leading-tight justify-center">
                <span
                  className="text-[#ec1313] text-2xl md:text-3xl tracking-[0.05em] uppercase font-bold"
                  style={{ fontFamily: 'BPdots, sans-serif' }}
                >
                  TRIXTERN
                </span>
                <span
                  className="text-white text-[10px] md:text-[11px] tracking-[0.25em] uppercase mt-0.5"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Custom software, websites, and AI solutions engineered for growing businesses. We build digital ecosystems with precision and measurable impact.
            </p>

            <div className="space-y-2 mt-4 text-sm text-white/70">
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#ec1313]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@trixtern.com
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#ec1313]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 63726 69269
              </p>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 pt-4">
            <nav aria-label="Company links">
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-white/50">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#ec1313] transition-colors inline-block hover:translate-x-1 duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Quick links">
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-white/50">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#ec1313] transition-colors inline-block hover:translate-x-1 duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Connect</h4>
              <ul className="flex flex-row md:flex-col gap-6 md:gap-4 text-sm text-white/50">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ec1313] transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Trixtern Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
