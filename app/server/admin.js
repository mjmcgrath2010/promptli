const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')

const User = require('./models/User')
const Account = require('./models/Account')
const Packages = require('./models/Packages')
const Service = require('./models/Service')
const Reservations = require('./models/Reservations')
const WidgetConfig = require('./models/WidgetConfig')

AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
  rootPath: '/admin',
  resources: [
    {
      resource: User,
      options: {},
    },
    {
      resource: Account,
      options: {},
    },
    {
      resource: Packages,
      options: {},
    },
    {
      resource: Service,
      options: {},
    },
    {
      resource: Reservations,
      options: {},
    },
    {
      resource: WidgetConfig,
      options: {},
    },
  ],
  branding: {
    logo: 'https://www.promptli.app/static/logos/promptli-color.png',
    companyName: '',
    /**
     * CSS theme.
     */
    //theme:
    softwareBrothers: false,
    favicon: '',
  },
})

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro)