```yml
yarn create react-app my-app --typescript
```

删除 package.json 下面的

```json
 "eslintConfig": {
    "extends": "react-app"
  }
```

添加 `.eslintrc.js` `.eslintignore`

```js
module.exports = {
  {
    "extends": "react-app"
  }
};
```

```js
/config
```


安装 prettier 扩展，添加 `.prettierrc.js` `.prettierignore.js`

```js
module.exports = {
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  proseWrap: "never"
};
```

```t
**/*.svg
.dockerignore
.DS_Store
.eslintignore
*.png
*.toml
docker
.editorconfig
Dockerfile*
.gitignore
.prettierignore
LICENSE
.eslintcache
*.lock
yarn-error.log
```



