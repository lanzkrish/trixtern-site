import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { 
  ArrowRight, Monitor, Code2, Database, Bot, Smartphone, Cloud, 
  CheckCircle2, Server, Zap, Shield, Rocket, Building2, Sun, 
  HeartPulse, GraduationCap, ShoppingBag, Factory, Hotel, Home, 
  Landmark, Scale, Star, ExternalLink, Terminal, Cpu, Network, Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trixtern Technologies | Custom Software, Websites & AI Solutions',
  description:
    'Trixtern Technologies is a premium software development company building custom software, websites, AI solutions, ERP systems, and mobile apps that help businesses grow.',
  alternates: {
    canonical: 'https://www.trixtern.com',
  },
  openGraph: {
    title: 'Trixtern Technologies | Software, Websites & AI Solutions Built for Growth',
    description:
      'We build digital ecosystems for growing businesses. Custom software, AI, and cloud solutions engineered for measurable impact.',
    url: 'https://www.trixtern.com',
  },
};

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://www.trixtern.com' }]} />
      
      {/* Hero Section */}
      <section className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center relative z-10">
          <div className="flex-1 w-full max-w-4xl lg:max-w-none">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.05] mb-6 md:mb-8">
              Custom Software,<br />
              <span className="text-[#ec1313]">AI Solutions &</span><br />
              Business Automation<br />
              <span className="text-black/30">Built for Growth.</span>
            </h1>
            <p className="text-black/50 text-base md:text-xl max-w-2xl leading-relaxed mb-10">
              We help startups, SMEs and enterprises build scalable websites, ERP systems, AI-powered applications, mobile apps and custom business software that automate operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#ec1313] text-white text-base font-semibold px-8 py-4 rounded-lg hover:bg-[#c90f0f] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-[#ec1313]/20"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center text-base font-semibold px-8 py-4 border border-black/10 bg-black/[0.02] rounded-lg hover:bg-black/[0.05] hover:border-black/20 transition-all duration-300"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
          
          {/* Animated Visuals - Comprehensive Software Ecosystem */}
          <div className="flex-1 w-full hidden lg:flex justify-end relative h-[550px]">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />
            <div className="relative w-full h-full flex items-center justify-end">
              
              {/* Main Laptop / ERP Dashboard */}
              <div className="absolute right-10 top-4 w-[520px] h-[340px] bg-white rounded-t-2xl shadow-2xl border border-black/10 overflow-hidden z-0">
                <div className="h-8 bg-gray-100 border-b border-black/5 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ec1313]/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-black/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-black/20" />
                  <div className="ml-4 h-4 w-32 bg-white rounded-sm opacity-50" />
                </div>
                <div className="flex h-full">
                  {/* Sidebar */}
                  <div className="w-16 bg-gray-50 border-r border-black/5 flex flex-col items-center py-4 gap-4">
                    <div className="w-8 h-8 rounded bg-black/10 mb-4" />
                    {[1, 2, 3, 4].map(i => <div key={i} className={`w-6 h-6 rounded ${i === 2 ? 'bg-[#ec1313]/20' : 'bg-black/5'}`} />)}
                  </div>
                  {/* Main Content Area */}
                  <div className="flex-1 p-6 flex flex-col gap-4 bg-gray-50/50">
                    <div className="flex justify-between items-center mb-2">
                      <div className="h-6 w-32 bg-black/10 rounded" />
                      <div className="h-8 w-24 bg-[#ec1313]/10 rounded border border-[#ec1313]/20" />
                    </div>
                    {/* Analytics Dashboard section */}
                    <div className="flex gap-4 mb-2">
                      <div className="flex-1 h-20 bg-white rounded-lg border border-black/5 shadow-sm p-3 flex flex-col justify-between">
                        <div className="h-3 w-16 bg-black/10 rounded" />
                        <div className="h-6 w-20 bg-black/20 rounded" />
                      </div>
                      <div className="flex-1 h-20 bg-white rounded-lg border border-black/5 shadow-sm p-3 flex flex-col justify-between">
                        <div className="h-3 w-16 bg-black/10 rounded" />
                        <div className="h-6 w-24 bg-[#ec1313]/80 rounded" />
                      </div>
                      <div className="flex-1 h-20 bg-white rounded-lg border border-black/5 shadow-sm p-3 flex flex-col justify-between">
                        <div className="h-3 w-16 bg-black/10 rounded" />
                        <div className="h-6 w-16 bg-black/20 rounded" />
                      </div>
                    </div>
                    {/* Chart area */}
                    <div className="flex-1 bg-white border border-black/5 rounded-lg shadow-sm relative overflow-hidden">
                       <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#ec1313]/5 to-transparent" />
                       <svg className="absolute bottom-0 w-full h-full text-[#ec1313]" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M0 90 Q 20 60 40 70 T 70 30 T 100 10" strokeLinecap="round" strokeLinejoin="round" />
                       </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop base */}
              <div className="absolute right-2 top-[344px] w-[536px] h-4 bg-gray-300 rounded-b-xl shadow-xl z-10 flex justify-center">
                 <div className="w-16 h-1 bg-gray-400 rounded-b-md" />
              </div>

              {/* AI Chat Window overlapping */}
              <div className="absolute right-[320px] top-[140px] w-[260px] h-[300px] bg-white rounded-xl shadow-2xl border border-black/10 overflow-hidden z-20 animate-[float_6s_ease-in-out_infinite_0.5s]">
                <div className="h-12 bg-black text-white flex items-center px-4 gap-3">
                  <div className="w-6 h-6 bg-[#ec1313] rounded-full flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">AI Assistant</div>
                    <div className="text-[10px] text-white/50">Online</div>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-3 h-[200px] bg-gray-50 overflow-hidden">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-black/10 shrink-0" />
                    <div className="bg-white border border-black/5 rounded-lg p-2 text-[10px] text-black/70 shadow-sm">
                      Analyze Q3 sales data and generate a report.
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-[#ec1313]/10 border border-[#ec1313]/20 rounded-lg p-2 text-[10px] text-black/80 shadow-sm w-[85%]">
                      Generating report... Q3 shows a 24% increase in conversions. Would you like the full PDF?
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#ec1313] shrink-0 flex items-center justify-center">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full h-12 bg-white border-t border-black/5 flex items-center px-3">
                  <div className="w-full h-8 bg-gray-100 rounded-full border border-black/5 flex items-center px-3 text-[10px] text-black/40">
                    Ask me anything...
                  </div>
                </div>
              </div>

              {/* Mobile App Preview */}
              <div className="absolute right-[40px] bottom-[20px] w-[160px] h-[320px] bg-black rounded-[2rem] shadow-2xl border-4 border-gray-800 overflow-hidden z-30 animate-[float_7s_ease-in-out_infinite_1.5s]">
                <div className="h-5 w-full flex justify-center pt-2 bg-white">
                  <div className="w-12 h-3 bg-black rounded-full" />
                </div>
                <div className="h-full bg-gray-50 px-3 pb-4 pt-2">
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-6 h-6 bg-black/10 rounded-full" />
                    <div className="w-6 h-6 bg-black/10 rounded-full" />
                  </div>
                  <h3 className="text-xs font-bold mb-3">Overview</h3>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-white p-2 rounded-lg border border-black/5 shadow-sm">
                      <div className="w-4 h-4 bg-[#ec1313]/20 rounded mb-1" />
                      <div className="h-2 w-8 bg-black/10 rounded mb-1" />
                      <div className="h-3 w-10 bg-black/30 rounded" />
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-black/5 shadow-sm">
                      <div className="w-4 h-4 bg-black/10 rounded mb-1" />
                      <div className="h-2 w-8 bg-black/10 rounded mb-1" />
                      <div className="h-3 w-12 bg-black/30 rounded" />
                    </div>
                  </div>
                  <h3 className="text-[10px] font-bold mb-2 text-black/50 uppercase">Recent Activity</h3>
                  <div className="flex flex-col gap-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="bg-white p-2 rounded border border-black/5 shadow-sm flex items-center gap-2">
                         <div className="w-5 h-5 rounded bg-black/5" />
                         <div className="flex-1">
                           <div className="h-1.5 w-16 bg-black/20 rounded mb-1" />
                           <div className="h-1.5 w-10 bg-black/10 rounded" />
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="border-y border-black/5 bg-black/[0.01]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { label: 'Software Development', icon: <Code2 className="w-5 h-5" /> },
              { label: 'Custom ERP', icon: <Database className="w-5 h-5" /> },
              { label: 'AI Solutions', icon: <Bot className="w-5 h-5" /> },
              { label: 'Business Automation', icon: <Zap className="w-5 h-5" /> },
              { label: 'Mobile Apps', icon: <Smartphone className="w-5 h-5" /> },
            ].map((focus, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center p-6 bg-white border border-black/5 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-black/[0.03] flex items-center justify-center mb-4 group-hover:bg-[#ec1313] group-hover:text-white transition-colors duration-300 text-black/50">
                  {focus.icon}
                </div>
                <span className="text-sm md:text-base font-bold text-black/80 leading-tight">{focus.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise -> What We Build */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">What We Build</h2>
            <p className="text-black/50 text-lg">We engineer robust, scalable solutions tailored to your unique business challenges.</p>
          </div>
          <Link href="/services" className="text-sm font-semibold text-black hover:text-[#ec1313] transition-colors flex items-center gap-2">
            Explore all capabilities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <Code2 className="w-8 h-8" />,
              title: 'Custom Software Development',
              desc: 'Tailored software solutions designed around your unique business processes and operational goals.',
            },
            {
              icon: <Database className="w-8 h-8" />,
              title: 'ERP & CRM Systems',
              desc: 'Centralize operations with scalable ERP, CRM, inventory and workflow management systems.',
            },
            {
              icon: <Bot className="w-8 h-8" />,
              title: 'AI Solutions & Automation',
              desc: 'AI chatbots, intelligent assistants, workflow automation and LLM-powered business tools.',
            },
            {
              icon: <Monitor className="w-8 h-8" />,
              title: 'Business Websites',
              desc: 'SEO-optimized corporate websites, customer portals and web platforms.',
            },
            {
              icon: <Smartphone className="w-8 h-8" />,
              title: 'Mobile Applications',
              desc: 'Cross-platform Android and iOS applications for customers and internal teams.',
            },
            {
              icon: <Cloud className="w-8 h-8" />,
              title: 'Cloud Infrastructure',
              desc: 'Deployment, DevOps, server management, security and ongoing maintenance.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 md:p-10 rounded-2xl bg-white border border-black/10 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-black/[0.03] rounded-xl flex items-center justify-center text-black mb-8 group-hover:bg-[#ec1313] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-black/60 leading-relaxed flex-grow">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions We Build - NEW SECTION */}
      <section className="bg-black/[0.02] py-24 md:py-32 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Solutions We Build</h2>
            <p className="text-black/50 text-lg">We develop custom digital solutions designed to solve specific operational bottlenecks and scale with your business.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              'ERP Systems',
              'CRM Platforms',
              'Inventory Management',
              'Vendor Portals',
              'Employee Portals',
              'Learning Management Systems',
              'Booking Platforms',
              'Customer Dashboards',
              'Admin Dashboards',
              'AI Assistants',
            ].map((solution, i) => (
              <div key={i} className="flex items-center gap-3 p-5 md:p-6 bg-white border border-black/5 rounded-2xl shadow-sm hover:border-black/20 hover:shadow-md transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-[#ec1313] shrink-0" />
                <span className="text-sm font-bold text-black/80 leading-tight">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">Industries We Transform</h2>
            <p className="text-white/50 text-lg">We bring deep domain expertise across various sectors, building tailored solutions that address industry-specific challenges.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { icon: <Sun />, name: 'Solar' },
              { icon: <Factory />, name: 'Manufacturing' },
              { icon: <HeartPulse />, name: 'Healthcare' },
              { icon: <GraduationCap />, name: 'Education' },
              { icon: <ShoppingBag />, name: 'Retail' },
              { icon: <Hotel />, name: 'Hospitality' },
              { icon: <Building2 />, name: 'Construction' },
              { icon: <Landmark />, name: 'Government' },
              { icon: <Rocket />, name: 'Startups' },
              { icon: <Briefcase />, name: 'SMEs' },
            ].map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-4 p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-white/70">
                  {ind.icon}
                </div>
                <span className="text-sm font-semibold text-center">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 md:py-24 border-b border-black/5 overflow-hidden flex flex-col items-center bg-white">
        <h3 className="text-sm font-bold text-black/40 uppercase tracking-widest mb-10 text-center">Our Engineering Stack</h3>
        
        {/* Logo Marquee Implementation */}
        <div className="w-full relative flex overflow-x-hidden">
          <div className="animate-[marquee_30s_linear_infinite] flex whitespace-nowrap items-center gap-16 md:gap-24 px-8">
            {[
              { name: 'React', slug: 'react' },
              { name: 'Next.js', slug: 'nextdotjs' },
              { name: 'TypeScript', slug: 'typescript' },
              { name: 'Flutter', slug: 'flutter' },
              { name: 'Swift', slug: 'swift' },
              { name: 'Node.js', slug: 'nodedotjs' },
              { name: 'Python', slug: 'python' },
              { name: 'FastAPI', slug: 'fastapi' },
              { name: 'AWS', slug: 'amazonaws' },
              { name: 'Docker', slug: 'docker' },
              { name: 'OpenAI', slug: 'openai' },
            ].map((tech, i) => (
              <img 
                key={i}
                src={`https://cdn.simpleicons.org/${tech.slug}/000000`}
                alt={tech.name}
                title={tech.name}
                className="h-10 md:h-12 w-auto opacity-30 hover:opacity-80 transition-opacity duration-300"
              />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="animate-[marquee_30s_linear_infinite] flex whitespace-nowrap items-center gap-16 md:gap-24 px-8 absolute top-0 left-full">
            {[
              { name: 'React', slug: 'react' },
              { name: 'Next.js', slug: 'nextdotjs' },
              { name: 'TypeScript', slug: 'typescript' },
              { name: 'Flutter', slug: 'flutter' },
              { name: 'Swift', slug: 'swift' },
              { name: 'Node.js', slug: 'nodedotjs' },
              { name: 'Python', slug: 'python' },
              { name: 'FastAPI', slug: 'fastapi' },
              { name: 'AWS', slug: 'amazonaws' },
              { name: 'Docker', slug: 'docker' },
              { name: 'OpenAI', slug: 'openai' },
            ].map((tech, i) => (
              <img 
                key={i}
                src={`https://cdn.simpleicons.org/${tech.slug}/000000`}
                alt={tech.name}
                title={tech.name}
                className="h-10 md:h-12 w-auto opacity-30 hover:opacity-80 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">The Engineering Lifecycle</h2>
          <p className="text-black/50 text-lg">A rigorous, predictable framework designed to eliminate ambiguity and deliver excellence from day one.</p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 relative z-10">
            {[
              {
                num: '01',
                title: 'Discovery',
                desc: 'Understand your business, goals and workflows.',
              },
              {
                num: '02',
                title: 'Planning & Design',
                desc: 'Architecture, wireframes, UI/UX.',
              },
              {
                num: '03',
                title: 'Development',
                desc: 'Agile development with continuous feedback.',
              },
              {
                num: '04',
                title: 'Testing',
                desc: 'Performance, security, QA.',
              },
              {
                num: '05',
                title: 'Deployment',
                desc: 'Cloud deployment, monitoring and optimization.',
              },
              {
                num: '06',
                title: 'Support',
                desc: 'Maintenance, feature upgrades and long-term partnership.',
              },
            ].map((step, i) => (
              <div key={step.num} className="relative bg-white flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-4 border-black/10 rounded-full flex items-center justify-center text-xl font-black mb-6 group-hover:border-[#ec1313] group-hover:text-[#ec1313] transition-colors duration-300 relative z-10 shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-base text-black/60 leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us -> Premium Feature Cards */}
      <section className="bg-black/[0.02] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#ec1313] text-sm font-bold uppercase tracking-widest mb-4 block">The Trixtern Advantage</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Why Businesses Choose Trixtern
              </h2>
            </div>
            <p className="text-black/50 text-lg max-w-md">
              We partner with you for the long term, ensuring your technology remains an asset, not a liability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Briefcase />,
                title: 'Business-First Development',
                desc: 'We don\'t just write code. We analyze your workflows and build software that drives ROI and efficiency.',
              },
              {
                icon: <Sun />,
                title: 'Transparent Communication',
                desc: 'Clear timelines, regular updates, and no technical jargon. You always know exactly where your project stands.',
              },
              {
                icon: <Terminal />,
                title: 'Dedicated Project Manager',
                desc: 'One clear point of contact. We handle the technical complexities while keeping you informed every step of the way.',
              },
              {
                icon: <Code2 />,
                title: 'Modern Tech Stack',
                desc: 'We leverage battle-tested, modern frameworks to ensure your application is fast, secure, and future-proof.',
              },
              {
                icon: <CheckCircle2 />,
                title: 'Long-Term Support',
                desc: 'We don\'t disappear after launch. We offer comprehensive SLAs for updates, monitoring, and new features.',
              },
              {
                icon: <Cpu />,
                title: 'AI Ready Architecture',
                desc: 'We build your databases and APIs with the future in mind, making AI integration seamless when you need it.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 flex items-start gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#ec1313]/5 flex items-center justify-center text-[#ec1313] shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Featured Work</h2>
            <p className="text-black/50 text-lg">Real solutions driving measurable impact for our partners.</p>
          </div>
          <Link href="/work" className="text-sm font-semibold text-black hover:text-[#ec1313] transition-colors flex items-center gap-2">
            View full portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              name: 'SageOdisha',
              desc: 'Solar ERP & Customer Management System',
            },
            {
              name: 'Interncify',
              desc: 'Learning & Internship Platform',
            },
            {
              name: 'Thermoplastic Technologies',
              desc: 'Corporate Website',
            },
            {
              name: 'Qikcat',
              desc: 'Hyperlocal Commerce Platform',
            },
            {
              name: 'Trixtern ERP',
              desc: 'Internal Project & Business Management System',
            },
          ].map((project, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Premium Dashboard Mockup Placeholder */}
              <div className="w-full aspect-[4/3] bg-black/[0.02] rounded-2xl mb-6 flex flex-col items-center justify-center border border-black/10 overflow-hidden relative group-hover:border-black/20 group-hover:shadow-lg transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-8 bg-black/[0.05] border-b border-black/5 flex items-center px-4 gap-2">
                  <div className="w-2 h-2 rounded-full bg-black/20" />
                  <div className="w-2 h-2 rounded-full bg-black/20" />
                  <div className="w-2 h-2 rounded-full bg-black/20" />
                </div>
                <div className="text-black/30 font-bold uppercase tracking-widest text-xs flex flex-col items-center gap-3">
                  <Monitor className="w-8 h-8 opacity-40" />
                  <span>Coming Soon</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold group-hover:text-[#ec1313] transition-colors">{project.name}</h3>
              <p className="text-black/60 mt-2 text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-24 md:py-32 text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-16 text-center">Client Success Stories</h2>
          
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-12 border border-dashed border-white/20 rounded-2xl bg-white/5">
             <Star className="w-8 h-8 text-white/30 mb-4" />
             <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
             <p className="text-white/50 text-center text-sm">We're currently collecting detailed case studies from our recent software development projects.</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 text-center relative overflow-hidden bg-[#f8f6f6]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-50">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#ec1313]/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -translate-y-1/2" />
        </div>
        
        <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
            Ready to Build Your Next <span className="text-[#ec1313]">Software Product?</span>
          </h2>
          <p className="text-black/50 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you're building your first MVP, modernizing existing software, or automating business operations, our engineers are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ec1313] text-white text-base font-semibold px-8 py-4 rounded-lg hover:bg-[#c90f0f] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-[#ec1313]/20"
            >
              Book Free Consultation
            </Link>
            <Link
              href="tel:+916372669269"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold px-8 py-4 border-2 border-black hover:bg-black hover:text-white rounded-lg transition-all duration-300"
            >
              Schedule Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
