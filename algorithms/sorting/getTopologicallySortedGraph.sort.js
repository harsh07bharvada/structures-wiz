const getTopologicallySortedGraph = (numOfnodes, edges, isDebuggerOn = false) => {
    if (!numOfnodes || !edges || (edges && !Array.isArray(edges))) {
        if (isDebuggerOn) {
            console.log('Parameters invalid!');
        }
        return;
    }
    let state = {}, inDegree = Array(numOfnodes).fill(0), queue = [], order = [];
    for(let [inEdge, outEdge] of edges){
        state[outEdge] = state[outEdge] ? [...state[outEdge], inEdge] : [inEdge];
        inDegree[inEdge]++;
    }
    inDegree.forEach((v, index)=>{
        if(!v)
        queue.push(index);
    });
    if (isDebuggerOn) {
        console.log('Graph:',state);
        console.log('InDegree:',inDegree);
        console.log('Queue:',queue);
    }
    while(queue.length > 0){
        const node = queue.shift();
        const children = state[node] || [];
        
        for(const child of children){
            inDegree[child]--;
            if(!inDegree[child]){
                queue.push(child);
            } 
        }
        order.push(node);
        if (isDebuggerOn) {
            console.log('Order:',order);
        }
    }
    if(order.length !== numOfnodes){
        return [];
    }
    return order;
}


module.exports.getTopologicallySortedGraph = getTopologicallySortedGraph;