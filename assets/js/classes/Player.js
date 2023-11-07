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

    // Movement
    update() {
        this.position.y += this.velocity.y

        // Keeps player above bottom of canvas
        if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravity
            this.position.y++;
            this.sides.bottom = this.position.y + this.height
        } else this.velocity.y = 0
    }
}