/*
    * graph: {node: [connected edges]}
    * 
    * */
function topologicalSort(graph = {}) {
    //build a map of all the indegree nodes
    let indegree = Object.keys(graph).reduce((acc, node) => {
        acc[node] = 0
        return acc
    }, {})

    Object.keys(graph).forEach(node => {
        //eahc of the neighbours have a indegree from the current node
        graph[node].forEach(neiNode => {
            indegree[neiNode] += 1
        })
    })
    let zeroIndegreeQ = Object.keys(indegree).filter(inode => {
        if (indegree[inode] === 0) {
            delete indegree[inode]
            return true
        }
        return false
    })
    let out = []
    while (zeroIndegreeQ.length > 0) {
        let qn = zeroIndegreeQ.length
        //for each zero indegree node, reduce the count of all the indegrees of neighbours
        for (let i = 0; i < qn; i++) {
            graph[zeroIndegreeQ[i]].forEach(node => {
                indegree[node] -= 1
            })
        }
        out.push(...zeroIndegreeQ)
        //each iteration remove the nodes with the indirection zero
        //push all the nodes which have now become zero indegree
        zeroIndegreeQ = Object.keys(indegree).filter(inode => {
            if (indegree[inode] === 0) {
                delete indegree[inode]
                return true
            }
            return false
        })
    }

    return out
}

let graph = {
    "one": ["two", "three"],
    "two": ["three", "four", "five"],
    "three": ["five"],
    "four": ["three", "five"],
    "five": ["six"],
    "six": []
}
console.log(topologicalSort(graph))
