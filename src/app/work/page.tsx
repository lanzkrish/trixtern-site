export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-12 md:pb-16">
        <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">
          Portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[1.05] mb-4 md:mb-6">
          Selected
          <br />
          Projects.
        </h1>
        <p className="text-black/50 text-base md:text-lg max-w-md leading-relaxed">
          Showcasing our finest digital solutions and engineering marvels. We build interfaces that define the future of interaction.
        </p>
      </section>

      {/* Intro Statement */}
      <section className="bg-[#f8f6f6] py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight leading-snug mb-4">
              We build systems that scale quietly.
            </p>
            <p className="text-black/50 text-sm md:text-base leading-relaxed">
              Every product we work on solves a real operational challenge. We focus on clarity in architecture, precision in execution, and longevity in design.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12 md:mb-16">Selected Projects</h2>

        <div className="space-y-0">
          {[
            {
              title: 'Sage Odisha',
              category: 'Renewable Energy',
              desc: 'A digital platform built for a leading rooftop solar and renewable energy provider in Odisha. We translated a complex service ecosystem — spanning solar installations, government subsidies, and net metering — into a clean, intuitive web experience.',
            },
            {
              title: 'Webgage Labs',
              category: 'Career Tech',
              desc: 'A career acceleration platform designed to bridge the gap between learning and industry readiness. We helped refine and scale the digital experience supporting internships, professional development programs, and structured career pathways.',
            },
            {
              title: 'Tarutra Robotics',
              category: 'Automation & Robotics',
              desc: 'An automation and robotics company building advanced mechanical systems. Our work supported their digital presence and platform structure — ensuring their engineering capabilities are matched by a scalable digital foundation.',
            },
            {
              title: 'PC Quicker',
              category: 'On-Demand Services',
              desc: 'An on-demand PC and laptop servicing platform focused on reliability and convenience. We streamlined service workflows and digital operations to improve accessibility and customer experience.',
            },
            {
              title: 'Interncify',
              category: 'EdTech',
              desc: 'An immersive learning ecosystem built for students navigating modern technology careers. We contributed to building a structured, scalable platform experience aligned with long-term growth.',
            },
          ].map((project, i) => (
            <div key={i} className="group border-t border-black/[0.06] first:border-t-0">
              <div className="py-8 md:py-12 flex flex-col lg:flex-row lg:items-start gap-4 md:gap-6 lg:gap-16">
                {/* Left: Number + Title */}
                <div className="lg:w-2/5 shrink-0 flex items-start gap-4 md:gap-6">
                  <span className="text-3xl md:text-4xl font-black text-black/[0.06] leading-none mt-1 shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span className="text-[#ec1313] text-[10px] md:text-xs font-bold uppercase tracking-widest block mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight group-hover:text-[#ec1313] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Description */}
                <div className="lg:w-3/5">
                  <p className="text-black/50 text-sm md:text-base leading-relaxed">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extended Collaborations */}
      <section className="bg-[#181111] text-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-2xl mb-12 md:mb-16">
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">Extended Collaborations</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 md:mb-5">Broader Technical Contributions</h2>
            <p className="text-white/40 text-sm md:text-base leading-relaxed">
              In addition to projects delivered directly by Trixtern, members of our engineering team have contributed to high-impact digital platforms across mobility, telematics, and consumer brands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                label: 'Mobility & Rental Platforms',
                desc: 'Digital systems supporting self-drive vehicle rentals and operational logistics across Odisha.',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
              },
              {
                label: 'Fleet & Telematics Solutions',
                desc: 'Real-time tracking platforms and data-driven fleet optimization systems.',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                ),
              },
              {
                label: 'Consumer & Regional Brands',
                desc: 'Legacy food and lifestyle brands transitioning into modern digital ecosystems.',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.999 2.999 0 013.397-1.174 2.999 2.999 0 012.853-2.174h1.5a2.999 2.999 0 012.853 2.174A2.999 2.999 0 0121 9.349" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-7 hover:border-[#ec1313]/30 transition-colors group">
                <div className="text-white/30 group-hover:text-[#ec1313] transition-colors mb-4 md:mb-5">
                  {item.icon}
                </div>
                <h3 className="text-sm md:text-base font-bold mb-2 md:mb-3 text-white/90">{item.label}</h3>
                <p className="text-white/40 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-white/20 text-xs mt-8 md:mt-10 max-w-lg leading-relaxed">
            These collaborations reflect the broader technical depth within our team — contributions made across platforms, not individual brand claims.
          </p>
        </div>
      </section>

      {/* Case Study: Sage Odisha */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left: Header */}
          <div className="lg:w-2/5 shrink-0">
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">Case Study</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 md:mb-4">
              Sage Odisha
            </h2>
            <p className="text-black/50 text-sm md:text-base leading-relaxed">
              Web Presence for a Leading Renewable Energy Provider
            </p>
            <div className="h-[2px] w-12 bg-[#ec1313] mt-6 md:mt-8" />
          </div>

          {/* Right: Content */}
          <div className="lg:w-3/5">
            <p className="text-black/60 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              Sage Odisha partners with residential and commercial customers to deliver clean energy through MNRE-approved rooftop solar installations, backed by official government subsidy programs like PM Surya Ghar.
            </p>
            <p className="text-black/60 text-sm md:text-base leading-relaxed mb-8 md:mb-10">
              Our collaboration focused on elevating their digital foundation — translating a complex service ecosystem into a simple, intuitive web experience that reflects the clarity, structure, and professionalism of a category-defining energy provider.
            </p>

            {/* What We Did */}
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-5">Our Focus</h3>
            <div className="space-y-3 mb-8 md:mb-10">
              {[
                'Clean information hierarchy for solar solutions',
                'Structured presentation of services and subsidy programs',
                'Scalable interface architecture',
                'Performance-focused front-end design',
                'Accessible and responsive layouts',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-px h-5 bg-[#ec1313] shrink-0 mt-0.5" />
                  <span className="text-black/60 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* The Outcome */}
            <div className="border-l-2 border-[#ec1313] pl-5 md:pl-6 py-1">
              <h3 className="text-lg md:text-xl font-bold mb-2">The Outcome</h3>
              <p className="text-black/50 text-sm md:text-base leading-relaxed">
                A professional, scalable web presence that mirrors the real-world impact of Sage Odisha&apos;s renewable energy initiatives — maintaining clarity and trust for every user.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach to Every Project */}
      <section className="bg-[#f8f6f6] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">Our Standard</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 md:mb-5">
              Our Approach to Every Project
            </h2>
            <p className="text-black/50 text-sm md:text-base leading-relaxed mb-10 md:mb-14">
              We don&apos;t measure success by volume. We measure it by durability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto">
            {[
              {
                num: '01',
                title: 'Understand First',
                desc: 'Understand the system before writing code.',
              },
              {
                num: '02',
                title: 'Build for Scale',
                desc: 'Build for the next five years, not the next five weeks.',
              },
              {
                num: '03',
                title: 'Choose Clarity',
                desc: 'Prioritize clarity over complexity.',
              },
            ].map((item) => (
              <div key={item.num} className="text-center group">
                <span className="text-4xl md:text-5xl font-black text-black/[0.06] block mb-3 group-hover:text-[#ec1313]/20 transition-colors">
                  {item.num}
                </span>
                <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-[#ec1313] transition-colors">
                  {item.title}
                </h3>
                <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
