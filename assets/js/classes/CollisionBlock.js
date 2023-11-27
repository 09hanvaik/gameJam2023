// Collision Blocks
class CollisionBlock {
    constructor({position}) {
        this.position = position
        this.width = 16
        this.height = 16 // blocks are 16 x 16 pixels
    }

    draw() { // this is show collision blocks on screen (temporary to check if collision block code works)
    c.fillStyle = 'rgba(255, 0, 0, 0.5)'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}