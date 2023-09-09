function Node(char, children = []) {
    this.char = char;
    this.children = children;
}

function shortestUniquePrefix(words) {

    //create a trie
    let tries = {};
    words.forEach(word => {
        let char = word[0];
        tries[char] = buildTrie(tries[char] || new Node(char), word);
    })
    //iterate through each trie
    let out = [];
    Object.values(tries).forEach(trie => {
        out.push(walkTrie(trie))
    })
    return [].concat(...out.map(o => {
        return Object.keys(o).map(w => ({ [w]: o[w] }))
    }))

}

function print(trie) {
    let out = [];
    let q = [trie];
    while (q.length > 0) {
        let ql = q.length;
        let ina = [];
        for (let i = 0; i < ql; i++) {
            out.push(q[i]);

            q.push(...q[i].children)
        }
        q.splice(0, ql);
    }
    return out;
}

function buildTrie(trie, word) {
    let currNode = trie;
    for (let i = 1; i < word.length; i++) {
        let children = currNode.children;
        let matchNode = children.find(child => child.char == word[i]);
        if (!matchNode) {
            matchNode = new Node(word[i]);
            children.push(matchNode)
        }
        currNode = matchNode
    }
    return trie;
}

function walkTrie(trie) {
    let q = [{ word: trie.char, pref: "", node: trie }];
    let out = {};
    while (q.length != 0) {
        let qn = q.length;
        for (let i = qn - 1; i >= 0; i--) {
            let ele = q[i];
            // console.log("ele: ", ele)
            if (ele.node.children.length === 0) {
                //end DFS
                out[ele.word] = ele.pref || trie.char;
            } else if (ele.node.children.length > 1) {
                //with multiple children, the prefix here could be the shortest, so we append the child char and pass on.
                q.push(...ele.node.children.map(c => {
                    return {
                        word: ele.word + c.char,
                        pref: ele.word + c.char,
                        node: c
                    }
                }))
            } else if (ele.node.children.length == 1) {
                //if single child then carry over the prefixes
                q.push(...ele.node.children.map(c => {
                    return {
                        word: ele.word + c.char,
                        pref: ele.pref,
                        node: c
                    }
                }))
            }
        }
        q.splice(0, qn)
    }
    return out
}

console.log("short: ", shortestUniquePrefix(["world", "Uber", "Train", "Trap", "Trip", "Universe"]));
