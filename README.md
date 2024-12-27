
## Features


## Getting Started

### Install

```sh
> npm i vue-ink vue

```

### Usage

```js
import { defineComponent, ref, onMounted, onUnmounted, h } from 'vue'
import { createInkApp } from 'vue-ink'

const Counter = defineComponent({
  setup() {
    const count = ref(0)

    let timer

    onMounted(()=>timer = setInterval(()=>count.value+=1, 100))
    onUnmounted(()=>clearInterval(timer))

    return ()=>h(Text, `${count.value} tests passed`)
  }
})

createInkApp(Counter).mount()

```


## Components

### `Text`

### `Box`

### `Newline`

### `Spacer`

### `Link`

## Composition API

### `useInput`

### `useApp`

### `useStdin`

### `useStdout`

### `useStderr`


## Demos

