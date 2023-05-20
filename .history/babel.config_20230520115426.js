module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/perset-export const exportVariable = localVariable;
    ", { "modules": false }]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
