export const site = {
  name: "POW!",
  // Netlify sets DEPLOY_PRIME_URL for each deploy (production, previews, branches)
  url: process.env.DEPLOY_PRIME_URL || "http://localhost:4321",
  canonicalUrl: "https://usepow.app",
  twitterCreator: "@raae",
  twitterSite: "",
  contact: {
    email: "hello@usepow.app",
    address: "Tromsøgata 26, 0565 Oslo, Norway",
  },
  greeting: `Made with ❤ <br/>by <a href="https://twitter.com/raae">@raae</a> and family.`,
  fathom: {
    site: "DFGHJDZL",
    includedDomains: "www.usepow.app",
  },
};
