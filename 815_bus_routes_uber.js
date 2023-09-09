/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, src, trg) {
    /*
You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.
* For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.
Return the least number of buses you must take to travel from source to target.


Example 1:
Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
Output: 2
Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
*/
    //n - buses, k - stops/bus
    // [[1,2,7],[1,3,6,7], [3,7,8]] s=1, t=6
    // buses 0..n-1
    //we can have no routes connecting so return -1



    // we need a graph and find the shortest b/w src & dst

    //first get all the buses which have the soruce
    let srcBuses = routes.map((bus, i) => bus.includes(src) && i).filter(x => x);
    //create the graph
    let connectedBuses = createGraph(routes)

    //for each filtered bus do bfs and get the distance to the target
    let distances = []
    for (let i = 0; i < srcBuses.lenght; i++) {
        distances.push(getDistance(connectedBuses, srcBuses[i], trg, routes));
    }
    console.log(srcBuses)
    //filter the distance which are -1, if empty return -1
    let validDistances = distances.filter(d => d > 0);
    if (validDistances.length == 0) {
        return -1;
    }
    //get min of the distances
    return Math.min(...validDistances);
}


function createGraph(routes) {
    // bus0: [b1, b2]
    let connectedBuses = {};
    routes.forEach((bus = [], j) => {
        bus.forEach(stop => {
            return routes.forEach((buses, i) => {
                if (buses.includes(stop) && i != j) {
                    connectedBuses[j] = (connectedBuses[j] || []);
                    connectedBuses[j].push(i)
                }
            })
        });
    })
    return connectedBuses;
}
function getDistance(graph, srcBus, trg, routes = []) {
    let distance = 0;
    let found = false;
    let q = [srcBus];
    while (q.length != 0) {
        let qlen = q.length;
        for (let i = 0; i < qlen; i++) {
            let bus = q[i];
            if (routes[bus].includes(tar)) {
                found = true;
                distance++;
                q = [];
                break;
            }
            distance++;
            q.push(...graph[bus]);
        }
        if (found) {
            return distance;
        }
        //[b2,b3]
        q.splice(0, qn);
    }
    return -1;
}


