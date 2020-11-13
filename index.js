class PriorityQueue{
    constructor(comparator = (a,b) => a >= b){
      this.heap = [];
      this.comparator = comparator;
    }
  
    getSize(){
      return this.heap.length;
    }
  
    getParentIndex(index){
      return index >>> 1;
    }
  
    getLeftIndex(index){
      return  ( 2 * index +1 ) < this.getSize() ? ( 2 * index +1 ) : false;
    }
  
    getRightIndex(index){
      return  ( 2 * index +2 ) < this.getSize() ? ( 2 * index + 2 ) : false;
    }
  
    isGreater(i, j){
      return this.comparator(this.heap[i][1],this.heap[j][1]);
    }
  
    swap(i,j){
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    enqueue(value , priority){
      if(!priority){
        priority = value;
      }
      this.heap.push([value, priority]);
      this.bubbleUp(this.getSize() - 1);
    }
  
    dequeue(){
      if(this.getSize() > 0){
        this.swap(0, this.getSize() - 1);
        const popped = this.heap.pop();
        this.bubbleDown(0);
        return popped;
      }
    }
  
    bubbleUp(pos){
      while(pos){
        if(pos){
          const parentIndex = this.getParentIndex(pos);
          if(parentIndex !== pos && this.isGreater(pos,parentIndex)){
            this.swap(pos,parentIndex);
            pos = parentIndex;
          }else{
            break;
          }
        }else{
          break;
        }
      }
    }
  
    bubbleDown(pos){
      const leftIndex = this.getLeftIndex(pos);
      const rightIndex = this.getRightIndex(pos);
      let maxIndex = pos;
      if(leftIndex && rightIndex){
        if(this.isGreater(leftIndex,pos) && this.isGreater(leftIndex,rightIndex)){
          maxIndex = leftIndex;
        }else if(this.isGreater(rightIndex,pos) && this.isGreater(rightIndex,leftIndex)){
          maxIndex = rightIndex;
        }
      }else if(leftIndex && this.isGreater(leftIndex, pos)){
        maxIndex = leftIndex;
      }else if(rightIndex && this.isGreater(rightIndex, pos)){
        maxIndex = rightIndex;
      }
      if(maxIndex !== pos){
        this.swap(pos, maxIndex);
        this.bubbleDown(maxIndex);
      }
      
    }
  
    peek(){
      if(this.getSize()){
        return this.heap[0];
      }
    }
  
    getHeap(){
      let resHeap = [];
      const copyHeap = Array.from(this.heap);
      while(this.getSize()> 0){
        resHeap.push(this.dequeue());
      }
      this.heap = copyHeap;
      return resHeap;
    }
  
    getKth(k){
      if(k - 1 < this.getSize()){
        const copyHeap = Array.from(this.heap);
        while(k > 1){
          this.dequeue();
          k--;
      }
      const kth = this.heap[0];
      this.heap = copyHeap;
      return kth;
      }
      
    }
  }
  
//   const priorityQ =  new PriorityQueue();
//   priorityQ.enqueue(10, 100);
//   priorityQ.enqueue(20, 80);
//   priorityQ.enqueue(10, 90);
//   priorityQ.enqueue(40, 20);
//   priorityQ.enqueue(70, 200);
//   priorityQ.dequeue();
//   priorityQ.enqueue(50, 40);
//   const heap = priorityQ.getHeap();
//   console.log("Heap:",heap);
  
//   console.log("kth - 2",priorityQ.getKth(2));




  module.exports.PriorityQueue = PriorityQueue;