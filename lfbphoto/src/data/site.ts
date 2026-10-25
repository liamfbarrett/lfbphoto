// Edit this file to change the contact links, page list, or awards.

export const site = {
  name: 'Liam Barrett',
  description:
    'Liam Barrett is a freelance photographer and journalist based in Evanston/Chicago, IL.',
  email: 'w.finn.barrett@gmail.com',
  instagram: 'https://www.instagram.com/lfb_photo',
  linkedin: 'https://www.linkedin.com/in/liamfbarrett',
};

// Menu order. Photo pages read their photos from src/photos/<slug>/
// "singles" is the homepage; every other slug becomes /<slug>/
// kind: 'page' means a custom page (not a photo gallery), such as Reporting.
export const categories: { slug: string; title: string; kind?: 'page' }[] = [
  { slug: 'singles', title: 'Singles' },
  { slug: 'protests-dissent', title: 'Protests & Dissent' },
  { slug: 'the-arts', title: 'The Arts' },
  { slug: 'concerts', title: 'Concerts' },
  { slug: 'portraits', title: 'Portraits' },
  { slug: 'slow-shutter', title: 'Slow Shutter' },
  { slug: 'sports', title: 'Sports' },
  { slug: 'reporting', title: 'Reporting', kind: 'page' },
];

export const hrefFor = (slug: string) => (slug === 'singles' ? '/' : `/${slug}/`);

// One entry per line. The Awards section stays hidden while this list is empty.
export const awards: string[] = [];
