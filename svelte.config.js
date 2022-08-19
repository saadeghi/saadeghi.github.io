import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    browser: {
      hydrate: false,
      router: false,
    },
    prerender: {
      default: true
    },
  },
};

export default config;
