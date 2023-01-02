  const { alias } = require('react-app-rewire-alias')

  module.exports = function override(config) {
      alias({
        '@Components' : 'src/Components',
        '@Constants' : 'src/Constants',
        '@HocHelpers' : 'src/HocHelpers',
        '@Services' : 'src/Services',
        '@utils' : 'src/utils',
        '@Containers' : 'src/Containers',
        '@Routes' : 'src/Routes', 
        '@Hooks' : 'src/Hooks',  
        '@Statick' : 'src/Statick',              

      })(config);
  
      return config;
  }
