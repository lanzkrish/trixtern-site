'use client';

import Link from 'next/link';
import { useState } from 'react';

type JobStatus = 'Actively Hiring' | 'Hiring Open' | 'No Position Opened';

interface Job {
  title: string;
  department: string;
  type: string;
  status: JobStatus;
  desc: string;
}

const allJobs: Job[] = [
  {
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    status: 'Actively Hiring',
    desc: 'Design intuitive user experiences and interfaces for our products.',
  },
  {
    title: 'Digital Marketing Intern',
    department: 'Marketing',
    type: 'Internship',
    status: 'Actively Hiring',
    desc: 'Create engaging campaigns, content, and strategies to boost our digital presence.',
  },
  {
    title: 'Intern Graphic Designer',
    department: 'Design',
    type: 'Internship',
    status: 'Actively Hiring',
    desc: 'Design eye-catching visuals and brand assets for social media and marketing.',
  },
  {
    title: 'Content Writer',
    department: 'Marketing',
    type: 'Full-time',
    status: 'Hiring Open',
    desc: 'Create engaging and high-quality content for various platforms.',
  },
  {
    title: 'Android Developer',
    department: 'Engineering',
    type: 'Full-time',
    status: 'No Position Opened',
    desc: 'Develop and maintain high-quality Android applications.',
  },
  {
    title: 'iOS Developer',
    department: 'Engineering',
    type: 'Full-time',
    status: 'No Position Opened',
    desc: 'Build and optimize iOS applications for performance and usability.',
  },
  {
    title: 'Web Developer',
    department: 'Engineering',
    type: 'Full-time',
    status: 'No Position Opened',
    desc: 'Create and maintain responsive and scalable web applications.',
  },
  {
    title: 'AI/ML Developer',
    department: 'Engineering',
    type: 'Full-time',
    status: 'Actively Hiring',
    desc: 'Develop and deploy machine learning models to solve complex problems.',
  },
];

const departments = ['All', 'Engineering', 'Design', 'Marketing'];
const statuses = ['All', 'Actively Hiring', 'Hiring Open', 'No Position Opened'];

const statusConfig: Record<JobStatus, { dot: string; text: string; bg: string }> = {
  'Actively Hiring': { dot: 'bg-green-500', text: 'text-green-700', bg: 'bg-green-50' },
  'Hiring Open': { dot: 'bg-amber-500', text: 'text-amber-700', bg: 'bg-amber-50' },
  'No Position Opened': { dot: 'bg-black/20', text: 'text-black/40', bg: 'bg-black/[0.03]' },
};

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredJobs = allJobs.filter((job) => {
    const deptMatch = selectedDept === 'All' || job.department === selectedDept;
    const statusMatch = selectedStatus === 'All' || job.status === selectedStatus;
    return deptMatch && statusMatch;
  });

  const activeCount = allJobs.filter((j) => j.status === 'Actively Hiring').length;

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat' as const,
    backgroundPosition: 'right 12px center',
  };

  return (
    <>
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-12 md:pb-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[1.05] italic mb-4 md:mb-6">
          Join the
          <br />
          Intentional<span className="text-[#ec1313] not-italic">.</span>
        </h1>
        <p className="text-black/50 text-base md:text-lg max-w-md leading-relaxed">
          We don&apos;t just build software. We engineer outcomes. Trixtern is looking for the obsession-driven to build the next generation of precision tools.
        </p>
      </section>

      {/* Location & Culture Info */}
      <section className="bg-[#f8f6f6] py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-16">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#ec1313] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-black/30 mb-1">Headquarters</p>
                <p className="text-sm md:text-base font-medium text-black/80">Bhubaneswar, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#ec1313] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 10.5" />
              </svg>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-black/30 mb-1">Work Model</p>
                <p className="text-sm md:text-base font-medium text-black/80">Remote-First</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#ec1313] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m/1.06 0A3 3 0 0021 12.75v-.261c0-1.106-.61-2.118-1.585-2.657a21.001 21.001 0 00-2.415-1.218m0 0A3.017 3.017 0 0016.5 9a3 3 0 00-3-3m0 0a3 3 0 00-3 3 3.017 3.017 0 00-.5.133m4.5-3.133V3M6.758 11.834l-1.006-.502A2.25 2.25 0 003 13.382v.993c0 .62.27 1.211.735 1.62l.463.383m0 0l-.001.001.001-.001z" />
              </svg>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-black/30 mb-1">Active Openings</p>
                <p className="text-sm md:text-base font-medium text-black/80">{activeCount} positions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Open Positions</h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="border border-black/15 rounded-lg px-4 py-2.5 text-sm bg-white appearance-none cursor-pointer pr-8 hover:border-black/30 transition-colors"
              style={selectStyle}
            >
              {departments.map((d) => (
                <option key={d} value={d}>{d === 'All' ? 'All Departments' : d}</option>
              ))}
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-black/15 rounded-lg px-4 py-2.5 text-sm bg-white appearance-none cursor-pointer pr-8 hover:border-black/30 transition-colors"
              style={selectStyle}
            >
              {statuses.map((s) => (
                <option key={s} value={s}>{s === 'All' ? 'All Statuses' : s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="border-t border-black/[0.06]">
          {filteredJobs.length === 0 ? (
            <div className="py-12 md:py-16 text-center text-black/40 text-sm">
              No positions match your filters. Try adjusting your selection.
            </div>
          ) : (
            filteredJobs.map((job, i) => {
              const config = statusConfig[job.status];
              const isOpen = job.status !== 'No Position Opened';
              return (
                <div
                  key={i}
                  className="border-b border-black/[0.06] py-5 md:py-6 px-1 md:px-4 hover:bg-black/[0.01] transition-colors group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-6">
                    {/* Left: Title + Meta */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3 className={`text-base md:text-lg font-bold tracking-tight ${isOpen ? 'group-hover:text-[#ec1313]' : 'text-black/40'} transition-colors`}>
                          {job.title}
                        </h3>
                        <span className={`inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${config.bg} ${config.text}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                          {job.status}
                        </span>
                      </div>
                      <p className="text-black/40 text-sm leading-relaxed">{job.desc}</p>
                    </div>

                    {/* Right: Details + CTA */}
                    <div className="flex items-center gap-4 lg:gap-6 shrink-0">
                      <div className="flex items-center gap-3 text-xs md:text-sm text-black/40">
                        <span>{job.department}</span>
                        <span className="text-black/15">·</span>
                        <span>{job.type}</span>
                        <span className="text-black/15">·</span>
                        <span>Remote</span>
                      </div>
                      {isOpen && (
                        <Link
                          href="/contact"
                          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#ec1313] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                        >
                          Apply
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Pitch Yourself */}
        <div className="mt-12 md:mt-16 bg-[#f8f6f6] rounded-xl p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-1">Don&apos;t see your role?</h3>
            <p className="text-black/50 text-sm md:text-base">
              We&apos;re always looking for exceptional people. Tell us what you&apos;d bring to Trixtern.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-black text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-[#ec1313] transition-colors shrink-0"
          >
            Pitch Yourself
          </Link>
        </div>
      </section>
    </>
  );
}
