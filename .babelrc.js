module.exports = {
  presets: [
    [
      "@babel/preset-env", 
      {
        useBuiltIns: "usage",
        corejs: { "version": "3.21.1", "proposals": true },
        modules: false //保留 ES 模块，以便使用tree shaking、sideEffects等
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    "@babel/plugin-transform-runtime"
  ]
}