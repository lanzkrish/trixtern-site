'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    }
  };

  const buttonLabel = {
    idle: 'Send Message',
    sending: 'Sending...',
    sent: 'Message Sent!',
    error: 'Try Again',
  }[status];

  return (
    <div className="flex-grow flex flex-col lg:flex-row min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">
      {/* Left: Form */}
      <div className="w-full lg:w-1/2 px-6 md:px-10 lg:px-16 xl:px-24 flex flex-col justify-center py-12 md:py-16 lg:py-24">
        <div className="max-w-[520px] mx-auto lg:mx-0 w-full">
          <div className="mb-10 md:mb-14 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.1] mb-3 md:mb-4 text-black">
              Start a<br />Conversation.
            </h1>
            <p className="text-black/50 text-base md:text-lg">
              Tell us about your project requirements.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 lg:space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              <div className="floating-label-input">
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={status === 'sending'}
                />
                <label htmlFor="name">Name *</label>
              </div>
              <div className="floating-label-input">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={status === 'sending'}
                />
                <label htmlFor="email">Email Address *</label>
              </div>
            </div>
            <div className="floating-label-input">
              <input
                type="text"
                id="subject"
                placeholder=" "
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                disabled={status === 'sending'}
              />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="floating-label-input">
              <textarea
                id="message"
                placeholder=" "
                rows={1}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="resize-none min-h-[48px]"
                disabled={status === 'sending'}
              />
              <label htmlFor="message">Tell us about your project *</label>
            </div>

            {/* Error message */}
            {status === 'error' && errorMessage && (
              <p className="text-[#ec1313] text-sm font-medium -mt-2">{errorMessage}</p>
            )}

            <div className="pt-2 md:pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className={`group flex items-center justify-between w-full sm:w-auto min-w-[200px] h-12 md:h-14 text-white text-sm md:text-base font-medium px-6 md:px-8 transition-all rounded-lg ${
                  status === 'sent'
                    ? 'bg-green-600'
                    : status === 'sending'
                    ? 'bg-[#ec1313]/70 cursor-not-allowed'
                    : 'bg-[#ec1313] hover:bg-[#c90f0f]'
                }`}
              >
                <span>{buttonLabel}</span>
                {status === 'sending' ? (
                  <svg className="w-5 h-5 ml-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : status === 'sent' ? (
                  <svg className="w-5 h-5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right: HQ Info */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-end lg:justify-center p-6 md:p-10 lg:p-16 xl:p-24 relative overflow-hidden min-h-[400px] lg:min-h-0">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-[480px] lg:ml-8 xl:ml-12 flex flex-col gap-12 md:gap-16 relative z-10">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#ec1313]/10 flex items-center justify-center text-[#ec1313] mb-1 md:mb-2">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-black/40 mb-3 md:mb-4">
                Headquarters
              </h3>
              <p className="text-lg md:text-2xl font-light text-black leading-relaxed">
                Bhubaneswar<br />
                Odisha, India
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-black/40">Email</h3>
              <a
                href="mailto:contact@trixtern.com"
                className="text-base md:text-lg font-medium text-black hover:text-[#ec1313] transition-colors flex items-center gap-2 group"
              >
                contact@trixtern.com
                <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ec1313]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-black/40">Phone</h3>
              <a
                href="tel:+916372669269"
                className="text-base md:text-lg font-medium text-black hover:text-[#ec1313] transition-colors"
              >
                +91 63726 69269
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
