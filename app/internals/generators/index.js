module.exports = function(plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What do you want me to scaffold?',
        choices: [
          'page',
          'dashboard/page',
          'admin/page',
          'common/component',
          'dashboard/component',
          'admin/component',
          'model',
          'endpoint',
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: data => `What the name of the ${data.type}`,
      },
    ],
    actions: function(data) {
      const actions = []

      switch (data.type) {
        case 'common/component':
          actions.push({
            type: 'add',
            path: '../../components/common/{{properCase name}}.js',
            templateFile: 'templates/component.hbs',
          })
          break
        case 'dashboard/component':
          actions.push({
            type: 'add',
            path: '../../components/dashboard/{{properCase name}}.js',
            templateFile: 'templates/component.hbs',
          })
          break
        case 'admin/component':
          actions.push({
            type: 'add',
            path: '../../components/admin/{{properCase name}}.js',
            templateFile: 'templates/component.hbs',
          })
          break
        case 'endpoint':
          actions.push({
            type: 'add',
            path: '../../server/routes/{{properCase name}}.js',
            templateFile: 'templates/route.hbs',
          })
          actions.push({
            type: 'add',
            path: '../../server/controllers/{{properCase name}}.js',
            templateFile: 'templates/controller.hbs',
          })
          break
        case 'model':
          actions.push({
            type: 'add',
            path: '../../server/routes/{{properCase name}}.js',
            templateFile: 'templates/route.hbs',
          })
          actions.push({
            type: 'add',
            path: '../../server/models/{{properCase name}}.js',
            templateFile: 'templates/model.hbs',
          })
          actions.push({
            type: 'add',
            path: '../../server/controllers/{{properCase name}}.js',
            templateFile: 'templates/controller.hbs',
          })
          break
        case 'dashboard/page':
          actions.push({
            type: 'add',
            path: '../../pages/dashboard/{{dashCase name}}.js',
            templateFile: 'templates/dashboardPage.hbs',
          })
          break
        case 'admin/page':
          actions.push({
            type: 'add',
            path: '../../pages/admin/{{dashCase name}}.js',
            templateFile: 'templates/adminPage.hbs',
          })
          break
        case 'page':
          actions.push({
            type: 'add',
            path: '../../pages/{{dashCase name}}.js',
            templateFile: 'templates/page.hbs',
          })
          break
        default:
          break
      }

      return actions
    },
  })
}
