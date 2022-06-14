import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
  },
};

export default config;
