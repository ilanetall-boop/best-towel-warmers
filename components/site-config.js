/**
 * site-config.js — Best Towel Warmers
 * Loaded synchronously in <head> to set config & CSS variables before paint.
 */
window.SITE_CONFIG = {
  name: "Best Towel Warmers",
  domain: "best-towel-warmers.com",
  tagline: "Expert reviews for luxury towel warmers",
  logo: "images/towel-warmers-logo.svg?v=2",
  newsletterUrl: "https://script.google.com/macros/s/AKfycbxhUcinCHfLDqvtL6ko2bxreGTOv4yOkGPrO_hUC7v9AVXvjI0cAG9k2nVXKAkbN8kV/exec",
  affiliateTag: "besttowelwarmers-20",
  gaId: "G-KSDR2XPN5P",
  colors: {
    primary: "#880E4F",
    primaryLight: "#AD1457",
    primaryDark: "#560027",
    accent: "#FFB300",
    accentDark: "#FF8F00"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Articles", href: "articles" },
    { label: "Comparisons", href: "comparisons" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" }
  ],
  footer: {
    description: "Your trusted source for towel warmer reviews, comparisons, and buying guides. Find the perfect towel warmer for luxury, comfort, and warmth.",
    quickLinks: [
      { label: "All Articles", href: "articles" },
      { label: "Comparisons", href: "comparisons" },
      { label: "How We Research", href: "how-we-research" },
      { label: "About Us", href: "about" }
    ],
    legal: [
      { label: "Privacy Policy", href: "privacy" },
      { label: "Terms of Service", href: "terms" },
      { label: "Affiliate Disclosure", href: "disclosure" }
    ],
    network: [
      { label: "Best Bath Rugs", href: "https://www.bestbathrugs.com" },
      { label: "Best Shower Curtains", href: "https://www.best-shower-curtains.com" },
      { label: "Best Toilet Seats", href: "https://www.besttoiletseats.com" },
      { label: "Best Bathroom Vanities", href: "https://www.bestbathroomvanities.com" },
      { label: "Best Shower Heads", href: "https://www.best-shower-heads.com" },
      { label: "Best Soap Dispensers", href: "https://www.best-soap-dispensers.com" },
      { label: "Best Bathroom Mirrors", href: "https://www.bestbathroommirrors.com" },
      { label: "Best Bath Towels", href: "https://www.best-bath-towels.com" },
      { label: "Best Bathroom Faucets", href: "https://www.best-bathroom-faucets.com" },
      { label: "Best Bathroom Storage", href: "https://www.bestbathroomstorage.com" }
    ]
  },
  networkBanners: [
    {
      id: "best-bath-rugs",
      domain: "www.bestbathrugs.com",
      headline: "Looking for the Perfect Bath Rug?",
      description: "Discover our expert reviews of the best bath rugs — from ultra-absorbent to non-slip designs. Find your perfect match.",
      ctaText: "Browse Bath Rugs",
      active: true
    },
    {
      id: "best-shower-curtains",
      domain: "best-shower-curtains.com",
      headline: "Need a New Shower Curtain?",
      description: "From waterproof liners to luxury hotel-style designs. Our experts tested the top shower curtains so you don't have to.",
      ctaText: "Browse Shower Curtains",
      active: true
    },
    {
      id: "best-toilet-seats",
      domain: "besttoiletseats.com",
      headline: "Upgrading Your Toilet Seat?",
      description: "From bidet seats to soft-close designs. Expert reviews of the best toilet seats for comfort and hygiene.",
      ctaText: "Browse Toilet Seats",
      active: true
    },
    {
      id: "best-bathroom-vanities",
      domain: "bestbathroomvanities.com",
      headline: "Shopping for a Bathroom Vanity?",
      description: "Expert reviews of the best bathroom vanities — from floating modern designs to farmhouse styles.",
      ctaText: "Browse Bathroom Vanities",
      active: true
    },
    {
      id: "best-shower-heads",
      domain: "best-shower-heads.com",
      headline: "Looking for the Perfect Shower Head?",
      description: "Expert reviews of the best shower heads — from rainfall to high-pressure to filtered designs.",
      ctaText: "Browse Shower Heads",
      active: true
    },
    {
      id: "best-bathroom-faucets",
      domain: "best-bathroom-faucets.com",
      headline: "Upgrading Your Bathroom Faucet?",
      description: "Expert reviews of the best bathroom faucets — from matte black to brushed nickel, modern to classic.",
      ctaText: "Browse Bathroom Faucets",
      active: true
    },
    {
      id: "best-bathroom-storage",
      domain: "bestbathroomstorage.com",
      headline: "Need Smart Bathroom Storage?",
      description: "Expert reviews of the best bathroom storage solutions — from over-the-toilet units to wall cabinets.",
      ctaText: "Browse Bathroom Storage",
      active: true
    }
  ]
};

// Set CSS variables immediately
(function () {
  var c = window.SITE_CONFIG.colors;
  var r = document.documentElement.style;
  r.setProperty('--primary', c.primary);
  r.setProperty('--primary-light', c.primaryLight);
  r.setProperty('--primary-dark', c.primaryDark);
  r.setProperty('--accent', c.accent);
  r.setProperty('--accent-dark', c.accentDark);

  // Reserve header space to prevent CLS (layout shift)
  var s = document.createElement('style');
  s.textContent = '#site-header{min-height:89px;background:#fff;border-bottom:1px solid #e5e5e5;position:sticky;top:0;z-index:50}';
  document.head.appendChild(s);
})();
