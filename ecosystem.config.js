module.exports = {
  deploy: {
    // "production" is the environment name
    production: {
      user: 'germanizer',
      host: [
        {
          host: '161.35.159.130',
          port: '29',
        },
      ],
      ref: 'origin/master',
      repo: 'git@github.com:suprmax/germanizer.git',
      path: '/home/germanizer/app',
      'post-deploy': 'npm ci && npm run compile',
    },
  },
};
