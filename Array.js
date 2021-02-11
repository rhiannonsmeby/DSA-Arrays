const memory = require('./memory')

//initializing and pushing
class Array {
    constructor() {
        this.length = 0;
        this._capicity = 0;
        this.ptr = memory.allocate(this.length);
    }
    push(value) {
        if (this.length >= this._capicity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
    
        memory.set(this.ptr + this.length, value);
        this.length++;
    }
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capicity = size;
    }
    //retrieving values
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        //add an index offset and and get the value stored at a memory address
        //O(1)
        return memory.get(this.ptr + index);
    }
    //popping values
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
        //O(1)
    }
    //Inserting values 
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        //shift all of the values after the new value back 1 position
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value);
        this.length++;
    }
    //removing values
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        } 
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
        //best case O(1) worst case O(n)
    }
}
Array.SIZE_RATIO = 3;

module.exports = Array;

