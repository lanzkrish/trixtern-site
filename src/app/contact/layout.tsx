import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch',
  description:
    'Contact Trixtern Technologies in Bhubaneswar, Odisha. Start a conversation about your project — web development, AI solutions, cloud infrastructure, and more. Call +91 63726 69269 or email contact@trixtern.com.',
  alternates: {
    canonical: 'https://www.trixtern.com/contact',
  },
  openGraph: {
    title: 'Contact Trixtern Technologies — Bhubaneswar, Odisha',
    description:
      'Get in touch with our team in Bhubaneswar for software development, AI, and cloud solutions.',
    url: 'https://www.trixtern.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
