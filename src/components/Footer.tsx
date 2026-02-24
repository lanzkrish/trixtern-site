import Link from 'next/link';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Newsroom', href: '#' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Web Development', href: '/services' },
  { label: 'App Design', href: '/services' },
  { label: 'Cloud Solutions', href: '/services' },
  { label: 'Consulting', href: '/services' },
];

const socialLinks = [
  { label: 'Twitter / X', href: '#' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/trixtern/' },
  // { label: 'Instagram', href: '#' },
  // { label: 'Dribbble', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-24 mb-16 md:mb-24">
          {/* Branding */}
          <div className="lg:w-1/3 flex flex-col items-center">
           {/* Logo */}
                  <Link href="/" className="flex items-center gap-2 group">
                    <img
                      src="/logos/trixternnobg.png"
                      alt="Trixtern"
                      className="h-27 md:h-28 w-auto"
                    />
                    </Link>
            <div className="mb-5 flex flex-col leading-tight items-center">
              <span
                className="text-[#ec1313] text-2xl md:text-3xl tracking-[0.05em] uppercase font-bold"
                style={{ fontFamily: 'BPdots, sans-serif' }}
              >
                TRIXTERN
              </span>
              <span
                className="text-white text-[10px] md:text-xs tracking-[0.25em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                TECHNOLOGIES
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs items-center justify-center">
              Building digital experiences that matter. Minimalist design for maximum impact.
            </p>
          </div>

          {/* Link columns */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4 md:mb-6">Company</h4>
              <ul className="space-y-3 md:space-y-4 text-sm text-white/60">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 md:mb-6">Services</h4>
              <ul className="space-y-3 md:space-y-4 text-sm text-white/60">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-semibold mb-4 md:mb-6">Social</h4>
              <ul className="flex flex-row md:flex-col gap-4 md:space-y-0 text-sm text-white/60 flex-wrap">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
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
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 Trixtern Technologies. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            {/* <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
