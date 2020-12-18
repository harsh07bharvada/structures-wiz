class Stack {

    /**
     *  @Params - Starting Stack Values, isUnique (true if one needs unique elements in the stack) 
     *  @What - Instantiate the stack
     */
    constructor(receivedList = [], isUnique = false) {

        this.isUnique = isUnique;
        this.list = isUnique ? [...new Set(receivedList)] : receivedList;
    }

    /**
     *  @Params - New Value to be inserted
     *  @What - Inserts the new value in the stack
     */
    push(value) {
        if (value) {
            this.list[this.list.length] = value;
            if (this.isUnique) {
                this.removeDuplicates();
            }
        }
    }

    /**
     *  @Params - List of values of to pushed at once
     *  @What - Pushes the list of values at once
     */
    pushAll(...values) {
        if (values) {
            this.list = Array.isArray(values) ? this.list.concat(...values) : this.list.concat(values);
            if (this.isUnique) {
                this.removeDuplicates();
            }
        }
    }

    /**
     *  @What - Pops the last value out of the stack
     */
    pop() {

        if (this.list.length) {
            return this.list.pop();
        }
    }

    /**
     *  @What - Returns the Top element of the stack
     */
    peek() {
        return this.list[this.list.length - 1];
    }

    /**
     *  @What - Removes Duplicates from the current stack
     */
    removeDuplicates() {
        this.list = [...new Set(this.list)];

    }

    /**
     *  @What - Clears the stack
     */
    clear() {
        this.list = [];
    }

    /**
     *  @What - Returns the size of the stack
     */
    getSize() {
        return this.list.length;
    }

    /**
     *  @What - Prints the current state of stack
     */
    print() {
        console.log(this.list);
    }
}

module.exports.Stack = Stack;