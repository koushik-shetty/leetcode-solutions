// var combinationSum2 = function(candidates, target) {
//    return helper(candidates, target, [],0); 
// };

var combinations = function(candidates = [], target) {
    let q = [{idx: 0, subset:[]}];
    let results = [];
    candidates.sort();
    let nextIdx = 0;
    while(q.length > 0) {
        let ql = q.length;
        for (let i = 0; i < ql; i++) {
            let sum = q[i].subset.reduce((sum, x) => sum + x, 0);
            if(sum == target) {
                results.push(q[i].subset);
            }
            if(q[i].idx < candidates.length && sum < target) {
                q.push({idx: q[i].idx + 1, subset:[...q[i].subset, candidates[q[i].idx]]});//select candidate
                nextIdx = candidates.findIndex((x, idx) => x != candidates[q[i].idx] && idx > q[i].idx) 
                if(nextIdx != -1){
                    q.push({idx: nextIdx, subset:[...q[i].subset]});//skip candidate
                }
            }
        }
        q.splice(0, ql)
    }
    return results;
};


//map of next index
var helper = function (nums) {
    let curr = 0;
    let nextIdx = {}
    for(let i = 0; i < nums.length;) {
        while(nums[curr] == nums[i]) {
            i++;
        }
        nextIdx[nums[curr]] = i;
        curr = i;
    }
    return nextIdx;
}

// console.log(combinationSum2([2,3,6,7],7)); // 28
// console.log(combinationSum2([2,3,5],8)); // 28
// console.log(combinationSum2([2],1)); // 6
console.log(combinations([10,1,2,7,6,1,5], 8)); // 6
console.log(combinations([2,5,2,1,2], 5)); // 6

// console.log(helper([1,1,2,5,6,7,10]))