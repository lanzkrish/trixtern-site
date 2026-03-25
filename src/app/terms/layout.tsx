import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Read the Terms and Conditions for using Trixtern Technologies services. Understand your rights, obligations, and our policies.',
  alternates: {
    canonical: 'https://www.trixtern.com/terms',
  },
  openGraph: {
    title: 'Terms & Conditions — Trixtern Technologies',
    description:
      'Terms of Service governing the use of Trixtern Technologies products and services.',
    url: 'https://www.trixtern.com/terms',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
