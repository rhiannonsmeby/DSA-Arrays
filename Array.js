const Memory = require('./memory')

//create a new instance of the Memory class
const memory = new Memory();
//initializing and pushing
class Array {
    constructor() {
        this.length = 0;
        this._capicity = 0;
        this.ptr = memory.allocate(this.length);
    }
    push(value) {
        if (this.length >= this._capicity) {
            //resize the array so there is space for the new item
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        //set the memory this.ptr + length to be equal to the value
        memory.set(this.ptr + this.length, value);
        this.length++;
    }
    //have to copy each item of data to a new box each time you resize the array
    //copies any existing values from the old to new memory and frees the old memory
    //O(n)
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

//2. add an item to the array
function main() {
    Array.SIZE_RATIO = 3;
    //create and instance of the array class
    let arr = new Array();

    //add an item to the array
    arr.push(3);
    //what is the length, capacity and memory address of your array?
    console.log(arr, 'Item 3'); //Length: 1, Capacity: 3, Memory address: 0

    arr.push(5);
    console.log(arr, 'Item 5'); //Length: 2, Capacity: 3, Memory address: 0

    arr.push(15);
    console.log(arr, 'Item 15'); //Length 3, Capacity: 3, Memory address: 0
    arr.push(19);
    console.log(arr, 'Item 19'); //Length: 4, Capacity: 12, Memory address: 3
    arr.push(45);
    console.log(arr, 'Item 45'); //Length: 5, Capacity: 12, Memory address: 3
    arr.push(10);
    console.log(arr, 'Item 10'); //Length: 6, Capacity: 12, Mamory address: 3
    //3. Exploring pop methods
    arr.pop();
    console.log(arr, 'pop1'); //length: 5, capacity: 12, ptr: 3
    arr.pop();
    console.log(arr, 'pop2'); //length 4, ...
    arr.pop();
    console.log(arr, 'pop3'); //length 3, ...
    //
    //4. Understanding more about how arrays work
    //print the first item in the array
    console.log(arr.get(0)); //item 3
    //empty the array and add just 1 item
    while (arr.length > 0) {
        arr.pop();
    }
    arr.push('tauhida')
    console.log(arr.get(0)); // NaN because memory.set is looking for a number not
    //a string
    //_resize resizes the array so there is available space for the new item
}

main()