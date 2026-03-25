import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work — Portfolio & Case Studies',
  description:
    'Explore Trixtern Technologies\' portfolio — projects in renewable energy, career tech, EdTech, automation, and on-demand services. Built in Bhubaneswar, Odisha with precision engineering.',
  alternates: {
    canonical: 'https://www.trixtern.com/work',
  },
  openGraph: {
    title: 'Portfolio — Trixtern Technologies, Bhubaneswar',
    description:
      'Case studies and projects from Trixtern Technologies — Sage Odisha, Webgage Labs, Tarutra Robotics, and more.',
    url: 'https://www.trixtern.com/work',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
