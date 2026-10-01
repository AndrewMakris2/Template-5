/**
 * ============================================================================
 *  CONTENT — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every piece of text, every link, and every image path on the site comes
 *  from this file. Components never hardcode copy — they read it from here.
 *
 *  Everything below is PLACEHOLDER content. Each placeholder is marked with
 *  `// TODO: replace with real client content`. Search for "TODO" before
 *  launching a client site and make sure none are left.
 *
 *  Images:
 *    Placeholders point at picsum.photos. For a real client, drop their photos
 *    into /public/images and reference them here with root-relative paths,
 *    e.g.  src: '/images/hero.jpg'   (files in /public are served from "/").
 *    Every image needs meaningful `alt` text describing the photo.
 * ============================================================================
 */

export const content = {
  // --------------------------------------------------------------------------
  // SEO & SITE META — used for <title>, meta description and Open Graph tags
  // --------------------------------------------------------------------------
  site: {
    lang: 'en',
    // Full production URL, no trailing slash. Used for canonical + og:url.
    url: 'https://hairstylist-template-5.netlify.app', // Template 5 demo URL — TODO: replace with real client content
    title: 'Vivienne Sterling — Luxury Colour, Extensions & Styling, Scottsdale', // TODO: replace with real client content
    description:
      'Scottsdale hairstylist offering luxury colour, hand-tied extensions and red-carpet styling in a private salon suite. Book your appointment online.', // TODO: replace with real client content
    // Absolute URL recommended for social previews (1200×630 works best).
    ogImage: 'https://picsum.photos/seed/t5-og/1200/630', // TODO: replace with real client content
    ogImageAlt: 'Placeholder: glossy, voluminous Hollywood waves', // TODO: replace with real client content
  },

  // --------------------------------------------------------------------------
  // BUSINESS BASICS
  // --------------------------------------------------------------------------
  business: {
    name: 'Vivienne Sterling', // TODO: replace with real client content — shown as the text logo
    tagline: 'Luxury colour and extensions, finished to perfection.', // TODO: replace with real client content
    location: 'Scottsdale, Arizona', // TODO: replace with real client content
  },

  // External booking platform (StyleSeat, Vagaro, Booksy, Schedulicity, …).
  // The site never takes bookings itself — every "Book" button links here.
  booking: {
    url: 'https://styleseat.com/PLACEHOLDER', // TODO: replace with real client content
    label: 'Book now',
  },

  // --------------------------------------------------------------------------
  // NAVIGATION — `href` must match a section id below
  // --------------------------------------------------------------------------
  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Portfolio', href: '#gallery' },
      { label: 'Services', href: '#services' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    menuOpenLabel: 'Open menu',
    menuCloseLabel: 'Close menu',
    skipLinkLabel: 'Skip to content',
  },

  // --------------------------------------------------------------------------
  // HERO
  // --------------------------------------------------------------------------
  hero: {
    eyebrow: 'Salon suite — Scottsdale, AZ', // TODO: replace with real client content
    heading: 'Vivienne Sterling', // TODO: replace with real client content
    tagline: 'Luxury colour and extensions, finished to perfection.', // TODO: replace with real client content
    ctaLabel: 'Book now',
    secondaryCtaLabel: 'View the portfolio',
    secondaryCtaHref: '#gallery',
    image: {
      src: 'https://picsum.photos/seed/t5-hero/2000/1400', // TODO: replace with real client content
      alt: 'Placeholder: model with glossy, voluminous waves in an elegant salon with gold accents', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // ABOUT
  // --------------------------------------------------------------------------
  about: {
    label: 'About',
    heading: 'An appointment that feels like an occasion.', // TODO: replace with real client content
    // One string per paragraph.
    bio: [
      'I’m Vivienne. For fourteen years I’ve styled clients for weddings, galas and editorial shoots, and today I welcome guests into my private salon suite in Old Town Scottsdale.', // TODO: replace with real client content
      'Every visit is one-on-one and unhurried, from a detailed consultation to a finish you’ll want to photograph. I specialise in dimensional colour, seamless hand-tied extensions and glamorous, long-lasting styling.', // TODO: replace with real client content
    ],
    specialtiesLabel: 'Specialties',
    specialties: ['Luxury colour', 'Hand-tied extensions', 'Red-carpet styling'], // TODO: replace with real client content
    image: {
      src: 'https://picsum.photos/seed/t5-about/900/1125', // TODO: replace with real client content
      alt: 'Placeholder: portrait of the stylist in her elegant salon suite', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // GALLERY — any number of images; 9+ recommended. `full` is the larger
  // version shown in the lightbox (falls back to `src` if omitted).
  // --------------------------------------------------------------------------
  gallery: {
    label: 'Portfolio',
    heading: 'Colour, length & glamour',
    lightboxCloseLabel: 'Close image',
    lightboxPrevLabel: 'Previous image',
    lightboxNextLabel: 'Next image',
    openImageLabel: 'Enlarge image', // prefixed to each image's alt for screen readers
    // TODO: replace with real client content — all 9 images below
    images: [
      { src: 'https://picsum.photos/seed/t5-g1/800/1000', full: 'https://picsum.photos/seed/t5-g1/1600/2000', alt: 'Placeholder: glossy Hollywood waves with a deep side part' },
      { src: 'https://picsum.photos/seed/t5-g2/800/1000', full: 'https://picsum.photos/seed/t5-g2/1600/2000', alt: 'Placeholder: rich chocolate brunette with golden ribbons' },
      { src: 'https://picsum.photos/seed/t5-g3/800/1000', full: 'https://picsum.photos/seed/t5-g3/1600/2000', alt: 'Placeholder: waist-length hand-tied extensions blended seamlessly' },
      { src: 'https://picsum.photos/seed/t5-g4/800/1000', full: 'https://picsum.photos/seed/t5-g4/1600/2000', alt: 'Placeholder: polished chignon for a black-tie event' },
      { src: 'https://picsum.photos/seed/t5-g5/800/1000', full: 'https://picsum.photos/seed/t5-g5/1600/2000', alt: 'Placeholder: champagne blonde with a soft shadow root' },
      { src: 'https://picsum.photos/seed/t5-g6/800/1000', full: 'https://picsum.photos/seed/t5-g6/1600/2000', alt: 'Placeholder: bouncy, voluminous blowout' },
      { src: 'https://picsum.photos/seed/t5-g7/800/1000', full: 'https://picsum.photos/seed/t5-g7/1600/2000', alt: 'Placeholder: sleek high ponytail with added length' },
      { src: 'https://picsum.photos/seed/t5-g8/800/1000', full: 'https://picsum.photos/seed/t5-g8/1600/2000', alt: 'Placeholder: auburn colour with a mirror-like gloss finish' },
      { src: 'https://picsum.photos/seed/t5-g9/800/1000', full: 'https://picsum.photos/seed/t5-g9/1600/2000', alt: 'Placeholder: bridal waves with a jewelled hairpiece' },
    ],
  },

  // --------------------------------------------------------------------------
  // SERVICES
  // --------------------------------------------------------------------------
  services: {
    label: 'Services',
    heading: 'Services & pricing',
    intro: 'Every service includes a private consultation, a luxury wash ritual and a signature finish. Prices are starting points.', // TODO: replace with real client content
    columnLabels: { service: 'Service', duration: 'Duration', price: 'Price' },
    // TODO: replace with real client content — all services below
    items: [
      { name: 'Signature cut & blowout', description: 'Precision cut with a voluminous, glossy finish.', duration: '75 min', price: '$150+' },
      { name: 'Luxury blowout', description: 'Wash ritual, scalp massage and a long-lasting blowout.', duration: '60 min', price: '$95+' },
      { name: 'Dimensional colour', description: 'Multi-tonal colour with gloss and bond-building treatment.', duration: '3 hr', price: '$325+' },
      { name: 'Luxury blonding', description: 'Custom highlights or balayage with toner and treatment.', duration: '3.5 hr', price: '$375+' },
      { name: 'Hand-tied extensions', description: 'Installation of seamless, custom-colour-matched wefts. Hair priced separately.', duration: '3 hr', price: '$600+' },
      { name: 'Extension move-up', description: 'Maintenance every 6 to 8 weeks to keep extensions flawless.', duration: '2 hr', price: '$250+' },
      { name: 'Red-carpet styling', description: 'Waves, updos or sleek styles for galas and events.', duration: '75 min', price: '$175+' },
      { name: 'Extensions consultation', description: 'Colour match, method recommendation and a detailed quote.', duration: '30 min', price: '$50' },
    ],
    note: 'A deposit is required to secure extension and colour appointments. Consultation fees are credited toward your service.', // TODO: replace with real client content
    ctaLabel: 'Book a service',
  },

  // --------------------------------------------------------------------------
  // TESTIMONIALS
  // --------------------------------------------------------------------------
  testimonials: {
    label: 'Testimonials',
    heading: 'In their words',
    // TODO: replace with real client content — all testimonials below
    items: [
      { quote: 'My extensions are completely undetectable. Vivienne gave me the hair I’ve always wanted.', name: 'Alexandra F.', detail: 'Extensions client' },
      { quote: 'The whole experience felt five-star, and the colour is the most beautiful I’ve ever had.', name: 'Camille T.', detail: 'Colour client' },
      { quote: 'She styled me for a black-tie gala and my waves lasted until two in the morning.', name: 'Natalie R.', detail: 'Event styling client' },
    ],
  },

  // --------------------------------------------------------------------------
  // OPTIONAL SECTIONS — hidden until `enabled: true`. When you switch one on,
  // also add it to nav.links if it should appear in the menu, e.g.
  // { label: 'FAQ', href: '#faq' }. Events sits after Services; Policies and
  // FAQ sit just before Contact.
  // --------------------------------------------------------------------------
  events: {
    enabled: false,
    label: 'Bridal & events',
    heading: 'For the big days.',
    intro: 'Wedding mornings, engagements and special occasions, in the studio or on location.', // TODO: replace with real client content
    // TODO: replace with real client content — all packages below
    packages: [
      { name: 'Bridal trial', price: '$150', description: 'A full run-through of your wedding-day look, about 90 minutes.' },
      { name: 'Wedding day', price: 'from $250', description: 'Styling on the morning, on location or in the studio.' },
      { name: 'Bridal party', price: 'from $95 each', description: 'Bridesmaids, mothers and anyone else getting ready with you.' },
    ],
    note: 'Travel within 20 miles is included. Dates book up early, so enquire as soon as you can.', // TODO: replace with real client content
    ctaLabel: 'Enquire about your date', // links to the contact form
  },

  policies: {
    enabled: false,
    label: 'Policies',
    heading: 'Good to know before you book.',
    // TODO: replace with real client content — all policies below
    items: [
      { title: 'Deposits', text: 'A 25% deposit secures your appointment and comes off your final bill.' },
      { title: 'Cancellations', text: 'Please give at least 48 hours’ notice to move or cancel. Late cancellations lose the deposit.' },
      { title: 'Running late', text: 'Arriving more than 15 minutes late may mean a shorter service or a new booking.' },
      { title: 'Colour services', text: 'New colour clients need a patch test at least 48 hours before their first appointment.' },
    ],
  },

  faq: {
    enabled: false,
    label: 'FAQ',
    heading: 'Questions, answered.',
    // TODO: replace with real client content — all questions below
    items: [
      { q: 'Do you offer consultations?', a: 'Yes. Free 15-minute consultations, in person or by video. Book one online or send a message.' },
      { q: 'How should I arrive?', a: 'With clean, dry hair unless your service includes a wash, plus any inspiration photos you love.' },
      { q: 'How long will my appointment take?', a: 'Each service lists a typical time. Colour and big changes can run longer, so plan a little extra.' },
      { q: 'How can I pay?', a: 'All major cards, Apple Pay and cash.' },
    ],
  },

  // --------------------------------------------------------------------------
  // CONTACT
  // --------------------------------------------------------------------------
  contact: {
    label: 'Contact',
    heading: 'Begin with a conversation.',
    intro: 'Interested in extensions, a colour transformation or event styling? Share a few details and I’ll reply personally within two business days.', // TODO: replace with real client content
    email: 'hello@example.com', // TODO: replace with real client content
    phone: '(480) 555-0194', // TODO: replace with real client content
    address: '7000 E Placeholder Blvd, Suite 12, Scottsdale, AZ 85251', // TODO: replace with real client content
    detailsLabels: { email: 'Email', phone: 'Phone', studio: 'Salon suite' },
    bookingHeading: 'Ready to reserve your time?',
    bookingLabel: 'Book an appointment',
    form: {
      name: 'contact', // Netlify form name — shows up in the Netlify dashboard
      fields: {
        name: { label: 'Name', placeholder: '' },
        email: { label: 'Email', placeholder: '' },
        phone: { label: 'Phone (optional)', placeholder: '' },
        message: { label: 'Message', placeholder: 'Tell me what you’re looking for, and your event date if you have one.' },
      },
      honeypotLabel: 'Don’t fill this out if you’re human:',
      submitLabel: 'Send message',
      sendingLabel: 'Sending…',
      successMessage: 'Thank you. Your message has been received, and I’ll be in touch shortly.',
      errorMessage: 'Sorry, something went wrong. Please try again, or email me directly.',
    },
  },

  // --------------------------------------------------------------------------
  // SOCIAL LINKS — `platform` picks the icon. Supported: instagram, facebook,
  // tiktok, pinterest, youtube, x. The first `instagram` entry also appears
  // in the nav. Remove any the client doesn't use.
  // --------------------------------------------------------------------------
  social: [
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'pinterest', label: 'Pinterest', url: 'https://pinterest.com/PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'facebook', label: 'Facebook', url: 'https://facebook.com/PLACEHOLDER' }, // TODO: replace with real client content
  ],

  // --------------------------------------------------------------------------
  // FOOTER
  // --------------------------------------------------------------------------
  footer: {
    hoursHeading: 'Salon hours',
    // TODO: replace with real client content
    hours: [
      { days: 'Tue – Fri', time: '9am – 6pm' },
      { days: 'Saturday', time: '8am – 4pm' },
      { days: 'Sun – Mon', time: 'By appointment' },
    ],
    contactHeading: 'Visit',
    socialHeading: 'Follow',
    // "© {year} {copyrightName}. {copyrightSuffix}" — year is filled in at build time
    copyrightName: 'Vivienne Sterling Hair', // TODO: replace with real client content
    copyrightSuffix: 'All rights reserved.',
    backToTopLabel: 'Back to top',
  },

  // --------------------------------------------------------------------------
  // GOOGLE BUSINESS DETAILS — read by search engines, not shown on the page.
  // Name, phone, email, socials and booking link come from the sections above;
  // keep the address and hours here in step with Contact and the footer.
  // Hours use 24-hour times; leave out closed days.
  // --------------------------------------------------------------------------
  localBusiness: {
    type: 'HairSalon', // or 'BeautySalon' for wider beauty services
    priceRange: '$$$', // $ – $$$$
    // TODO: replace with real client content
    address: { street: '7000 E Placeholder Blvd, Suite 12', city: 'Scottsdale', region: 'AZ', postalCode: '85251', country: 'US' },
    // TODO: replace with real client content
    hours: [
      { days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
      { days: ['Saturday'], opens: '08:00', closes: '16:00' },
    ],
  },

  // --------------------------------------------------------------------------
  // ANALYTICS — counts visitors plus taps on Book, phone and email links.
  // Off until an ID is filled in. Use one of:
  //   Umami (umami.is, no cookies)  → the site's Website ID
  //   Google Analytics 4            → the Measurement ID, e.g. 'G-XXXXXXXXXX'
  // --------------------------------------------------------------------------
  analytics: {
    umamiWebsiteId: '',
    ga4MeasurementId: '',
  },
};
