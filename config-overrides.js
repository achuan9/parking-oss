const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');

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
  }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
    ['pages']: path.resolve(__dirname, 'src/pages'),
    ['components']: path.resolve(__dirname, 'src/components'),
  }),
);
