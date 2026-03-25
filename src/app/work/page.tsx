'use client';

import { useState } from 'react';

const projects = [
  {
    id: 0,
    title: 'Sage Odisha',
    category: 'Renewable Energy',
    tagline: 'Powering clean energy with clean design.',
    desc: 'A digital platform built for a leading rooftop solar provider in Odisha. We translated a complex service ecosystem — solar installations, government subsidies, and net metering — into a clear, intuitive web experience.',
    tags: ['Web Design', 'Frontend', 'CMS'],
    bg: '#0a3d2e',
    accent: '#4ade80',
    lightBg: '#f0fdf4',
    lightAccent: '#16a34a',
    accentText: '#dcfce7',
    size: 'large',
  },
  {
    id: 1,
    title: 'Webgage Labs',
    category: 'Career Tech',
    tagline: 'Bridging talent and industry.',
    desc: 'A career acceleration platform designed to bridge the gap between learning and industry readiness. We scaled the digital experience supporting internships and professional development.',
    tags: ['Product Design', 'Platform', 'UX'],
    bg: '#0f172a',
    accent: '#818cf8',
    lightBg: '#eef2ff',
    lightAccent: '#4f46e5',
    accentText: '#e0e7ff',
    size: 'medium',
  },
  {
    id: 2,
    title: 'Tarutra Robotics',
    category: 'Automation & Robotics',
    tagline: 'Digital presence for physical innovation.',
    desc: 'Supporting an automation and robotics company with a digital platform that matches their engineering capabilities with a scalable digital foundation.',
    tags: ['Branding', 'Web', 'Architecture'],
    bg: '#1c1917',
    accent: '#fb923c',
    lightBg: '#fff7ed',
    lightAccent: '#ea580c',
    accentText: '#fed7aa',
    size: 'medium',
  },
  {
    id: 3,
    title: 'PC Quicker',
    category: 'On-Demand Services',
    tagline: 'Service at the speed of now.',
    desc: 'An on-demand PC and laptop servicing platform. We streamlined service workflows and digital operations to improve accessibility and customer experience.',
    tags: ['App Design', 'Operations', 'UX'],
    bg: '#0c1a2e',
    accent: '#38bdf8',
    lightBg: '#f0f9ff',
    lightAccent: '#0284c7',
    accentText: '#bae6fd',
    size: 'small',
  },
  {
    id: 4,
    title: 'Interncify',
    category: 'EdTech',
    tagline: 'Learning built for modern careers.',
    desc: 'An immersive learning ecosystem for students navigating modern technology careers. We built a structured, scalable platform aligned with long-term growth.',
    tags: ['EdTech', 'Platform', 'Design System'],
    bg: '#2d1b69',
    accent: '#c084fc',
    lightBg: '#faf5ff',
    lightAccent: '#9333ea',
    accentText: '#e9d5ff',
    size: 'small',
  },
];

const collaborations = [
  {
    label: 'Mobility & Rental',
    desc: 'Digital systems supporting self-drive vehicle rentals and operational logistics.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    label: 'Fleet & Telematics',
    desc: 'Real-time tracking platforms and data-driven fleet optimization systems.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    label: 'Consumer Brands',
    desc: 'Legacy food and lifestyle brands transitioning into modern digital ecosystems.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.999 2.999 0 013.397-1.174 2.999 2.999 0 012.853-2.174h1.5a2.999 2.999 0 012.853 2.174A2.999 2.999 0 0121 9.349" />
      </svg>
    ),
  },
];

