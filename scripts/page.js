/*
 * @Description: 页面快速生成脚本
 * @Date: 2018-12-06 10:28:08
 * @LastEditTime: 2018-12-10 09:43:50
 */
const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')

if (!process.argv[2]) {
  console.log('名称不能为空！')
  console.log('示例：yarn page home')
  process.exit(0)
}
const dirName = process.argv[2]
const name = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)


/**
 * @msg: vue页面模版
 */
const tsxTemplate = `
import React from 'react';
import style from './index.module.scss'

const ${name}: React.FC = () => {
  return <div className={style.wrapper}>${name}</div>;
};

export default ${name};
`

// scss 模版
const scssTemplate = `.wrap {
  width: 100%;
}
`

// interface 模版
const interfaceTemplate = `
export interface ${name}Props {
  pageName: string
}
`

// api 接口模版
const apiTemplate = `import request from '../utils/request';
interface GetDataRequest {
  [key: string]: any
}
export const getData = (req: GetDataRequest) =>
request({
  url: '/getData',
  method: 'POST',
  data: req,
});

`

fs.mkdirSync(`${basePath}/pages/${name}`) // mkdir
process.chdir(`${basePath}/pages/${name}`) // cd
fs.writeFileSync(`index.tsx`, tsxTemplate) // tsx 
fs.writeFileSync(`index.module.scss`, scssTemplate) // scss

// process.chdir(`${basePath}/types/pages`); // cd types
// fs.writeFileSync(`${dirName}.interface.ts`, interfaceTemplate) // interface

// process.chdir(`${basePath}/store/module`); // cd store
// fs.writeFileSync(`${dirName}.ts`, vuexTep) // vuex

process.chdir(`${basePath}/api`); // cd api
fs.writeFileSync(`${dirName}.ts`, apiTemplate) // api

process.exit(0)