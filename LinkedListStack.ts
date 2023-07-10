/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-10 21:23:44
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-10 22:13:56
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

// 链表表头不算入元素
// 这里的head后续需要改一下命名毕竟这里是栈目前还没看到更好的命名
class LinkedListStack {
    head: LinkedNode
    stackPeek: LinkedNode | null = null
    stackSize: number = 0
    constructor() {
        // NOTE 头节点必然存在
        this.head = new LinkedNode(-999)
        this.stackPeek = this.head
    }
    /**
     * NOTE 判断栈空
     * @returns boolean
     */
    get isEmpty(): boolean {
        const peekNode = this.getPeekNode()
        return this.stackSize === 0 || peekNode === null
    }
    /**
     * NOTE 获取栈顶元素节点
     * 严格意义上这里所获取的应该是整个栈剩余的所有元素节点
     * @returns 
     */
    private getPeekNode() {
        return this.head.next
    }
    /**
     * NOTE 获取栈顶元素
     * @returns 
     */
    getPeek() {
        const peekNode = this.getPeekNode()
        if(!peekNode) throw new Error("栈被清空啦~") 
        return peekNode.val
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
        const peekNode = this.getPeekNode()
        if(peekNode) {
            this.head.next = newNode
            newNode.next = peekNode
        } else {
            this.head.next = newNode
        } 
        this.stackSize++
    }
    /**
     * 出栈并返回栈顶元素
     * @returns peek
     */
    pop() {
        // NOTE 获取栈顶元素节点
        const peekNode = this.getPeekNode()
        // 不为空以及peekNode其实是同一个判断条件
        if(this.isEmpty || !peekNode) return
        const peek = this.getPeek()
        this.head.next = peekNode.next
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
