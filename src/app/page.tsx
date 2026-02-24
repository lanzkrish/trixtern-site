import Link from 'next/link';

export default function HomePage() {
  return (
    <>
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

      {/* Selected Work */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10 md:mb-14">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: 'Project Alpha',
              category: 'Fintech Dashboard',
              gradient: 'from-gray-200 to-gray-300',
            },
            {
              title: 'Project Beta',
              category: 'Healthcare AI Platform',
              gradient: 'from-gray-700 to-gray-900',
            },
          ].map((project, i) => (
            <Link href="/work" key={i} className="group block">
              <div
                className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${project.gradient} mb-4 overflow-hidden relative`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-black text-white/20">
                  {i === 0 ? '▲' : 'AI'}
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1 flex items-center justify-between">
                {project.title}
                <svg className="w-4 h-4 text-black/30 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </h3>
              <p className="text-sm text-black/50">{project.category}</p>
            </Link>
          ))}
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
