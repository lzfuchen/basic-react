const path = require('path')

exports.paths = {
  /**
   * 编译入口文件
   */
  entryPath: path.resolve(process.cwd(), 'src/index.tsx'),
  /**
   * 编译输入文件
   */
  buildOutPath: path.resolve(process.cwd(), 'dist'),
  /**
   * 代码根目录
   */
  srcPath: path.resolve(process.cwd(), 'src'),
  /**
   * 静态文件目录
   */
  publicPath: path.resolve(process.cwd(), 'public')
}
