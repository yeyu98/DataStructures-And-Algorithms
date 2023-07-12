/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-11 22:41:00
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-12 21:56:40
 * @Description: 
 */

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

class LinkedListQueue {
    private front: LinkedNode | null 
    private rear: LinkedNode | null
    private queSize: number = 0
    constructor() {
        this.front = null
        this.rear = null
    }
    get isEmpty() {
        return this.front === null || this.rear === null
    }
    get queueSize () {
        return this.queSize
    }
    peek() {
        if(this.isEmpty) {
            throw new Error("队列为空")
        } 
        return this.front!.val
    }
    /**
     * 入队：队尾入队
     * 队空时队首和队尾都指向新节点
     * @param value 
     */
    enQueue(value: number) {
        const newNode = new LinkedNode(value)
        if(this.isEmpty) {
            this.front = this.rear = newNode
        } else {
            this.rear!.next = newNode
            this.rear = newNode
        }
        this.queSize++
    }
    deQueue() {
        if(this.isEmpty) {
            throw new Error("队列为空")
        } 
        this.front = this.front!.next
        this.queSize--
    }
    printQueue() {
        // NOTE 这里的打印队列并不是从队列角度打印的而是运用的链表
        let currentNode = this.front
        let result = ``
        while(currentNode!==null) {
            result = `${result}${currentNode.val} =-= `
            currentNode = currentNode.next
        }
        console.log(`${result}null`)
    }
}

const queue = new LinkedListQueue()

queue.enQueue(0)
queue.enQueue(1)
queue.deQueue()
queue.deQueue()
queue.enQueue(2)
queue.deQueue()

queue.printQueue()


