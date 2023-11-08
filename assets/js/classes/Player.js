class Player {
    // Values and Variables
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }

        this.velocity = {
            x: 0,
            y: 0
        }
        
        this.gravity = 1
        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height
        }
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
