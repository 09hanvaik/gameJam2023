//Parsing Through Collision Block array to find where the blocks are
Array.prototype.parse2D = function() {
    const rows = []
    for (let i = 0; i < this. length; i += 64) {
        rows.push(this.slice(i, i + 64))
    }
    
    return rows 
    }
    
//Looping through collision block array
    Array.prototype.createObjectsFrom2D = function () {
        const objects = []
        this.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol === 576) {
                    // push a new collision into collisionblocks array
                    objects.push(
                        new CollisionBlock({
                            position: {
                                x: x * 16,
                                y: y * 16,
                            },
                    }))
                }
            })
        })

        return objects
    }