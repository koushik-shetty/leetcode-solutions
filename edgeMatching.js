function solvePuzzle(pieces) {
    let q = [{ selected: [], piece: 0 }];
    while (q.length > 0) {
        let qn = q.length;
        for (let item = 0; item < qn; item++) {
            for (let side = 0; side < qn; side++) {
                let qItem = q[item];
                let piece = pieces[qItem.piece];
                if (piece >= 9) continue;
                if (checkMatch(qItem.selected, rotate(piece, side), qItem.selected.length)) {
                    q.push({ selected: [...qItem.selected, rotate(piece, side)], piece: piece + 1 })
                }
            }
        }
    }
    for (let i = 0; i < pieces.length; i++) {//for each peice, it may exit early if found

        let piece = pieces[i];

    }
}

function eachMatch(selected, pieces) {
    if (pieces.length <= 0) return selected;
    console.log(pieces);
    let piece = pieces[0];
    for (let side = 0; side < 4; side++) {
        if (checkMatch(selected, rotate(piece, side), selected.length)) {
            //even the other pieces matched
            let isMatched = eachMatch([...selected, rotate(piece, side)], pieces.slice(1));
            if (isMatched.length > 0) {
                return isMatched;
            }
        }
    }
    return [];
}


const TOP = 0
const BOT = 2
const LEFT = 3
const RIGHT = 1

function checkMatch(selected, piece, loc) {
    let [a, b] = [true, true];
    if ((loc - 3) >= 0) a = selected[loc - 3][BOT] === piece[TOP]
    if ((loc - 1) >= 0) b = selected[loc - 1][RIGHT] === piece[LEFT]
    return a && b;
}

function rotate(piece, side) {
    return piece.splice(side).concat(...piece.slice(0, side));
}


console.log(solvePuzzle([
    ["a", "b", "c", "d"],
    ["e", "f", "g", "b"],
    ["h", "i", "j", "f"],
    ["c", "l", "m", "k"],
    ["g", "n", "o", "l"],
    ["j", "p", "q", "n"],
    ["m", "r", "s", "t"],
    ["o", "u", "v", "r"],
    ["q", "w", "x", "u"]
]))
