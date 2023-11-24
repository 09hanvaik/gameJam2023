class Player extends Sprite {
    // Values and Variables
    constructor({ collisionBlocks = [], imageSrc, frameRate }) {
        super({ imageSrc, frameRate })
        this.position = {
            x: 200,
            y: 200,
        }

        this.velocity = {
            x: 0,
            y: 0
        }
        
        // this.width = 25
        // this.height = 25
        this.sides = {
            bottom: this.position.y + this.height,
        }
        this.gravity = 1
        
        // Collision Blocks
        this.collisionBlocks = collisionBlocks
    }

    // Player Looks
    // draw() {
    //     c.fillStyle = "red" 
    //     c.fillRect(this.position.x, this.position.y, this.width, this.height);
    // }

    // Gravity & Velocity
    update() {
        // this is the Blue Box (to check player collision)
        // c.fillStyle = 'rgba(0, 0, 255, 0.5'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.position.x += this.velocity.x
        
        this.checkForHorizontalCollisions()
        this.applyGravity()
        this.checkForVerticalCollisions()

        // Keeps player above bottom of canvas
        // if (this.sides.bottom + this.velocity.y < canvas.height) {
        //     this.position.y++;
        // } else this.velocity.y = 0
    }      
    
    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
        
        //if a collision exists
        if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
            this.position.x + this.width >= collisionBlock.position.x &&
            this.position.y + this.height >= collisionBlock.position.y &&
            this.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                // collision on x axis (left)
                if (this.velocity.x < 0) {
                    this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                    break
                }

                //collision on x axis (right)
                if (this.velocity.x > 0) {
                    this.position.x = collisionBlock.position.x - this.width - 0.01
                    break
                }
            }
        }}

    applyGravity() {
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }

    checkForVerticalCollisions () {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

        //if a collision exists
        if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
            this.position.x + this.width >= collisionBlock.position.x &&
            this.position.y + this.height >= collisionBlock.position.y &&
            this.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                // collision on y axis (up)
                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                    break
                }
                // collision on y axis (down)
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y - this.height - 0.01
                    break
                }
            }
        }
    }
}

