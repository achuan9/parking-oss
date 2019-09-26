const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@menu-dark-bg': '#1792f5',
      '@menu-dark-submenu-bg': '#1792f5',
      '@menu-dark-item-color': '#90cdff',
      '@menu-dark-highlight-color': '#ffffff',
      '@menu-dark-item-active-bg': '#007add',
      '@layout-sider-background': '#1792f5'
    },
  })
);
