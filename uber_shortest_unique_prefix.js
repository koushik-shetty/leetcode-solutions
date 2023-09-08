function Node(word, char, children = []) {
    this.word = word;
    this.char = char;
    this.children = children;
}

function shortestUniquePrefix(words) {

    //create a trie
    let tries = {};
    words.forEach(word => {
        let char = word[0];
        tries[char] = buildTrie(tries[char] || new Node(word, char), word);
        console.log(tries, "-------")
        for (let i = 0; i < word.length; i++) {

        }
    })
    //iterate through each trie
    //for each go through the path of the trie
    //at split add the chars till now to the prefix
    //when leaf is hit return the prefix

}
//shortestUniquePrefix(["world"]);
let b = buildTrie(new Node("wonder", "w"), "wonder")
console.log(print(buildTrie(b, "world")))

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
            matchNode = new Node(word, word[i]);
            children.push(matchNode)
        }
        currNode = matchNode
    }
    return trie;
}

function walkTrie(trie) { }
