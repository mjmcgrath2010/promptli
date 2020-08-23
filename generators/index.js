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
          'widget common component',
          'widget container',
          'widget display',
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
            path: '../app/components/common/{{properCase name}}.js',
            templateFile: 'templates/component.hbs',
          })
          break
        case 'dashboard/component':
          actions.push({
            type: 'add',
            path: '../app/components/dashboard/{{properCase name}}.js',
            templateFile: 'templates/component.hbs',
          })
          break
        case 'admin/component':
          actions.push({
            type: 'add',
            path: '../app/components/admin/{{properCase name}}.js',
            templateFile: 'templates/component.hbs',
          })
          break
        case 'endpoint':
          actions.push({
            type: 'add',
            path: '../app/server/routes/{{properCase name}}.js',
            templateFile: 'templates/route.hbs',
          })
          actions.push({
            type: 'add',
            path: '../app/server/controllers/{{properCase name}}.js',
            templateFile: 'templates/controller.hbs',
          })
          break
        case 'model':
          actions.push({
            type: 'add',
            path: '../app/server/routes/{{properCase name}}.js',
            templateFile: 'templates/route.hbs',
          })
          actions.push({
            type: 'add',
            path: '../app/server/models/{{properCase name}}.js',
            templateFile: 'templates/model.hbs',
          })
          actions.push({
            type: 'add',
            path: '../app/server/controllers/{{properCase name}}.js',
            templateFile: 'templates/controller.hbs',
          })
          break
        case 'dashboard/page':
          actions.push({
            type: 'add',
            path: '../app/pages/dashboard/{{dashCase name}}.js',
            templateFile: 'templates/dashboardPage.hbs',
          })
          break
        case 'admin/page':
          actions.push({
            type: 'add',
            path: '../app/pages/admin/{{dashCase name}}.js',
            templateFile: 'templates/adminPage.hbs',
          })
          break
        case 'page':
          actions.push({
            type: 'add',
            path: '../app/pages/{{dashCase name}}.js',
            templateFile: 'templates/page.hbs',
          })
          break
        case 'widget common component':
          actions.push({
            type: 'add',
            path: '../widget/src/components/{{dashCase name}}.js',
            templateFile: 'templates/page.hbs',
          })
          break
        case 'widget container':
          actions.push({
            type: 'add',
            path: '../widget/src/containers/{{properCase name}}/{{dashCase name}}.js',
            templateFile: 'templates/page.hbs',
          })
          break
        case 'widget display':
          actions.push({
            type: 'add',
            path: '../widget/src/displays/{{properCase name}}/{{dashCase name}}.js',
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
