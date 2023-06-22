function movePair(node) {
    const moves = [
        [node[0] + 2, node[1] - 1],
        [node[0] + 2, node[1] + 1],
        [node[0] - 2, node[1] - 1],
        [node[0] - 2, node[1] + 1],
        [node[0] - 1, node[1] - 2],
        [node[0] - 1, node[1] + 2],
        [node[0] + 1, node[1] - 2],
        [node[0] + 1, node[1] + 2]
    ];
    
    const validMoves = moves.filter(move => {
        return move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8
    })
    return validMoves
}

//console.log(movePair([3,3]))

function knightMoves(node, target) {
    if (node[0] > 7 || target[0] > 7 || node[0] < 0 || target[1] < 0) {
        return "Values are not valid, the values should be > 8 and >= 0";
    }
    root = Node(node, [node])
    let q = [root]
    let visited = []
    visited.push(node.toString())
    
    while(q.length > 0) {
        current = q.shift()
        if(current.pos[0] === target[0] && current.pos[1] === target[1]) {
            return current.path
        }
        let moves = movePair(current.pos)
        for(let move of moves) {
            let newPos = move
            let newPath = current.path.concat([newPos])
            
            if(!visited.includes(newPos)) {
                let newNode = Node(newPos,newPath)
                q.push(newNode)
                visited.push(newPos)
            }
        }
    }
}

function Node(pos,path) {
    return {
        pos,
        path
    };
}
console.log(knightMoves([4,5], [7,7]))