import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Trixtern Technologies | Affordable IT Infrastructure & Software Development in Bhubaneswar',
  description:
    'Trixtern Technologies is your complete IT partner in Bhubaneswar, Odisha. We handle everything — websites, apps, cloud servers, cybersecurity, DevOps, and ongoing maintenance — so growing businesses can get enterprise-grade IT infrastructure without the enterprise price tag.',
  alternates: {
    canonical: 'https://www.trixtern.com',
  },
  openGraph: {
    title: 'Trixtern Technologies | Complete IT Infrastructure for Growing Businesses in Bhubaneswar',
    description:
      'Affordable IT infrastructure, software development, cloud solutions & cybersecurity for startups and SMBs in Bhubaneswar, Odisha. One team for everything.',
    url: 'https://www.trixtern.com',
  },
};

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://www.trixtern.com' }]} />
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[1.05] mb-6 md:mb-8">
            Engineering
            <br />
            <span className="text-black/30">Intentionality.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <p className="text-black/50 text-base md:text-lg max-w-sm leading-relaxed">
              We build digital ecosystems for the world&apos;s most ambitious brands, focusing on clarity, precision, and measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#ec1313] text-white text-sm font-semibold px-7 py-3.5 rounded-lg hover:bg-[#c90f0f] transition-colors"
              >
                Start a Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center text-sm font-semibold px-7 py-3.5 border border-black/20 rounded-lg hover:border-black transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 md:mb-14 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Expertise</h2>
          <Link href="/services" className="text-sm font-medium text-black/50 hover:text-black transition-colors flex items-center gap-1">
            Explore all services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-black/10 rounded-xl overflow-hidden">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                </svg>
              ),
              title: 'Digital Strategy',
              desc: 'Aligning business goals with user needs through data-driven insights.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zM17.9 17.39c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              ),
              title: 'UI/UX Design',
              desc: 'Crafting intuitive and beautiful interfaces that delight users.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              ),
              title: 'Development',
              desc: 'Robust full-stack engineering for complex, scalable systems.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                </svg>
              ),
              title: 'Cloud Infra',
              desc: 'Scalable and secure server architecture built for performance.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 md:p-8 hover:bg-black/[0.02] transition-colors cursor-pointer group
                ${i > 0 ? 'border-t sm:border-t lg:border-t-0 sm:odd:border-l lg:border-l border-black/10' : ''}
                ${i === 2 ? 'sm:border-l-0 lg:border-l' : ''}
              `}
            >
              <div className="text-black/70 mb-10 md:mb-16 group-hover:text-[#ec1313] transition-colors">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-black/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Process */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">The Process</h2>
        <p className="text-black/50 text-base md:text-lg mb-12 md:mb-16 max-w-xl leading-relaxed">
          A rigorous framework designed to eliminate ambiguity and deliver excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            {
              num: '01',
              icon: (
                <svg className="w-5 h-5 text-[#ec1313]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              ),
              title: 'Discovery',
              desc: 'Deep dive into requirements and market analysis.',
            },
            {
              num: '02',
              icon: (
                <svg className="w-5 h-5 text-[#ec1313]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Strategy',
              desc: 'Architecting the solution and roadmap.',
            },
            {
              num: '03',
              icon: (
                <svg className="w-5 h-5 text-[#ec1313]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ),
              title: 'Build',
              desc: 'Agile development with rigorous testing.',
            },
            {
              num: '04',
              icon: (
                <svg className="w-5 h-5 text-[#ec1313]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
                </svg>
              ),
              title: 'Launch',
              desc: 'Deployment, monitoring, and scale.',
            },
          ].map((step) => (
            <div key={step.num} className="relative">
              <div className="flex items-center gap-3 mb-4">
                {step.icon}
                <span className="text-5xl md:text-6xl font-black text-black/[0.06] leading-none absolute right-0 top-0">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-black/50 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Trixtern — Complete IT Infrastructure */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 md:mb-14 gap-4">
          <div className="max-w-xl">
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">Why Choose Us</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Your Complete IT Partner — Not Just Another Web Agency
            </h2>
            <p className="text-black/50 text-base md:text-lg leading-relaxed">
              Growing a business is hard enough. You shouldn&apos;t have to worry about servers, infrastructure, or maintaining complex tech systems. We handle your <strong className="text-black/70">entire IT ecosystem</strong> — from websites and apps to cloud infrastructure, cybersecurity, and ongoing maintenance — so you can focus on what you do best: building your business.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#ec1313] hover:text-[#c90f0f] transition-colors shrink-0 mt-2"
          >
            Talk to us — it costs nothing
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg>
              ),
              title: 'End-to-End IT Infrastructure',
              desc: 'From domain & hosting to cloud servers, databases, DevOps pipelines, and monitoring — we build and manage everything so you never have to hire an in-house IT team.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              ),
              title: 'Budget-Friendly for Startups & SMBs',
              desc: 'You don\'t need lakhs to get started. We offer flexible, affordable plans designed for businesses in Bhubaneswar and Odisha that want enterprise-grade IT without the enterprise price tag.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              ),
              title: 'Security & Maintenance Included',
              desc: 'Cyberattacks don\'t wait. We proactively monitor, secure, and maintain your systems 24/7 — SSL, firewalls, backups, updates — everything handled.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>
              ),
              title: 'Cloud & Scalability',
              desc: 'Start small, scale big. We set up cloud infrastructure that grows with your business — no migration headaches, no downtime, no surprises.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              ),
              title: 'Beyond Websites & Apps',
              desc: 'We\'re not a typical web design shop. We handle email systems, CRM setup, payment gateways, ERP integration, API development, and complete digital transformation.',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              ),
              title: 'One Team for Everything',
              desc: 'Stop juggling 5 different vendors. One team, one point of contact — your designers, developers, cloud engineers, and support squad all under one roof in Bhubaneswar.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-black/[0.08] rounded-xl p-6 md:p-7 hover:border-[#ec1313]/30 hover:bg-[#ec1313]/[0.02] transition-all group"
            >
              <div className="text-black/40 mb-5 group-hover:text-[#ec1313] transition-colors">{item.icon}</div>
              <h3 className="text-base md:text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-black/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Who It's For Banner */}
        <div className="bg-[#f8f6f6] rounded-xl p-6 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold mb-2">Built for businesses that need IT, not IT headaches</h3>
            <p className="text-sm md:text-base text-black/50 leading-relaxed">
              Whether you&apos;re a <strong className="text-black/70">startup in Bhubaneswar</strong>, an <strong className="text-black/70">SMB in Odisha</strong>, or an <strong className="text-black/70">ambitious founder</strong> who knows their business needs technology but doesn&apos;t want to burn cash hiring a full IT department — we&apos;re your team. From ₹0 overhead to full-scale infrastructure, we grow with you.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#ec1313] text-white text-sm font-semibold px-7 py-3.5 rounded-lg hover:bg-[#c90f0f] transition-colors shrink-0 whitespace-nowrap"
          >
            Get a Free Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-5 md:mb-6">
            Ready to build the extraordinary?
          </h2>
          <p className="text-black/50 text-base md:text-lg mb-8 md:mb-10">
            Let&apos;s discuss how we can engineer your vision into reality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-black text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#ec1313] transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
