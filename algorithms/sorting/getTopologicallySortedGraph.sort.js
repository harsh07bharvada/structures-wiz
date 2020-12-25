const getTopologicallySortedGraph = (numOfnodes, edges) => {
    if (!numOfnodes || !edges || (edges && !Array.isArray(edges)))
        return;

    let queue = [], order = [];
    const state = {}, inDegree = Array(numOfnodes).fill(0);
    for (const [outEdge, inEdge] of edges) {
        state[outEdge] = state[outEdge] ? [...state[outEdge], inEdge] : [inEdge];
        inDegree[inEdge]++;
    }
    inDegree.forEach((v, index) => {
        if (!v) {
            queue.push(index);
        }
    });
    if(!queue.length)
        return queue;


    while (queue.length > 0) {
        const node = queue.shift();
        const childs = state[node] || [];
        for(const child of childs){
            inDegree[child]--;
            if(!inDegree[child]){
                queue.push(child);
            }
        }
        order.push(node);
    }
    order.reverse()
    if(order.length !== numOfnodes){
        return;
    }
    
    return order;
}


module.exports.getTopologicallySortedGraph = getTopologicallySortedGraph;