const principles = [
  { num: '01', title: 'Understand First', desc: 'Deep discovery before a single line of code.' },
  { num: '02', title: 'Build for Scale', desc: 'Architected for the next five years, not five weeks.' },
  { num: '03', title: 'Choose Clarity', desc: 'Complexity hidden. Simplicity shown.' },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  if (project.size === 'large') {
    return (
      <div
        style={{
          background: hovered ? project.bg : '#f5f5f7',
          transition: 'background 0.5s ease, transform 0.3s ease',
          transform: hovered ? 'scale(1.01)' : 'scale(1)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-3xl overflow-hidden cursor-pointer col-span-2"
      >
        <div className="p-8 md:p-12 lg:p-16 min-h-[420px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                style={{
                  background: hovered ? project.accent : '#ec1313',
                  color: hovered ? project.bg : 'white',
                  transition: 'background 0.5s, color 0.5s',
                }}
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              >
                {project.category}
              </span>
              <span
                style={{ color: hovered ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.25)', transition: 'color 0.5s' }}
                className="text-xs font-medium"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h2
              style={{ color: hovered ? 'white' : '#1d1d1f', transition: 'color 0.5s' }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-4"
            >
              {project.title}
            </h2>
            <p
              style={{ color: hovered ? project.accent : '#ec1313', transition: 'color 0.5s' }}
              className="text-lg md:text-xl font-semibold mb-4"
            >
              {project.tagline}
            </p>
            <p
              style={{ color: hovered ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)', transition: 'color 0.5s' }}
              className="text-sm md:text-base leading-relaxed max-w-xl"
            >
              {project.desc}
            </p>
          </div>

          <div className="flex items-center justify-between mt-10 flex-wrap gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                    color: hovered ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.4)',
                    transition: 'background 0.5s, color 0.5s',
                  }}
                  className="text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              style={{
                color: hovered ? project.accent : '#ec1313',
                transition: 'color 0.5s',
              }}
              className="flex items-center gap-1.5 text-sm font-semibold"
            >
              View Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.size === 'medium') {
    return (
      <div
        style={{
          background: hovered ? project.bg : '#f5f5f7',
          transition: 'background 0.5s ease, transform 0.3s ease',
          transform: hovered ? 'scale(1.02)' : 'scale(1)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-3xl overflow-hidden cursor-pointer"
      >
        <div className="p-7 md:p-10 min-h-[340px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span
                style={{
                  background: hovered ? project.accent : '#ec1313',
                  color: hovered ? project.bg : 'white',
                  transition: 'background 0.5s, color 0.5s',
                }}
                className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
              >
                {project.category}
              </span>
            </div>

            <h3
              style={{ color: hovered ? 'white' : '#1d1d1f', transition: 'color 0.5s' }}
              className="text-3xl md:text-4xl font-black tracking-tight leading-[1.08] mb-3"
            >
              {project.title}
            </h3>
            <p
              style={{ color: hovered ? project.accent : '#ec1313', transition: 'color 0.5s' }}
              className="text-base font-semibold mb-3"
            >
              {project.tagline}
            </p>
            <p
              style={{ color: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)', transition: 'color 0.5s' }}
              className="text-sm leading-relaxed"
            >
              {project.desc}
            </p>
          </div>

          <div className="flex items-center justify-between mt-8 flex-wrap gap-3">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                    color: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.35)',
                    transition: 'background 0.5s, color 0.5s',
                  }}
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              style={{ color: hovered ? project.accent : '#ec1313', transition: 'color 0.5s' }}
              className="text-xs font-semibold flex items-center gap-1"
            >
              View <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // small
  return (
    <div
      style={{
        background: hovered ? project.bg : '#f5f5f7',
        transition: 'background 0.5s ease, transform 0.3s ease',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-3xl overflow-hidden cursor-pointer"
    >
      <div className="p-6 md:p-8 min-h-[260px] flex flex-col justify-between">
        <div>
          <span
            style={{
              background: hovered ? project.accent : '#ec1313',
              color: hovered ? project.bg : 'white',
              transition: 'background 0.5s, color 0.5s',
            }}
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-block mb-4"
          >
            {project.category}
          </span>

          <h3
            style={{ color: hovered ? 'white' : '#1d1d1f', transition: 'color 0.5s' }}
            className="text-2xl md:text-3xl font-black tracking-tight leading-[1.1] mb-2"
          >
            {project.title}
          </h3>
          <p
            style={{ color: hovered ? project.accent : '#ec1313', transition: 'color 0.5s' }}
            className="text-sm font-semibold"
          >
            {project.tagline}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                style={{
                  background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                  color: hovered ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.3)',
                  transition: 'background 0.5s, color 0.5s',
                }}
                className="text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <svg
            style={{ color: hovered ? project.accent : '#ec1313', transition: 'color 0.5s' }}
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-10 md:pb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-4 block">
              Portfolio
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-black tracking-[-0.04em] leading-[0.95] text-[#1d1d1f]">
              Our
              <br />
              Work.
            </h1>
          </div>
          <p className="text-[#6e6e73] text-base md:text-lg max-w-sm leading-relaxed lg:pb-3">
            Interfaces that define the future of interaction — built with precision, purpose, and craft.
          </p>
        </div>
      </section>

      {/* ── Stat Bar ─────────────────────────────────────────── */}
      <section className="border-t border-b border-black/[0.07] bg-[#f5f5f7]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-3 divide-x divide-black/[0.07]">
            {[
              { value: '5+', label: 'Products Shipped' },
              { value: '3', label: 'Industries Served' },
              { value: '100%', label: 'Client Retention' },
            ].map((stat) => (
              <div key={stat.label} className="py-6 md:py-8 px-4 md:px-8 text-center">
                <div className="text-2xl md:text-3xl font-black text-[#1d1d1f] tracking-tight">{stat.value}</div>
                <div className="text-xs md:text-sm text-[#6e6e73] mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Grid ─────────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="text-[#6e6e73] text-xs font-bold uppercase tracking-widest mb-6">Selected Projects</div>

        {/* Row 1: Large card + medium card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* Large — spans 2 cols on lg */}
          <div className="lg:col-span-2">
            <ProjectCard project={projects[0]} index={0} />
          </div>
          {/* Medium */}
          <div>
            <ProjectCard project={projects[1]} index={1} />
          </div>
        </div>

        {/* Row 2: Medium + small + small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard project={projects[2]} index={2} />
          <ProjectCard project={projects[3]} index={3} />
          <ProjectCard project={projects[4]} index={4} />
        </div>
      </section>

      {/* ── Marquee / Categories ─────────────────────────────── */}
      <div className="overflow-hidden border-t border-b border-black/[0.06] bg-[#f5f5f7] py-4 select-none">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{
            animation: 'marquee 22s linear infinite',
          }}
        >
          {[
            'Web Design', 'Product Strategy', 'Frontend Engineering', 'UX Research',
            'Brand Identity', 'Design Systems', 'EdTech', 'Renewable Energy',
            'Career Tech', 'Automation', 'Web Design', 'Product Strategy',
            'Frontend Engineering', 'UX Research', 'Brand Identity', 'Design Systems',
          ].map((item, i) => (
            <span key={i} className="text-sm font-bold text-[#1d1d1f]/20 uppercase tracking-widest shrink-0">
              {item}
              <span className="ml-8 text-[#ec1313]/40">✦</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* ── Extended Collaborations ───────────────────────────── */}
      <section className="bg-[#1d1d1f] text-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">
                Extended Work
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">
                Broader Technical
                <br />
                Contributions.
              </h2>
            </div>
            <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-sm">
              Members of our engineering team have contributed to high-impact digital platforms across mobility, telematics, and consumer brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {collaborations.map((item, i) => (
              <div
                key={i}
                className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#ec1313]/30 rounded-3xl p-7 md:p-9 transition-all duration-300 cursor-default"
              >
                <div className="text-white/25 group-hover:text-[#ec1313] transition-colors duration-300 mb-6 md:mb-8">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-3 group-hover:text-white transition-colors">
                  {item.label}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-white/15 text-xs mt-10 max-w-lg leading-relaxed">
            These collaborations reflect broader technical depth within our team — contributions made across platforms, not individual brand claims.
          </p>
        </div>
      </section>

      {/* ── Case Study: Sage Odisha ───────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-2">
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-4 block">
              Featured Case Study
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mb-4 text-[#1d1d1f]">
              Sage Odisha.
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
              Web Presence for a Leading Renewable Energy Provider
            </p>
            <div className="h-1 w-10 bg-[#ec1313] rounded-full" />
          </div>

          {/* Right */}
          <div className="lg:col-span-3 space-y-8">
            <p className="text-[#1d1d1f]/60 text-base leading-relaxed">
              Sage Odisha partners with residential and commercial customers to deliver clean energy through MNRE-approved rooftop solar installations, backed by official government subsidy programs like PM Surya Ghar.
            </p>
            <p className="text-[#1d1d1f]/60 text-base leading-relaxed">
              Our collaboration focused on elevating their digital foundation — translating a complex service ecosystem into a simple, intuitive web experience that reflects the clarity, structure, and professionalism of a category-defining energy provider.
            </p>

            <div>
              <h3 className="text-lg font-bold text-[#1d1d1f] mb-5">Our Focus</h3>
              <div className="space-y-3">
                {[
                  'Clean information hierarchy for solar solutions',
                  'Structured presentation of services and subsidy programs',
                  'Scalable interface architecture',
                  'Performance-focused front-end design',
                  'Accessible and responsive layouts',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ec1313] group-hover:scale-150 transition-transform shrink-0" />
                    <span className="text-[#1d1d1f]/55 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f5f5f7] rounded-2xl p-6 md:p-8 border-l-4 border-[#ec1313]">
              <h3 className="text-base font-bold text-[#1d1d1f] mb-2">The Outcome</h3>
              <p className="text-[#6e6e73] text-sm md:text-base leading-relaxed">
                A professional, scalable web presence that mirrors the real-world impact of Sage Odisha&apos;s renewable energy initiatives — maintaining clarity and trust for every user.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles ───────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-14 md:mb-18">
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest mb-3 block">
              Our Standard
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#1d1d1f] mb-4">
              Our Approach.
            </h2>
            <p className="text-[#6e6e73] text-base max-w-md mx-auto leading-relaxed">
              We don&apos;t measure success by volume. We measure it by durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {principles.map((item) => (
              <div
                key={item.num}
                className="group bg-white hover:bg-[#1d1d1f] rounded-3xl p-8 md:p-10 text-center transition-all duration-400 cursor-default border border-black/[0.06] hover:border-transparent"
              >
                <span className="text-5xl md:text-6xl font-black text-black/[0.05] group-hover:text-white/[0.06] transition-colors block mb-4">
                  {item.num}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-[#1d1d1f] group-hover:text-white transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6e6e73] group-hover:text-white/40 text-sm leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="bg-[#ec1313] rounded-3xl px-8 md:px-16 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/[0.06] pointer-events-none" />
          <div className="absolute -bottom-10 right-32 w-40 h-40 rounded-full bg-white/[0.04] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-3">Start a Project</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.05]">
              Let&apos;s build something
              <br />
              remarkable together.
            </h2>
          </div>
          <a
            href="/contact"
            className="relative z-10 shrink-0 bg-white text-[#ec1313] font-bold text-sm md:text-base px-8 py-4 rounded-full hover:bg-white/90 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            Get in touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
