var totalFruit = function(fruits = []) {
    let bask2 = new Set();
    let maxTrees = -Infinity;
    let l = 0, r = 0;
    while (l < fruits.length && r < fruits.length) {
        if (bask2.size > 1 && !bask2.has(fruits[r])) {
            bask2.clear();
            l++;
            r = l;
        } else {
            maxTrees = Math.max(maxTrees, r - l + 1)
            bask2.add(fruits[r]);
            r++;
        }
    }
    return maxTrees;
}

var totalFruit2 = function(fruits = []) {
    let bask2 = new Set();
    let maxTrees = -Infinity;
    let l = 0, r = 0;
    while (l < fruits.length && r < fruits.length) {
        let len = 1;
        while (l >= 0) {
            if (bask2.size > 1 && !bask2.has(fruits[l])) {
                l = r;
                bask2.clear();
                break;
            }
            bask2.add(fruits[l])
            len++;
            l--;
        }
        while (r < fruits.length) {
            if (bask2.size > 1 && !bask2.has(fruits[r])) {
                l = r;
                bask2.clear();
                break;
            }
            bask2.add(fruits[r])
            len++;
            r++;
        }
        maxTrees = Math.max(maxTrees, len);
    }
    return maxTrees;
}


console.log(totalFruit2([1, 2, 1]));
console.log(totalFruit2([1, 2, 1, 3, 4, 4, 3, 4, 1, 2]));
console.log(totalFruit2([1, 2, 3, 2, 2]));
console.log(totalFruit2([0, 1, 2, 2]));
console.log(totalFruit2([0]));

