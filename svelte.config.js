import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    },
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
  },
};

export default config;
