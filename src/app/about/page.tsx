export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-12 md:pb-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[1.05]">
          Built for the
          <br />
          <span className="text-[#ec1313]">Long Term</span>.
        </h1>
        <p className="text-black/50 text-base md:text-lg mt-5 md:mt-6 max-w-lg leading-relaxed">
          We don&apos;t chase trends. We engineer the digital infrastructure of the next century with absolute precision, clarity, and purpose.
        </p>
      </section>

      {/* Opening Statement */}
      <section className="bg-[#f8f6f6] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug mb-6">
              We started with a simple belief.
            </p>
            <p className="text-black/50 text-base md:text-lg leading-relaxed mb-4">
              Great technology isn&apos;t built by chasing trends.
            </p>
            <p className="text-black/50 text-base md:text-lg leading-relaxed">
              It&apos;s built by understanding what should exist next.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          <div className="lg:w-2/5 shrink-0">
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">Our Origin</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How It Started</h2>
          </div>
          <div className="lg:w-3/5 space-y-5 text-black/60 text-sm md:text-base leading-relaxed">
            <p>
              Trixtern began as a small, engineer-led initiative — founded by two final-year students who believed software could be more deliberate, more thoughtful, and more enduring.
            </p>
            <p>
              What started as freelance work became something larger: a commitment to building systems that don&apos;t just function — they scale, adapt, and last.
            </p>
            <p className="text-black font-medium">
              In 2024, Trixtern Technologies was formally established.
            </p>
            <p>
              Not as a milestone. But as a decision to build with long-term intent.
            </p>
          </div>
        </div>
      </section>

      {/* We Build With Intention */}
      <section className="border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">Philosophy</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 md:mb-8">We build with intention.</h2>
            <div className="space-y-4 text-black/60 text-sm md:text-base leading-relaxed mb-10 md:mb-12">
              <p>Software today is fast. But speed alone isn&apos;t progress.</p>
              <p>We believe the future belongs to systems that are:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8 mb-10 md:mb-12">
              {[
                'Architected with clarity',
                'Designed for resilience',
                'Built to evolve',
                'Engineered with intelligence at their core',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <span className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-xs font-bold text-black/30 shrink-0 mt-0.5 group-hover:bg-[#ec1313] group-hover:text-white transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm md:text-base font-medium text-black/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-[#ec1313] pl-5 md:pl-6 py-1">
              <p className="text-black/60 text-sm md:text-base leading-relaxed mb-3">
                We use artificial intelligence not as a feature — but as a foundation to rethink how products are built, optimized, and experienced.
              </p>
              <p className="text-black font-medium text-sm md:text-base">
                AI isn&apos;t the headline. It&apos;s the infrastructure behind better decisions, better automation, and better scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering the Next Standard */}
      <section className="bg-[#181111] text-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">What We Focus On</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5 md:mb-6">Engineering the Next Standard</h2>
            <p className="text-white/40 text-sm md:text-base leading-relaxed">
              The future will not be defined by more software. It will be defined by better systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                ),
                title: 'Intelligent Product Architecture',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                ),
                title: 'Scalable Digital Platforms',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                ),
                title: 'Thoughtful User Experiences',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12" />
                  </svg>
                ),
                title: 'Human-Enhancing Automation',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: 'Infrastructure for Long-Term Growth',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-6 flex items-start gap-4 hover:border-[#ec1313]/30 transition-colors group">
                <div className="text-white/30 group-hover:text-[#ec1313] transition-colors shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <span className="text-sm md:text-base font-medium text-white/80">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 md:pt-10 max-w-2xl">
            <p className="text-white/40 text-sm md:text-base leading-relaxed">
              We are less interested in building &ldquo;apps.&rdquo;
            </p>
            <p className="text-white font-medium text-sm md:text-base mt-1">
              We are more interested in building frameworks that define categories.
            </p>
          </div>
        </div>
      </section>

      {/* Built by Engineers */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          <div className="lg:w-2/5 shrink-0">
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">Culture</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Built by Engineers.<br />Led by Vision.</h2>
          </div>
          <div className="lg:w-3/5">
            <p className="text-black/60 text-sm md:text-base leading-relaxed mb-8 md:mb-10">
              We are an engineer-first company. That means:
            </p>
            <div className="space-y-5 md:space-y-6">
              {[
                'We value precision over noise.',
                'We prioritize depth over surface.',
                'We build quietly, release deliberately, and iterate continuously.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-px h-6 bg-[#ec1313] shrink-0 mt-1" />
                  <p className="text-black/70 text-sm md:text-base font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 md:mt-12 bg-[#f8f6f6] rounded-xl p-5 md:p-6">
              <p className="text-black/50 text-sm md:text-base leading-relaxed">
                Every decision — from code structure to interface spacing — is made with care.
              </p>
              <p className="text-black font-medium text-sm md:text-base mt-2">
                We don&apos;t aim to ship the fastest. We aim to ship what endures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="bg-[#f8f6f6] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">Looking Forward</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8">
              The next decade will redefine how technology integrates into daily life.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10 mb-8 md:mb-10">
              {[
                'Systems will become more adaptive.',
                'Products will become more contextual.',
                'Intelligence will move from interface to infrastructure.',
              ].map((item, i) => (
                <p key={i} className="text-black/50 text-sm md:text-base leading-relaxed">{item}</p>
              ))}
            </div>
            <div className="inline-block bg-white rounded-xl px-6 md:px-8 py-4 md:py-5 shadow-sm">
              <p className="text-black/50 text-sm md:text-base">
                We are building for that shift.
              </p>
              <p className="text-black font-bold text-sm md:text-base mt-1">
                Not reacting to it. <span className="text-[#ec1313]">Designing for it.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Direction */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">Our Direction</span>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug">
            To develop innovative digital products that combine intelligence, simplicity, and scale — and to shape the next generation of software systems.
          </p>
        </div>
      </section>
    </>
  );
}
