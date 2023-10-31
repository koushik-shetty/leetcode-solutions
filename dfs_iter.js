var data = {
  1: [2,3],
  2: [4,5],
  3: [6,7],
}

function dfs_iter(tree, root) {
  let stack = [root];
  let out = [];
  while(stack.length > 0) {
    let sn = stack.length;
    let node = stack.pop();
    console.log(node,"--")
    out.push(node);
    if(tree[node] != undefined) {
      stack.push(...(tree[node].reverse()))
    }
  }
  return out;
}

console.log(dfs_iter(data, 1))
