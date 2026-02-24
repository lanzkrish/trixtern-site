'use client';

import Link from 'next/link';

const tocItems = [
  'Introduction', 'Definitions', 'Intellectual Property', 'User Obligations',
  'Payment Terms', 'Limitation of Liability', 'Termination', 'Contact Information',
];

export default function TermsPage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Sidebar TOC */}
        <aside className="lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-24">
            <h3 className="text-xs uppercase tracking-widest font-bold text-black/40 mb-4 md:mb-6">On This Page</h3>
            <ul className="flex flex-row lg:flex-col gap-2 lg:gap-3 text-sm flex-wrap">
              {tocItems.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(`section-${i}`)}
                    className="text-black/50 hover:text-black transition-colors text-left text-xs lg:text-sm"
                  >
                    {i > 0 ? `${i}. ` : ''}{item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 max-w-3xl">
          <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">Legal</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2">Terms &amp; Conditions</h1>
          <p className="text-sm text-black/40 mb-5 md:mb-6">Effective Date: October 24, 2023</p>
          <p id="section-0" className="text-black/60 text-sm md:text-base leading-relaxed mb-8 md:mb-12">
            Please read these terms carefully before using our services. By accessing or using Trixtern Technologies, you agree to be bound by these terms.
          </p>

          <p className="text-black/60 text-sm md:text-base leading-relaxed mb-8 md:mb-12">
            These Terms (&quot;Terms&quot;) govern your access to and use of the Trixtern website, products, and services (&quot;Services&quot;). Trixtern Technologies (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides these Services to you subject to the following conditions. If you do not agree to these Terms, you may not access or use the Services.
          </p>

          {/* Section 1: Definitions */}
          <h2 id="section-1" className="flex items-center gap-3 text-lg md:text-xl font-bold mb-4 md:mb-6 mt-10 md:mt-16">
            <span className="text-[#ec1313] text-sm font-bold">01</span> Definitions
          </h2>
          <div className="text-black/60 text-xs md:text-sm leading-relaxed space-y-2.5 md:space-y-3 mb-8 md:mb-12 pl-2 border-l-2 border-black/5">
            <p><strong>&quot;Account&quot;</strong> means a unique account created for You to access our Service or parts of our Service.</p>
            <p><strong>&quot;Company&quot;</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;) refers to Trixtern Technologies Inc.</p>
            <p><strong>&quot;Content&quot;</strong> refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You.</p>
            <p><strong>&quot;Service&quot;</strong> refers to the Website and associated software platforms provided by Trixtern.</p>
          </div>

          {/* Section 2: Intellectual Property */}
          <h2 id="section-2" className="flex items-center gap-3 text-lg md:text-xl font-bold mb-4 md:mb-6 mt-10 md:mt-16">
            <span className="text-[#ec1313] text-sm font-bold">02</span> Intellectual Property Rights
          </h2>
          <p className="text-black/60 text-sm md:text-base leading-relaxed mb-3 md:mb-4">The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of Trixtern Technologies and its licensors.</p>
          <p className="text-black/60 text-sm md:text-base leading-relaxed mb-8 md:mb-12">Our trademarks and trade dress may not be used in connection with any product or service without prior written consent. Any feedback, comments, or suggestions you may provide is entirely voluntary and we will be free to use such feedback as we see fit.</p>

          {/* Section 3: User Obligations */}
          <h2 id="section-3" className="flex items-center gap-3 text-lg md:text-xl font-bold mb-4 md:mb-6 mt-10 md:mt-16">
            <span className="text-[#ec1313] text-sm font-bold">03</span> User Obligations
          </h2>
          <p className="text-black/60 text-sm md:text-base leading-relaxed mb-4 md:mb-6">By using the Service, you represent and warrant that:</p>
          <ol className="list-decimal list-inside space-y-2.5 md:space-y-3 text-black/60 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update as necessary.</li>
            <li>You have the legal capacity and agree to comply with these Terms of Use.</li>
            <li>You will not access the Service through automated or non-human means.</li>
            <li>You will not use the Service for any illegal or unauthorized purpose.</li>
          </ol>
          <div className="bg-[#f8f6f6] border-l-4 border-[#ec1313] rounded-r-xl px-5 md:px-6 py-3.5 md:py-4 mb-8 md:mb-12">
            <h4 className="text-xs md:text-sm font-bold mb-1">Important Note:</h4>
            <p className="text-xs md:text-sm text-black/50">Violation of any of these obligations may result in immediate termination of your account without prior notice.</p>
          </div>

          {/* Section 4: Payment Terms */}
          <h2 id="section-4" className="flex items-center gap-3 text-lg md:text-xl font-bold mb-4 md:mb-6 mt-10 md:mt-16">
            <span className="text-[#ec1313] text-sm font-bold">04</span> Payment Terms
          </h2>
          <p className="text-black/60 text-sm md:text-base leading-relaxed mb-3 md:mb-4">Certain aspects of the Service may be provided for a fee or other charge. If you elect to use paid aspects, you agree to the pricing, payment and billing policies applicable.</p>
          <p className="text-black/60 text-sm md:text-base leading-relaxed mb-8 md:mb-12">All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you shall be responsible for payment of all such taxes.</p>

          {/* Section 5: Limitation of Liability */}
          <h2 id="section-5" className="flex items-center gap-3 text-lg md:text-xl font-bold mb-4 md:mb-6 mt-10 md:mt-16">
            <span className="text-[#ec1313] text-sm font-bold">05</span> Limitation of Liability
          </h2>
          <p className="text-xs uppercase tracking-widest text-black/40 font-bold mb-3 md:mb-4">Disclaimer</p>
          <p className="text-black/60 text-sm md:text-base leading-relaxed mb-8 md:mb-12">In no event shall Trixtern Technologies, nor its directors, employees, partners, agents, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>

          {/* Section 6: Termination */}
          <h2 id="section-6" className="flex items-center gap-3 text-lg md:text-xl font-bold mb-4 md:mb-6 mt-10 md:mt-16">
            <span className="text-[#ec1313] text-sm font-bold">06</span> Termination
          </h2>
          <p className="text-black/60 text-sm md:text-base leading-relaxed mb-8 md:mb-12">We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever. Upon termination, your right to use the Service will immediately cease.</p>

          {/* Section 7: Contact Information */}
          <h2 id="section-7" className="flex items-center gap-3 text-lg md:text-xl font-bold mb-4 md:mb-6 mt-10 md:mt-16">
            <span className="text-[#ec1313] text-sm font-bold">07</span> Contact Information
          </h2>
          <p className="text-black/60 text-sm md:text-base leading-relaxed mb-4 md:mb-6">If you have any questions about these Terms, please contact our legal team.</p>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-black/40 font-bold mb-1.5 md:mb-2">Email Us</p>
              <a href="mailto:legal@trixtern.com" className="text-[#ec1313] text-sm font-medium hover:underline">legal@trixtern.com</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-black/40 font-bold mb-1.5 md:mb-2">Mailing Address</p>
              <p className="text-xs md:text-sm text-black/60">100 Tech Plaza, Suite 400<br />San Francisco, CA 94107</p>
            </div>
          </div>

          {/* Cross-link */}
          <div className="bg-[#f8f6f6] rounded-xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold mb-1 text-sm md:text-base">Looking for something else?</h3>
              <p className="text-xs md:text-sm text-black/50">Check out our Privacy Policy regarding data handling.</p>
            </div>
            <Link href="/privacy-policy" className="border border-black/20 rounded-lg px-5 py-2.5 text-xs md:text-sm font-medium hover:border-black/40 transition-colors whitespace-nowrap">
              View Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
