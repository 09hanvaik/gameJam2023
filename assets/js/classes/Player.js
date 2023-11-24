class Player {
    // Values and Variables
    constructor({
      collisionBlocks = []  
    }) {
        this.position = {
            x: 100,
            y: 100,
        }

        this.velocity = {
            x: 0,
            y: 0
        }
        
        this.gravity = 1
        this.width = 16
        this.height = 26
        this.sides = {
            bottom: this.position.y + this.height,
        }

        this.collisionBlocks = collisionBlocks
        console.log(this.collisionBlocks)
    }

    // Player Looks
    draw() {
        c.fillStyle = "red" 
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    // Gravity & Velocity
    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height

        // Keeps player above bottom of canvas
        if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravity
            this.position.y++;
            
        } else this.velocity.y = 0
    }
}

