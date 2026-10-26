import Link from 'next/link';
import { ArrowLeft, Monitor, LayoutDashboard, Settings2, Users, FileText, Database, Shield, Lock, Server, Cpu, Box, Cloud, Key, FileCheck, CheckCircle2 } from 'lucide-react';

export default function SageOdishaCaseStudy() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-black text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <Link href="/work" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-semibold mb-10 md:mb-16">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-[#ec1313] text-sm font-bold uppercase tracking-widest mb-4 block">Case Study</span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
                SageOdisha ERP.
              </h1>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-lg">
                A complete ERP ecosystem built for one of Odisha&apos;s leading renewable energy companies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:pl-10">
              <div>
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Client</h4>
                <p className="text-lg font-bold">SageOdisha</p>
              </div>
              <div>
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Industry</h4>
                <p className="text-lg font-bold">Renewable Energy</p>
              </div>
              <div>
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Timeline</h4>
                <p className="text-lg font-bold">8+ Months</p>
              </div>
              <div>
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Role</h4>
                <ul className="text-sm font-medium text-white/90 space-y-1">
                  <li>Product Design</li>
                  <li>Full Stack Development</li>
                  <li>System Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About & Challenge ─────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* About */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">About the Client</h2>
              <p className="text-black/60 text-lg leading-relaxed mb-6">
                SageOdisha is a premier provider of clean energy solutions in Odisha, specializing in residential and commercial rooftop solar installations. They partner with customers to navigate and leverage official government subsidy programs like PM Surya Ghar, facilitating a sustainable transition to renewable energy.
              </p>
            </div>

            {/* Challenge */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">The Challenge</h2>
              <p className="text-black/60 text-lg leading-relaxed mb-6">
                Before transitioning to a unified ERP, SageOdisha&apos;s operations were heavily siloed and reliant on manual tracking, which created significant bottlenecks during rapid growth:
              </p>
              <ul className="space-y-4">
                {[
                  'Leads were managed manually across spreadsheets.',
                  'Employee monitoring and performance tracking was difficult.',
                  'Inventory wasn\'t connected with the sales pipeline.',
                  'PM Surya Ghar documents were scattered across physical files and chats.',
                  'Attendance and payroll systems were completely disconnected.',
                  'No centralized reporting to assess company health in real-time.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ec1313]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#ec1313]" />
                    </div>
                    <span className="text-black/70 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Solution ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#f8f6f6] border-y border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-4 block">The Solution</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 max-w-3xl mx-auto">
            One platform handling the entire business lifecycle.
          </h2>
          <p className="text-black/50 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            We architected a centralized, modular ERP platform that unified CRM, HRMS, PM Surya Ghar compliance, Inventory, Orders, Invoicing, Attendance, and dedicated portals for both Employees and Admins.
          </p>
        </div>
      </section>

      {/* ── Major Modules ──────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Major Modules</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'CRM',
                icon: <Users />,
                features: ['Lead Pipeline', 'CSV Import', 'Lead Assignment', 'Lead → Order Conversion'],
              },
              {
                title: 'PM Surya Ghar',
                icon: <FileText />,
                features: ['Consumer Management', 'Installation Tracking', 'Document Vault', 'Work Completion Documents', 'Invoice Uploads'],
              },
              {
                title: 'HRMS',
                icon: <LayoutDashboard />,
                features: ['Attendance & Leave', 'Payslips', 'Role Management', 'Permission Management', 'Email Credentials'],
              },
              {
                title: 'Inventory',
                icon: <Box />,
                features: ['Live Stock Tracking', 'Auto Deduction on Sale', 'Multi-item Orders', 'Stock Validation'],
              },
              {
                title: 'Bulk Orders',
                icon: <CheckCircle2 />,
                features: ['Order Tracking', 'Automated Invoicing', 'Cart System', 'Audit History'],
              },
              {
                title: 'Dual Portals',
                icon: <Settings2 />,
                features: ['Employee Portal (CRM, HRMS, Ops)', 'Admin Portal (Dashboard, Analytics, Roles, Performance)'],
              },
            ].map((module, i) => (
              <div key={i} className="bg-black/[0.02] border border-black/5 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#ec1313] shadow-sm mb-6 border border-black/5">
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.features.map((feature, j) => (
                    <li key={j} className="text-black/60 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-black/20" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── System Architecture ────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-4 block">Infrastructure</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">System Architecture</h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Built on a modern, decoupled monorepo architecture. The system leverages Next.js for lightning-fast front-end delivery and an Express API for heavy business logic, all communicating securely in real-time.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Next.js 16', 'React 19', 'Tailwind CSS', 'Node.js',
                  'Express.js', 'MongoDB', 'Socket.io', 'JWT Auth',
                  'AWS S3', 'UploadThing', 'Resend', 'MSG91'
                ].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-white/70 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#ec1313]" /> {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Architecture Diagram (CSS-based) */}
            <div className="relative w-full aspect-square md:aspect-[4/3] bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col items-center justify-between">
               
               {/* Client */}
               <div className="w-full flex justify-center">
                 <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20 text-sm font-bold shadow-lg backdrop-blur-md flex items-center gap-2">
                   <Users className="w-4 h-4" /> Users (Admin / Employee)
                 </div>
               </div>

               {/* Arrow */}
               <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />

               {/* Frontend */}
               <div className="w-full flex justify-center">
                 <div className="px-8 py-4 bg-black rounded-xl border-2 border-white/20 text-base font-black shadow-2xl flex items-center gap-2">
                   <Monitor className="w-5 h-5 text-[#ec1313]" /> Next.js Frontend
                 </div>
               </div>

               {/* Arrow */}
               <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />

               {/* Backend */}
               <div className="w-full flex justify-center">
                 <div className="px-8 py-4 bg-[#ec1313]/10 rounded-xl border border-[#ec1313]/30 text-base font-bold flex items-center gap-2">
                   <Server className="w-5 h-5 text-[#ec1313]" /> Express API
                 </div>
               </div>

               {/* Split Arrows */}
               <div className="flex w-1/2 justify-between mt-2">
                 <div className="w-px h-8 bg-gradient-to-tr from-white/30 to-transparent -rotate-[30deg]" />
                 <div className="w-px h-8 bg-gradient-to-tl from-white/30 to-transparent rotate-[30deg]" />
               </div>

               {/* Data & Services */}
               <div className="w-full flex justify-between px-4 md:px-12 mt-2">
                 <div className="px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-xs font-semibold flex items-center gap-2 text-white/80">
                   <Database className="w-4 h-4" /> MongoDB
                 </div>
                 <div className="px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-xs font-semibold flex items-center gap-2 text-white/80">
                   <Cloud className="w-4 h-4" /> AWS / Services
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Security & Highlights ──────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Security */}
            <div>
              <div className="w-12 h-12 bg-black/[0.03] rounded-xl flex items-center justify-center mb-6 border border-black/5">
                <Shield className="w-6 h-6 text-[#ec1313]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">Enterprise Security</h2>
              <ul className="space-y-4">
                {[
                  { icon: <Key />, title: 'Role Based Access Control (RBAC)' },
                  { icon: <FileCheck />, title: 'Immutable Audit Logs for all actions' },
                  { icon: <Lock />, title: 'Stateless JWT Authentication' },
                  { icon: <Cpu />, title: 'OTP-based Secure Login' },
                  { icon: <LayoutDashboard />, title: 'Strict Employee & Admin Data Isolation' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-black/[0.02] p-4 rounded-xl border border-black/5">
                    <div className="text-[#ec1313] opacity-80">{item.icon}</div>
                    <span className="font-semibold text-black/80">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6 mt-4">Engineering Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Dynamic Role Engine',
                  'Live Inventory Synchronization',
                  'Real-time Employee Monitoring',
                  'Automated HTML Invoice Generation',
                  'Proxy Architecture',
                  'Modular Monorepo',
                  'Dual Portal Architecture',
                  'Permission-based Routing'
                ].map((highlight, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-black/10 shadow-sm text-sm font-semibold text-black/70 hover:border-[#ec1313]/30 transition-colors">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Continuous Improvements & Results ──────────────────── */}
      <section className="py-24 md:py-32 bg-[#f8f6f6] border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Evolution Timeline */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">Continuous Improvements</h2>
              <p className="text-black/60 text-lg mb-8">
                Enterprise software is never &quot;done&quot;. We continuously evolved the platform alongside SageOdisha&apos;s operational scale.
              </p>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-black/10 before:to-transparent">
                {[
                  'CRM Pipeline Deployment',
                  'Inventory Automation & Sync',
                  'Employee Monitoring Modules',
                  'Dynamic Roles & Permissions',
                  'Email Automation Integration',
                  'Security Hardening & Audit Trails',
                  'Performance Tracking Dashboards',
                  'PM Surya Ghar Updates & Compliance'
                ].map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#f8f6f6] bg-black/20 group-hover:bg-[#ec1313] group-hover:scale-125 transition-all md:order-1 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-sm shrink-0" />
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-white border border-black/5 shadow-sm text-sm font-semibold text-black/70 group-hover:border-black/20 transition-colors">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">The Results</h2>
              <div className="space-y-6">
                {[
                  'Centralized business operations into a single, cohesive platform, replacing a fragmented ecosystem of spreadsheets and chats.',
                  'Reduced manual data duplication by seamlessly connecting CRM, orders, inventory, and HR workflows.',
                  'Improved operational visibility with tailored, role-based dashboards and transparent performance tracking.',
                  'Standardized PM Surya Ghar documentation and project management, minimizing compliance errors.',
                  'Enhanced security through strict role-based access control, JWT authentication, and comprehensive audit logging.'
                ].map((result, i) => (
                  <div key={i} className="flex gap-5 bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
                    <div className="text-3xl font-black text-black/5 mt-1 shrink-0">0{i+1}</div>
                    <p className="text-black/70 text-base leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Gallery ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Platform Interface</h2>
            <p className="text-black/50 text-lg">A glimpse into the modular dashboard ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Dashboard Overview', 'CRM Pipeline', 'HRMS Portal', 
              'Live Inventory', 'PM Surya Ghar Vault', 'Order Management', 
              'Secure Login Area', 'Analytics Engine'
            ].map((module, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="w-full aspect-[16/9] bg-black/[0.02] rounded-2xl mb-4 flex flex-col items-center justify-center border border-black/10 overflow-hidden relative group-hover:border-black/20 group-hover:shadow-lg transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-8 bg-black/[0.05] border-b border-black/5 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-black/20" />
                    <div className="w-2 h-2 rounded-full bg-black/20" />
                    <div className="w-2 h-2 rounded-full bg-black/20" />
                  </div>
                  <div className="text-black/30 font-bold uppercase tracking-widest text-xs flex flex-col items-center gap-3">
                    <Monitor className="w-8 h-8 opacity-40" />
                    <span>Interface Coming Soon</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-center group-hover:text-[#ec1313] transition-colors">{module}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 text-center bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 leading-[1.1]">
            Looking to build a custom ERP for your business?
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your workflow and build software tailored to your specific operational needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#ec1313] text-white text-base font-semibold px-10 py-5 rounded-lg hover:bg-[#c90f0f] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-[#ec1313]/20"
          >
            Schedule Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
