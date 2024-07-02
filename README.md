# docs-searcher

## electron

> electron = chromium + node.js + nativeApi

### 主进程(main process)

### 渲染进程(render process)

```html
<meta name="content-security-policy" content="default-src 'self'; img-src https://*; child-src 'none';">

```

```sh
npm i electron-builder -D


```

[electron-vite](https://electron-vite.org/)

```js
class Ref {
  #rawValue

  constructor(initial) {
    this.#rawValue = initial
  }

  get value() {
    return this.#rawValue
  }

  set value(newVal) {
    this.#rawValue = newVal
  }
}

const rtf = new Intl.RelativeTimeFormat('zh', {numeric:'auto'})
const lf = new Intl.ListFormat('zh', { type:'disjunction' })
const nf = new Intl.NumberFormat('zh')

console.log(rtf.format(0, 'day'))
console.log(rtf.format(-1, 'week'))
console.log(lf.format(['apple', 'banana', 'grade']))
console.log(nf.format(78_172_891_892_717_270n))



```
