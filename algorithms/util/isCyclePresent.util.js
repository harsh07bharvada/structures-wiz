const isCyclePresentInGraph = (numOfNodes, edges) => {

    // if numOfNodes is not a number and edges is not an array then return
    if(typeof numOfNodes !== 'number' || !Array.isArray(edges))
    return false;

    //If each edges set is not an array then return
    if(!edges.every(v=> Array.isArray(v))){
        return false;
    }
    let state = {}, inDegree = Array(numOfNodes).fill(0), queue = [], order = [];
    
    for(const [inEdge, outEdge] of edges){
        state[outEdge] = state[outEdge] ? [...state[outEdge], inEdge] : [inEdge];
        inDegree[inEdge]++;
    }

    //Adding all the nodes with no incoming edges in to the queue to start traversing
    inDegree.forEach((v,index)=>{
        if(!v)
            queue.push(index);
    });

    //Traversing through the queue and removing when all the childs are traversed and adding when inDegree of child is 0
    while(queue.length){
        const node = queue.shift();
        const childs = state[node] || [];
        for(let child of childs){
            inDegree[child]--;
            if(!inDegree[child]){
                queue.push(child);
            }
        }
        order.push(node);
    }
    return !(order.length === numOfNodes);
}

module.exports.isCyclePresentInGraph = isCyclePresentInGraph;