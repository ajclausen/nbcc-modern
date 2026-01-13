export const siteConfig = {
  name: 'New Brunswick Church of Christ',
  shortName: 'NBCC',
  tagline: 'Uplifting Christ to bring Salvation to the Lost',
  founded: 1856,

  contact: {
    address: '6480 S State Road 39',
    city: 'Lebanon',
    state: 'IN',
    zip: '46052',
    fullAddress: '6480 S State Road 39, Lebanon, IN 46052',
    phone: '765-482-5265',
    phoneFormatted: '(765) 482-5265',
    email: 'office@nbcc-church.org',
    mapUrl: 'https://maps.google.com/?q=6480+S+State+Road+39+Lebanon+IN+46052',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.8!2d-86.47!3d40.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDAyJzI0LjAiTiA4NsKwMjgnMTIuMCJX!5e0!3m2!1sen!2sus!4v1',
  },

  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100064902573630',
  },

  meta: {
    title: 'New Brunswick Church of Christ | Lebanon, IN',
    description: 'A welcoming, Spirit-filled church family in Lebanon, Indiana since 1856. Join us for worship, fellowship, and growing in faith together.',
    ogImage: '/og-image.jpg',
  },

  livestream: {
    platform: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=100064902573630/live',
  },
} as const;

export type SiteConfig = typeof siteConfig;
