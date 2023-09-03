/*
    * graph: {node: [connected edges]}
    * 
    * */
function topologicalSort(graph = {}) {
    //build a map of all the indegree nodes
    let indegree = Object.keys(graph).reduce((acc, c) => {

    }, {})
    //iterate till all the nodes are added to the output
    //each iteration remove the nodes with the indirection zero
    //update the other nodes after removal/decrease the count

}
