/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "BAMFolio",
  titleTemplate: "%s | Personal portfolio",
  defaultTitle: "BAMFolio",
  description: "My personal portfolio app",
  canonical: "https://bamfolio.herokuapp.com",
  openGraph: {
    url: "https://bamfolio.herokuapp.com",
    title: "BAMFolio",
    description: "My personal portfolio app",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
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
