/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-10 21:23:44
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-12 21:56:19
 * @Description: 
 */

export {}
interface LinkedNode {
    val: number;
    next: LinkedNode | null;
}
  
class LinkedNode {
    constructor(val?: number, next?: LinkedNode | null) {
        this.val = val === undefined ? -999 : val
        this.next = next || null
    }
}

class LinkedListStack {
    stackPeek: LinkedNode | null = null
    stackSize: number = 0
    constructor() {
        this.stackPeek = null
    }
    /**
     * NOTE 判断栈空
     * @returns boolean
     */
    get isEmpty(): boolean {
        return this.stackSize === 0 || this.stackPeek === null
    }
    /**
     * NOTE 获取栈顶元素
     * @returns 
     */
    getPeek() {
        if(!this.stackPeek) throw new Error("栈被清空啦~") 
        return this.stackPeek.val
    }
    /**
     * NOTE 获取栈长度
     * @returns 
     */
    get getSize() {
        return this.stackSize
    }
    /**
     * 入栈
     * @param value 
     */
    push(value: number) {
        const newNode = new LinkedNode(value)
        if(this.stackPeek) {
            newNode.next = this.stackPeek
            // NOTE 修正栈顶节点的位置
            this.stackPeek = newNode
        } else {
            this.stackPeek = newNode
        } 
        this.stackSize++
    }
    /**
     * 出栈并返回栈顶元素
     * @returns peek
     */
    pop() {
        // 不为空以及peekNode其实是同一个判断条件
        if(this.isEmpty) return
        const peek = this.stackPeek?.val
        this.stackPeek = this.stackPeek!.next
        this.stackSize--
        return peek
    }
    clearStack() {
        let result = ``
        while(!this.isEmpty) {
            const peek = this.pop() || ''
            result = `${result}${peek} == `
        }
        result = `${result} null`
        console.log(result)
    }
}

const linkedListStack = new LinkedListStack()

linkedListStack.push(1)
linkedListStack.push(2)
linkedListStack.push(3)
linkedListStack.push(4)
linkedListStack.push(5)

linkedListStack.clearStack()
