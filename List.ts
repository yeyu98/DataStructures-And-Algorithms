/*
 * @Author: lzy-Jerry
 * @Date: 2023-07-12 22:02:24
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-07-12 23:06:30
 * @Description: 
 */
class List<T = number> {
    private size: number = 0
    private capacity: number = 10
    private list: Array<T> = []
    private extendRatio: number = 2 // 为啥都以2的倍速扩容，第一次是10 第二次 20 第三次 40 ... 不会浪费空间吗？
    constructor() {
        this.list = new Array(this.capacity)
    }
    get _size() {
        return this.size
    }
    get _capacity() {
        return this.capacity
    }
    isOverflow(index: number) {
        // NOTE 数组索引从0开始
        return index < 0 || index > this._size - 1
    }
    extendCapcity() {
        // 计算最新容量
        const newCapcity = this.capacity * this.extendRatio
        // 创建新容量数组
        const newEmptyList = new Array(newCapcity)
        // 扩容
        this.list = [...this.list, ...newEmptyList]
        // 更新容量
        this.capacity = newCapcity
    }
    add(value: T) {
        if(this._size === this._capacity) {
            this.extendCapcity()
        }
        this.list[this._size] = value
        this.size++
    }
    remove(index: number) {
        if(this.isOverflow(index)) throw new Error("索引越界了")
        const value = this.list[index]
        for(let i = 0; i < this._size - 1; i++) {
            if(i >= index) {
                this.list[i] = this.list[i+1]
            }
        }
        this.size--
        return value
    }
    update(index: number, value: T) {
        if(this.isOverflow(index)) throw new Error("索引越界了")
        this.list[index] = value
    }
    find(index: number) {
        if(this.isOverflow(index)) throw new Error("索引越界了")
        return this.list[index]
    }
    insert(index: number, value: T) {
        if(this.isOverflow(index)) throw new Error("索引越界了")
        if(this._size === this._capacity) {
            this.extendCapcity()
        }
        for(let i=0; i<this._size - 1; i++) {
            const next = this.list[i+1]
            if(i === index) {
                this.list[i] = value
            }
            if(i > index) {
                this.list[i] = next
            }
        }
    }
    findAll() {
        const array: T[] = []
        for(let i=0; i<this._size; i++) {
            array.push(this.list[i])
        }
        console.log(array)
        console.log("验证扩容", this.list, this.list.length)
    }
}

const list = new List()
list.add(1)
list.add(2)
list.add(3)
list.add(4)

list.insert(2, 33)

// list.remove(3)
list.add(5)
list.add(6)
list.add(7)
list.add(8)
list.add(9)
list.add(10)

list.add(11)

// list.update(10, 12)

list.findAll()