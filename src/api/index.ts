const api = require.context('./', false, /^(?!index).+js/) // 只获取第一层子目录的组件

export default install