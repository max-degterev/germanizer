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
      'post-deploy': 'npm ci && NODE_ENV=production npm run gulp build && npm run reload',
    },
  },

  apps: [
    {
      name: 'germanizer',
      script: './app.js',
      kill_timeout: 1000,
      exp_backoff_restart_delay: 500,
      wait_ready: true,
      time: true,
      'merge-logs': true,
      instances: 1,
      exec_mode: 'cluster_mode',
      max_memory_restart: '800M',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8001,
      },
    },
  ],
};
