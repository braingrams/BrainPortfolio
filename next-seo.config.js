/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "BAMFolio",
  titleTemplate: "%s | Personal portfolio",
  defaultTitle: "BAMFolio",
  description: "My personal portfolio app",
  canonical: "https://bamfolio.netlify.app",
  openGraph: {
    url: "https://bamfolio.netlify.app",
    title: "BAMFolio",
    description: "My personal portfolio app",
    images: [
      {
        url: "/assets/bamfav.png",
        alt: "My personal portfolio app",
      },
    ],
    site_name: "BAMFolio",
  },
  twitter: {
    handle: "@braintweet",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
