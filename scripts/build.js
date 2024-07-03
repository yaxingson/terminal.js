const fs = require('node:fs')
const { resolve } = require('node:path')

/**
 * 以树形结构显示目录结构
 * 
 * @param {string} path 
 * @param {string[]} excludes 
 * @param {number} deep 
 */
function tree(path, excludes=[], deep=1) {
  const numOfParams = tree.length
  const numOfArgs = arguments.length

  const dirOrFiles = fs.readdirSync(path)

  dirOrFiles.forEach(name=>{
    const pathname = resolve(path, name)
    if(excludes.indexOf(name) === -1 && fs.statSync(pathname).isDirectory()) {
      // arguments.callee(pathname, excludes, deep+1)
      tree(pathname, excludes, deep+1)
    } else {
      console.log(`${' '.repeat(deep-1)}|${'-'.repeat(deep)} ${name}`)
    }
  })
}

function $() {
  

}

