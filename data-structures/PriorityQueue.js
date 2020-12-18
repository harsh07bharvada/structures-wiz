class PriorityQueue {

    /**
     *  @Params - Comparator (If not passed then create Max Heap)
     *  @What - Instantiate max or min heap 
     */
    constructor(comparator = (a, b) => a >= b) {
        this.heap = [];
        this.height = -1;
        this.comparator = comparator;
    }

    /**
     * @What - Gets Priority Queue size
     */
    getSize() {
        return this.heap.length;
    }

    /**
     * @Param - Index for which parent is to be found
     * @What - Gets Parent Index 
     */
    getParentIndex(index) {
        return index >>> 1;
    }

    /**
     * @Param - Index for which Left Child Node Index is to be found
     * @What - Gets Left Child Index 
     */
    getLeftIndex(index) {
        return (2 * index + 1) < this.getSize() ? (2 * index + 1) : false;
    }

    /**
     * @Param - Index for which Right Child Node Index is to be found
     * @What - Gets Right Child Index 
     */
    getRightIndex(index) {
        return (2 * index + 2) < this.getSize() ? (2 * index + 2) : false;
    }

    /**
     * @Param - Index of two nodes
     * @What - returns the result from the comparision 
     */
    isGreater(i, j) {
        return this.comparator(this.heap[i][1], this.heap[j][1]);
    }

    /**
     * @Param - Index of two nodes to be swapped
     * @What - Swap two nodes
     */
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    /**
     * @Param - ( Value to be inserted , Priority of the Value )
     * @What - Inserts the new Value based on Priority (If Priority not 
     * received then Priority = Value ) 
     */
    enqueue(value, priority) {
        if (!priority) {
            priority = value;
        }
        this.heap.push([value, priority]);
        this.bubbleUp(this.getSize() - 1);
        this.setHeight();
    }

    /**
     * @What - Removes & returns the root
     */
    dequeue() {
        if (this.getSize() > 0) {
            this.swap(0, this.getSize() - 1);
            const popped = this.heap.pop();
            this.bubbleDown(0);
            this.setHeight;
            return popped;
        }
    }

    /**
     * @Param - Index of the node to start bubbling up
     * @What - Bubble up the index to balance the Heap 
     */
    bubbleUp(pos) {
        while (pos) {
            if (pos) {
                const parentIndex = this.getParentIndex(pos);
                if (parentIndex !== pos && this.isGreater(pos, parentIndex)) {
                    this.swap(pos, parentIndex);
                    pos = parentIndex;
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    }

    /**
     * @Param - Index of the node to start bubbling down
     * @What - Bubble down the index to balance the Heap 
     */
    bubbleDown(pos) {
        const leftIndex = this.getLeftIndex(pos);
        const rightIndex = this.getRightIndex(pos);
        let maxIndex = pos;
        if (leftIndex && rightIndex) {
            if (this.isGreater(leftIndex, pos) && this.isGreater(leftIndex, rightIndex)) {
                maxIndex = leftIndex;
            } else if (this.isGreater(rightIndex, pos) && this.isGreater(rightIndex, leftIndex)) {
                maxIndex = rightIndex;
            }
        } else if (leftIndex && this.isGreater(leftIndex, pos)) {
            maxIndex = leftIndex;
        } else if (rightIndex && this.isGreater(rightIndex, pos)) {
            maxIndex = rightIndex;
        }
        if (maxIndex !== pos) {
            this.swap(pos, maxIndex);
            this.bubbleDown(maxIndex);
        }
    }

    /**
     * @What - Returns the root of the Heap 
     */
    peek() {
        if (this.getSize()) {
            return this.heap[0];
        }
    }

    /**
     * @What - Returns Queue in a sorted order
     */
    getSortedHeap() {
        let resHeap = [];
        const copyHeap = Array.from(this.heap);
        while (this.getSize() > 0) {
            resHeap.push(this.dequeue());
        }
        this.heap = copyHeap;
        return resHeap;
    }

    /**
     * @Param - kth Max or Min element in the Sorted Heap
     * @What - Returns kth Min or Max element in the Sorted Heap based on MaxHeap or Min Heap 
     */
    getKth(k) {
        if (k - 1 < this.getSize()) {
            const copyHeap = Array.from(this.heap);
            while (k > 1) {
                this.dequeue();
                k--;
            }
            const kth = this.heap[0];
            this.heap = copyHeap;
            return kth;
        }

    }

    /**
     * @What - Print the current Heap 
     */
    print() {
        console.log(this.heap)
    }

    /**
     * @What - Print the Heap in Sorted Order 
     */
    printSortedHeap() {
        const heap = this.getSortedHeap();
        console.log(heap)
    }

    /**
     * @What - Update the Height of the Heap 
     */
    setHeight() {
        this.height = Math.ceil(Math.log2(this.getSize() + 1)) - 1;
    }

    /**
     * @What - Returns the Height of the Heap 
     */
    getHeight() {
        return this.height;
    }

    /**
     * @Param - Index
     * @What - Checks if this index is a Leaf Node or not 
     */
    isLeafNode(index) {
        if (!this.heap[2 * index] && !this.heap[2 * index + 1])
            return true;
        return false;
    }

    /**
     * @What - Returns the list of Leaf Nodes of the Heap
     */
    getLeafNodes() {
        let pointer = this.getSize() - 1;
        while (pointer > 0) {
            if (!this.isLeafNode(pointer)) {
                return this.heap.slice(pointer);
            }
            pointer--;
        }
    }

    /**
     * @What - Clears the PQ
     */
    clear() {
        this.heap = [];
        this.height = -1;
    }

    /**
     * @What - Returns heap
     */
    getHeap() {
        return this.heap;
    }
}


module.exports.PriorityQueue = PriorityQueue;