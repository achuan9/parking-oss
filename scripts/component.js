/*
 * @Description: 组件快速生成脚本
 * @Date: 2018-12-06 10:26:23
 * @LastEditTime: 2018-12-10 09:44:19
 */

const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')

const dirName = process.argv[2]
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run tep ${capPirName}')
  process.exit(0)
}

/**
 * @msg: vue页面模版
 */
const tsxTemplate = `
import React from 'react';
import './${dirName}.scss'

const ${dirName}: React.FC = () => {
  return <div>${dirName}</div>;
};

export default Home;
);

`

// interface 模版
const interfaceTep = `// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  componentName: string
}

`

fs.mkdirSync(`${basePath}/components/${dirName}`) // mkdir
process.chdir(`${basePath}/components/${dirName}`) // cd
fs.writeFileSync(`Base${dirName}.tsx`, tsxTemplate) // write 

process.chdir(`${basePath}/types/components`) // cd
fs.writeFileSync(`Base${dirName}.interface.ts`, interfaceTep) // write 

process.exit(0)