import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    },
  },
};

export default config;
