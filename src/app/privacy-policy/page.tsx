import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-sm text-black/40 mb-8 md:mb-10">Last updated: October 24, 2023</p>
      <p className="text-black/60 text-sm md:text-base leading-relaxed mb-10 md:mb-12">
        At Trixtern Technologies, privacy is not just a feature—it&apos;s a fundamental human right. We design our products and services to protect your personal information and to be transparent about what we collect.
      </p>
      <hr className="border-black/10 mb-10 md:mb-12" />

      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">1. Information We Collect</h2>
      <p className="text-black/60 text-sm md:text-base leading-relaxed mb-6 md:mb-8">We believe in minimizing data collection. We only collect information strictly necessary to provide the best experience.</p>
      <div className="bg-[#f8f6f6] rounded-xl p-5 md:p-6 mb-3 md:mb-4">
        <h3 className="font-bold mb-1.5 md:mb-2 text-sm md:text-base">Personal Information</h3>
        <p className="text-xs md:text-sm text-black/50">Information you provide directly to us, such as name, email, phone number, and payment information.</p>
      </div>
      <div className="bg-[#f8f6f6] rounded-xl p-5 md:p-6 mb-10 md:mb-12">
        <h3 className="font-bold mb-1.5 md:mb-2 text-sm md:text-base">Usage Data</h3>
        <p className="text-xs md:text-sm text-black/50">Diagnostic and usage data collected automatically, aggregated and anonymized to protect your identity.</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">2. How We Use Your Information</h2>
      <p className="text-black/60 text-sm md:text-base leading-relaxed mb-4 md:mb-6">We use personal data to power services, process transactions, communicate with you, and for security and fraud prevention.</p>
      <ul className="space-y-3 mb-10 md:mb-12">
        {['To provide seamless hardware and software integration.',
          'To communicate important product updates and security notices.',
          'To improve our services through anonymized analytics.',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[#ec1313] mt-0.5">✓</span>
            <span className="text-black/60 text-xs md:text-sm">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">3. Data Sharing and Third Parties</h2>
      <p className="text-black/60 text-sm md:text-base leading-relaxed mb-6 md:mb-8">Trixtern does not sell your personal data. We only share with service providers acting on our behalf.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-12">
        <div className="border border-black/10 rounded-xl p-5 md:p-6">
          <h3 className="font-bold mb-1.5 md:mb-2 text-sm md:text-base">Trusted Partners</h3>
          <p className="text-xs md:text-sm text-black/50">Partners who help us deliver products, like shipping companies.</p>
        </div>
        <div className="border border-black/10 rounded-xl p-5 md:p-6">
          <h3 className="font-bold mb-1.5 md:mb-2 text-sm md:text-base">Legal Compliance</h3>
          <p className="text-xs md:text-sm text-black/50">When required by law, legal process, litigation, or public authorities.</p>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">4. Your Privacy Rights</h2>
      <p className="text-black/60 text-sm md:text-base leading-relaxed mb-6 md:mb-8">You may have the right to access, correct, or delete your personal data through your Trixtern ID account page.</p>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-12">
        <button className="flex items-center justify-between border border-black/10 rounded-xl px-5 md:px-6 py-3.5 md:py-4 hover:border-black/30 transition-colors flex-1 text-left">
          <span className="text-xs md:text-sm font-medium">Manage your data</span>
          <span>→</span>
        </button>
        <button className="flex items-center justify-between border border-black/10 rounded-xl px-5 md:px-6 py-3.5 md:py-4 hover:border-black/30 transition-colors flex-1 text-left">
          <span className="text-xs md:text-sm font-medium">Request data deletion</span>
          <span>→</span>
        </button>
      </div>
      <hr className="border-black/10 mb-10 md:mb-12" />

      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">5. Contact Us</h2>
      <p className="text-black/60 text-sm md:text-base leading-relaxed mb-6 md:mb-8">If you have questions about our Privacy Policy, contact our Data Protection Officer.</p>
      <div className="flex items-start gap-3 md:gap-4 bg-[#f8f6f6] rounded-xl p-5 md:p-6">
        <span className="text-[#ec1313] text-xl md:text-2xl">✉</span>
        <div>
          <h3 className="font-bold mb-1 text-sm md:text-base">Email Privacy Team</h3>
          <a href="mailto:privacy@trixtern.com" className="text-[#ec1313] text-xs md:text-sm font-medium hover:underline">privacy@trixtern.com</a>
          <p className="text-xs md:text-sm text-black/40 mt-1">We typically respond within 48 hours.</p>
        </div>
      </div>
      <div className="mt-10 md:mt-12 text-center">
        <Link href="/terms" className="text-sm text-black/40 hover:text-black transition-colors">View Terms of Service →</Link>
      </div>
    </section>
  );
}
