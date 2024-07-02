"use strict"
const http = require('node:http')
const { parse } = require('node:url')


let account = 'Bertie Neal'

/**
 * 
 * @param {*} o 
 * @returns 
 */
function dir(o) {
  return Reflect.ownKeys(Reflect.getPrototypeOf(o))
}

function bool(o) {
  return !!o
}

console.log(account, typeof null, typeof unknown)
console.log(Number('67.2px'), parseFloat('19.21px'))
console.log(dir(new Object()), '1'- -'1', bool(null), (9, false, 'fu@gidsas.ao'))
console.log(void 0)

;(function() {
  let language = 'javascript'
  
  for(let i in language) {
    console.log(`${i} => ${language[i]}`)
  }

})()

const customer = {
  name:'',
  email:'',
  phone:'',
}

console.log(eval('void 0; 12/2; var i = 1; i = 67'))

function sum() {
  return Array.from(arguments).reduce((prev, val)=>prev+=val, 0)
}

console.log(sum(8, 2, 1))

