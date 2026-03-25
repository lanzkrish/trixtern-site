export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': 'https://www.trixtern.com/#organization',
        name: 'Trixtern Technologies',
        alternateName: 'Trixtern',
        url: 'https://www.trixtern.com',
        logo: 'https://www.trixtern.com/logos/trixternnobg.png',
        description:
          'Trixtern Technologies is a software development company based in Bhubaneswar, Odisha specializing in AI, web development, UI/UX design, cloud infrastructure, and digital strategy.',
        foundingDate: '2024',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Plot No-524, Nalihana, Saraswatipur, Balanga',
          addressLocality: 'Bhubaneswar',
          addressRegion: 'Odisha',
          postalCode: '752105',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 20.2961,
          longitude: 85.8245,
        },
        telephone: '+916372669269',
        email: 'contact@trixtern.com',
        sameAs: ['https://www.linkedin.com/company/trixtern/'],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+916372669269',
          contactType: 'customer service',
          email: 'contact@trixtern.com',
          availableLanguage: ['English', 'Hindi', 'Odia'],
          areaServed: ['IN', 'Bhubaneswar', 'Odisha'],
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Bhubaneswar',
          },
          {
            '@type': 'State',
            name: 'Odisha',
          },
          {
            '@type': 'Country',
            name: 'India',
          },
        ],
        priceRange: '$$',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.trixtern.com/#website',
        url: 'https://www.trixtern.com',
        name: 'Trixtern Technologies',
        description:
          'Software development and digital solutions company in Bhubaneswar, Odisha',
        publisher: {
          '@id': 'https://www.trixtern.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.trixtern.com/?s={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-IN',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services offered by Trixtern Technologies',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Artificial Intelligence Solutions',
        description:
          'Custom AI and neural network solutions for complex operational challenges in Bhubaneswar and across India.',
        provider: { '@id': 'https://www.trixtern.com/#organization' },
        areaServed: { '@type': 'City', name: 'Bhubaneswar' },
        serviceType: 'AI Development',
      },
      {
        '@type': 'Service',
        name: 'Software Engineering',
        description:
          'Bespoke full-stack software development for scalable and resilient digital systems.',
        provider: { '@id': 'https://www.trixtern.com/#organization' },
        areaServed: { '@type': 'City', name: 'Bhubaneswar' },
        serviceType: 'Software Development',
      },
      {
        '@type': 'Service',
        name: 'UI/UX Design',
        description:
          'Intuitive and beautiful interface design for web and mobile applications.',
        provider: { '@id': 'https://www.trixtern.com/#organization' },
        areaServed: { '@type': 'City', name: 'Bhubaneswar' },
        serviceType: 'UI/UX Design',
      },
      {
        '@type': 'Service',
        name: 'Cloud Infrastructure',
        description:
          'Scalable serverless architecture and cloud solutions for performance and zero downtime.',
        provider: { '@id': 'https://www.trixtern.com/#organization' },
        areaServed: { '@type': 'City', name: 'Bhubaneswar' },
        serviceType: 'Cloud Computing',
      },
      {
        '@type': 'Service',
        name: 'Cybersecurity',
        description:
          'Proactive threat detection and predictive security solutions for digital assets.',
        provider: { '@id': 'https://www.trixtern.com/#organization' },
        areaServed: { '@type': 'City', name: 'Bhubaneswar' },
        serviceType: 'Cybersecurity',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
