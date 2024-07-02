import { 
  ComponentInternalInstance, 
  ElementNamespace, 
  RendererElement, 
  RendererNode, 
  SuspenseBoundary, 
  VNode, 
  VNodeProps, 
  createRenderer 
} from '@vue/runtime-core'
import patchProp from './patchProp'
import { createElement, createText, createComment } from './nodeOps'

const { render } = createRenderer({
  patchProp: function (el:RendererElement, key:string, prevValue:any, nextValue:any, namespace?: ElementNamespace, prevChildren?: VNode<RendererNode, RendererElement, { [key: string]: any }>[] | undefined, parentComponent?: ComponentInternalInstance | null | undefined, parentSuspense?: SuspenseBoundary | null | undefined, unmountChildren?: ((children: VNode<RendererNode, RendererElement, { [key: string]: any }>[], parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, doRemove?: boolean | undefined, optimized?: boolean | undefined, start?: number | undefined) => void) | undefined): void {},

  insert: function (el: RendererNode, parent: RendererElement, anchor?: RendererNode | null | undefined): void {
    
  },
  
  remove: function (el: RendererNode): void {
    
  },
  
  createElement: function (type: string, namespace?: ElementNamespace, isCustomizedBuiltIn?: string | undefined, vnodeProps?: (VNodeProps & { [key: string]: any }) | null | undefined): RendererElement {
    return {

    }
  },
  
  createText: function (text: string): RendererNode {
    return {

    }
  },
  
  createComment: function (text: string): RendererNode {
    return {

    }
  },
  
  setText: function (node: RendererNode, text: string): void {
    
  },
  
  setElementText: function (node: RendererElement, text: string): void {
   
  },
  
  parentNode: function (node: RendererNode): RendererElement | null {
    return null
  },
  
  nextSibling: function (node: RendererNode): RendererNode | null {
    return null
  }
})

