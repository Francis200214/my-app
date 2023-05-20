module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/perset", { "modules": false }]
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
