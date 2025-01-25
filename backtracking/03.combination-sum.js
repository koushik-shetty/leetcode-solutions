// var combinationSum = function(candidates, target) {
//    return helper(candidates, target, [],0); 
// };

var combinationSum = function(candidates, target) {

    let q = [{idx: 0, subset:[]}];
    let results = [];
    while(q.length > 0) {
        let ql = q.length;
        for (let i = 0; i < ql; i++) {
            let sum = q[i].subset.reduce((sum, x) => sum + x, 0);
            if(sum == target) {
                results.push(q[i].subset);
            }
            if(q[i].idx < candidates.length && sum < target) {
                q.push({idx: q[i].idx, subset:[...q[i].subset, candidates[q[i].idx]]});//select candidate
                q.push({idx: q[i].idx + 1, subset:[...q[i].subset]});//skip candidate
            }
        }
        q.splice(0, ql)
    }
    return results;
};

var helper = function (nums, t, subset, idx) {
    let subsetSum = subset.reduce((sum, x) => sum + x, 0);
    if (subsetSum == t) {
        return [subset];
    }
    if(subsetSum > t || idx >= nums.length) {
        return [];
    }
    return [...helper(nums, t, [...subset, nums[idx]], idx), ...helper(nums, t, subset, idx + 1)];
}

console.log(combinationSum([2,3,6,7],7)); // 28
console.log(combinationSum([2,3,5],8)); // 28
console.log(combinationSum([2],1)); // 6
