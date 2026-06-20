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

          <div className="pt-2 md:pt-4">
            <a
              href="https://wa.me/919815763993?text=Hi!%20I%20would%20like%20to%20know%20more"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 md:py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm md:text-base font-medium rounded-lg transition-all shadow-sm hover:shadow-md group w-fit"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
              <svg className="w-5 h-5 ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
