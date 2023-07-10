/*
 * @Author: xiaohu
 * @Date: 2023-07-08 14:20:20
 * @LastEditors: xiaohu
 * @LastEditTime: 2023-07-10 14:34:31
 * @FilePath: \DataStructures-And-Algorithms\LinkedList.ts
 * @Description: 
 */
interface LinkedNode {
  val: number;
  next: LinkedNode | null;
}

class LinkedNode {
  constructor(val?: number, next?: LinkedNode | null) {
    this.val = val || -999
    this.next = next || null
  }
}

const listNode = new LinkedNode(0)
const listNode1 = new LinkedNode(1)
const listNode2 = new LinkedNode(2)

listNode.next = listNode1
listNode1.next = listNode2

// NOTE 头节点为任意value
class LinkedList {
  head: LinkedNode
  linkList: LinkedNode | null = null
  constructor() {
    // 生成头节点
    this.head = new LinkedNode()
    this.linkList = this.head
  }
  /**
   * 头插法
   */
  insertHead(value: number) {
    const linkList = this.head.next
    const newNode = new LinkedNode(value)
    this.head.next = newNode
    newNode.next = linkList
  }
  /**
   * 尾插法
   * @param value 
   * @returns 
   */
  insertTail(value: number) {
    const newNode = new LinkedNode(value)
    let currentNode = this.head.next
    if(!currentNode) {
      this.head.next = newNode
    }
    while(currentNode !== null) {
      if(!currentNode.next) {
        currentNode.next = newNode
        return
      }
      currentNode = currentNode.next
    }
  }
  /**
   * NOTE 插入 在index位置插入value
   * 查找到目标节点，把目标节点的next指向新节点，新节点next指向目标节点的next节点
   * @param index 
   * @param value 
   * @returns 
   */
  insert(index: number, value: number) {
    const lastIndex = index - 1
    let newNode = new LinkedNode(value)
    let prevNode: LinkedNode | null = null // 索引index对应的目标节点
    let nextNode: LinkedNode | null = null // 目标节点对应的下一个节点

    // NOTE 判断是首节点直接在head后面插入
    if(index === 0) {
      this.insertHead(value)
    } else {
      prevNode = this.findByIndex(lastIndex)
      if(prevNode !== null) {
        nextNode = prevNode.next
        prevNode.next = newNode
        newNode.next = nextNode
      }
    }
  }
  /**
   * NOTE 删除
   * 查找目标节点的上一个节点prevNode, prevNode的next指向targetNode的next
   * 需要特殊处理首节点
   * @param index 
   */
  remove(index: number) {
    const lastIndex = index - 1
    const prevNode = this.findByIndex(lastIndex)
    const targetNode = prevNode?.next
    if(prevNode && targetNode) {
      prevNode.next = targetNode.next
    }
  }
  update(index: number, value: number) {
    const currentNode = this.findByIndex(index)
    if(currentNode) {
      currentNode.val = value
    }
  }
  /**
   * NOTE 根据索引查找节点
   * @param index 
   * @returns LinkNode
   */
  findByIndex(index: number) {
    // NOTE 这里的头节点改如何定义呢？
    // 如果把头节点当做是首节点那么必然会有bug
    // 所以查找的时候都需要从head.next开始
    let currentNode = this.head.next // 当前节点
    let currentIndex = 0
    while(currentNode !== null) {
      if(currentIndex === index) {
        return currentNode
      }
      currentNode = currentNode.next
      currentIndex++
    }
    return null
  }
  /**
   * NOTE 查找节点为target并返回索引值
   * @param target 
   * @returns index 
   */
  findIndex(target: number) {
    let currentNode = this.head.next
    let index = 0
    while(currentNode !== null) {
      if(currentNode.val === target) {
        return index
      }
      // 指针移向下一个节点
      currentNode = currentNode.next
      index++
    }
    return -1
  }
  // NOTE 这个方法仅在内部使用
  /**
   * 打印所有节点
   */
  findAll() {
    let currentNode = this.linkList
    let result = ''
    while(currentNode != null) {
      result = `${result}${currentNode.val} -->> `
      // 指针移向下一个节点
      currentNode = currentNode.next
    }
    result = `${result}null`
    console.log(result)
  }
}


const linkList = new LinkedList()
linkList.insertTail(5)
linkList.insertTail(6)
linkList.insertTail(7)
linkList.insertTail(8)
linkList.insertTail(9)
linkList.insertHead(4)
linkList.insert(0, 2)
linkList.remove(0)
linkList.update(0, 999)
linkList.findAll()


