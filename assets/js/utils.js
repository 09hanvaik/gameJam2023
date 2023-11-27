//Parsing Through Collision Block array to find where the blocks are
Array.prototype.parse2D = function () {
    const rows = []
    for (let i = 0; i < this.length; i += 64) {
        rows.push(this.slice(i, i + 64))
    }

    return rows
}

//Looping through collision block array
Array.prototype.createObjectsFrom2D = function () {
    const objects = []
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol === 26) { // 26 is the number assigned to the collision block in the arry in utils.js
                // push a new collision into collisionblocks array
                objects.push(
                    new CollisionBlock({
                        position: {
                            x: x * 16, // all blocks are 16 x 16 pixels wide
                            y: y * 16,
                        },
                    }))
            }
        })
    })

    return objects
}