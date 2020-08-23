require('dotenv').config()

module.exports = {
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_DSN_CLIENT: process.env.SENTRY_DSN_CLIENT,
    TEST_WIDGET_ID: process.env.TEST_WIDGET_ID,
    TEST_BUSINESS_IDENTIFIER: process.env.TEST_BUSINESS_IDENTIFIER,
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'none',
    TEST_WIDGET_ID: process.env.TEST_WIDGET_ID,
    TEST_BUSINESS_IDENTIFIER: process.env.TEST_BUSINESS_IDENTIFIER,
    staticFolder: '/static',
  },
  webpack: (config, options) => {
    return config
  },
}
