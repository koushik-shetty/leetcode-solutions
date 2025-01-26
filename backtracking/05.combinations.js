// var combinationSum2 = function(candidates, target) {
//    return helper(candidates, target, [],0); 
// };

var combinations = function(n,k) {
    let q = [{idx: 0, subset:[]}];
    let results = [];
    let target = k;
    let candidates = Array.from({length: n}, (_, i) => i + 1);
    while(q.length > 0) {
        let ql = q.length;
        for (let i = 0; i < ql; i++) {
            let len = q[i].subset.length;
            if(len == target) {
                results.push(q[i].subset);
            }
            if(q[i].idx < candidates.length && len < target) {
                q.push({idx: q[i].idx + 1, subset:[...q[i].subset, candidates[q[i].idx]]});//select candidate
                q.push({ idx: q[i].idx + 1, subset: [...q[i].subset] });//skip candidate
            }
        }
        q.splice(0, ql)
    }
    return results;
};


console.log(combinations(4,2)); // 6
console.log(combinations(1,1)); // 6
