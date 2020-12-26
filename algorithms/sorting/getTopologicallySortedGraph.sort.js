const getTopologicallySortedGraph = (numOfnodes, edges, isDebuggerOn = false) => {
    if (!numOfnodes || !edges || (edges && !Array.isArray(edges))) {
        if (isDebuggerOn) {
            console.log('Parameters invalid!');
        }
        return;
    }

    let queue = [],
        order = [];
    const state = {},
        inDegree = Array(numOfnodes).fill(0);
    for (const [outEdge, inEdge] of edges) {
        state[outEdge] = state[outEdge] ? [...state[outEdge], inEdge] : [inEdge];
        inDegree[inEdge]++;
    }
    if (isDebuggerOn) {
        console.log('Adjacency Matrix:', state);
        console.log('inDegree State:', inDegree);
    }
    inDegree.forEach((v, index) => {
        if (!v) {
            queue.push(index);
        }
    });
    if (!queue.length)
        return queue;

    if (isDebuggerOn) {
        console.log('Queue:',queue);
    }
    while (queue.length > 0) {
        const node = queue.shift();
        const childs = state[node] || [];
        for (const child of childs) {
            inDegree[child]--;
            if (!inDegree[child]) {
                queue.push(child);
            }
        }
        order.push(node);
        if(isDebuggerOn){
            console.log('Current Queue State:',queue);
            console.log('Reverse Order State:',order);
            console.log('----------------------------------')
        }
    }
    order.reverse()
    if (order.length !== numOfnodes) {
        return;
    }

    return order;
}


module.exports.getTopologicallySortedGraph = getTopologicallySortedGraph;