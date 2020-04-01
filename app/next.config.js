require('dotenv').config()

module.exports = {
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_DSN_CLIENT: process.env.SENTRY_DSN_CLIENT,
  },
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'none',
  },
  webpack: (config, options) => {
    return config
  },
}
