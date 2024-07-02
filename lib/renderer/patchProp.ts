import { type RendererElement } from 'vue'

function patchProp(el:RendererElement, key:string, prevValue:any, nextValue:any) {
  el.props[key] = nextValue

  if (key[0] === 'o' && key[1] === 'n') {
    const event = key.slice(2).toLowerCase()
    
    el.eventListeners ??= {}
    el.eventListeners[event] = nextValue
  }
}

export default patchProp
