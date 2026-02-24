import Link from 'next/link';

const services = [
  {
    title: 'Artificial Intelligence',
    desc: 'We build neural networks that solve complex operational challenges. Our AI solutions integrate seamlessly into your existing infrastructure, providing actionable insights and automation that feels like magic, not mechanics.',
  },
  {
    title: 'Software Engineering',
    desc: "Bespoke applications engineered for scale, performance, and absolute reliability. We don't just write code; we architect resilient digital ecosystems tailored to the unique pulse of your business operations.",
  },
  {
    title: 'FinTech Solutions',
    desc: 'Secure transaction layers and blockchain integration for the modern economy. We navigate the complexities of financial compliance while delivering frictionless user experiences that define the next generation of banking.',
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'Serverless architectures designed for infinite scalability and zero downtime. Our cloud strategies liberate your data, allowing it to move as fast as your ideas do, securely and efficiently across the globe.',
    cta: { label: 'VIEW INFRASTRUCTURE', href: '#' },
  },
  {
    title: 'Cybersecurity',
    desc: 'Proactive threat detection systems protecting your most valuable assets. We employ advanced predictive modeling to neutralize threats before they materialize, ensuring your digital fortress remains impregnable.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-12 md:pb-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[1.05] mb-4 md:mb-6">
          Our
          <br />
          Capabilities.
        </h1>
        <p className="text-black/50 text-base md:text-lg max-w-md leading-relaxed">
          Engineering the future through precision, intelligence, and unwavering minimalism.
        </p>
      </section>

      {/* Service List */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        {services.map((service, i) => (
          <div key={i} className="group">
            {/* Divider */}
            <div
              className={`h-[2px] w-16 mb-8 md:mb-12 mt-10 md:mt-16 bg-black/10 group-hover:bg-[#ec1313] transition-colors ${
                i === 0 ? 'mt-0' : ''
              }`}
            />

            <div className="flex flex-col lg:flex-row lg:items-start gap-4 md:gap-8 lg:gap-24">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight lg:w-2/5 shrink-0 text-black group-hover:text-[#ec1313] transition-colors"
              >
                {service.title}
              </h2>
              <div className="lg:w-3/5">
                <p className="text-black/60 text-sm md:text-base leading-relaxed mb-4 md:mb-6">{service.desc}</p>
                {service.cta && (
                  <Link
                    href={service.cta.href}
                    className="inline-flex items-center gap-2 text-[#ec1313] text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                  >
                    {service.cta.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
