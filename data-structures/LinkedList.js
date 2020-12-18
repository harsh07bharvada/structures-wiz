class LinkedList {

    /**
     * @What Instantiates the list.
     */
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * @What Creates a new node
     * @Params {value of the node} val 
     */
    createNewNode(val = '') {
        return {
            val,
            next: null,
            prev: null
        };
    }

    /**
     * @What Returns the size of the LinkedList
     */
    getSize() {
        return this.size;
    }

    /**
     * @What Adds a node to the beginning of the list.
     * @Params {value of the node} val 
     */
    addAtHead(val = '') {

        const newNode = this.createNewNode(val);
        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    /**
     * @What Adds a node to the end of the list.
     * @Params {value of the node} val 
     */
    addAtTail(val = '') {
        const newNode = this.createNewNode(val);
        if (this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    /**
     * @What Removes a node from the beginning of the list. 
     */
    removeAtHead() {
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size = this.size ? this.size - 1 : 0;
    }

    /**
     * @What Removes a node from the end of the list. 
     */
    removeAtTail() {
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size = this.size ? this.size - 1 : 0;
    }
    /**
     * @What Sorts the LinkedList using Merge Sort
     */
    sort() {
        let runnerHead = this.head;
        this.head = this.sortUtil(runnerHead);
    }

    /**
     * @What Utility for sorting the LinkedList using Merge Sort
     */
    sortUtil(runnerHead) {
        if (!runnerHead || !runnerHead.next) {
            return runnerHead;
        }

        const [left, right] = this.split(runnerHead);
        const root = this.createNewNode(null);

        return this.merge(root, this.sortUtil(left), this.sortUtil(right));
    }

    /**
     * @What Splits the list into 2 halves to sort individually
     */
    split(node) {
        let slow = node,
            fast = node,
            left = node,
            right = null;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        right = slow.next;
        right.prev = null;
        slow.next = null;
        return [left, right];
    }

    /**
     * @What Merges the two sorted linkedlists in a sorted manner
     */
    merge(root, left, right) {
        let pointer = root;
        while (left || right) {
            if (!left) {
                pointer.next = right;
                right.prev = pointer;
                right = right.next;
            } else if (!right) {
                pointer.next = left;
                left.prev = pointer;
                left = left.next;
            } else {
                if (left.val < right.val) {
                    pointer.next = left;
                    left.prev = pointer;
                    left = left.next;
                } else {
                    pointer.next = right;
                    right.prev = pointer;
                    right = right.next;
                }
            }

            pointer = pointer.next;
            this.tail = pointer;
        }
        return root.next;
    }

    /**
     * @What Prints the LinkedList
     */
    print() {
        let list = [];
        let runner = this.head;
        while (runner) {
            list.push(runner.val);
            runner = runner.next;
        }
        if (this.size)
            console.log(`${list.join(" -> ")} -> NULL`);
        else
            console.log("Linked List is empty")
    }

    /**
     * @What Returns the head
     */
    getHead() {
        return this.head;
    }

    /**
     * @What Returns the tail
     */
    getTail() {
        return this.tail;
    }

    /**
     * @What Returns the list in array format
     */
    getArray() {
        let runner = this.head;
        let resultArray = [];
        while (runner) {
            resultArray.push(runner.val);
            runner = runner.next;
        }
        return resultArray;
    }

    /**
     * @What Clears the LL
     */
    clear() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }


    /**
     * @param function_which_accepts_each_node_and_updates_value
     * @What Map a runner on all values of linked list just like map of arrays
     */
    mapRunner(mapFunction) {
        if (typeof mapFunction === 'function') {
            let runner = this.head;
            while (runner) {
                mapFunction(runner);
                runner = runner.next;
            }
        }
    }
}
module.exports.LinkedList = LinkedList;