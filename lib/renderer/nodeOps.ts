import { type RendererNode, RendererElement } from '@vue/runtime-core'

export function createElement(tag:string) {
  return {
    type: 'ELEMENT',
    tag,
    parentNode: null,
    children: [],
    props: {},
    eventListeners: {},
    text: null
  }
}

export function createText(text:string) {
  return {
    type: 'TEXT',
    parentNode: null,
    text: text   
  }
}

export function createComment() {}

export function setText() {}

export function appendChild(parent:any, child:any) {
  child.parentNode = parent
  parent.children.push(child)
}

export function removeChild(parent:any, child:any) {
  const i = parent.children.indexOf(child)
  
  if (i > -1) {
    parent.children.splice(i, 1)
  } else {
    throw Error('')
  }

  child.parentNode = null
}

export function insert(el:RendererNode, parent:RendererElement, anchor?:RendererNode|null|undefined) {}
