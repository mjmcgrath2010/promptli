require('dotenv').config()

module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_DSN_CLIENT: process.env.SENTRY_DSN_CLIENT,
    APP_NAME: process.env.APP_NAME,
  },
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'none',
  },
  webpack: (config, options) => {
    return config
  },
}
