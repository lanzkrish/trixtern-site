import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers — Join the Intentional',
  description:
    'Explore job opportunities at Trixtern Technologies in Bhubaneswar, Odisha. We\'re hiring UI/UX Designers, Social Media Managers, Business Development Executives, Interns, and more. Remote-first culture.',
  alternates: {
    canonical: 'https://www.trixtern.com/careers',
  },
  openGraph: {
    title: 'Careers at Trixtern Technologies — Jobs in Bhubaneswar',
    description:
      'Join our remote-first team based in Bhubaneswar, Odisha. Open roles in design, marketing, and business development.',
    url: 'https://www.trixtern.com/careers',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
