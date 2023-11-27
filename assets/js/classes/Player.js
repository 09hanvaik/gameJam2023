class Player extends Sprite {
    // Values and Variables
    constructor({ collisionBlocks = [], imageSrc, frameRate }) { //player spawn position (needs to be fixed to change dynamically per level)
        super({ imageSrc, frameRate })
        this.position = {
            x: 200,
            y: 200,
        }

        this.velocity = {
            x: 0,
            y: 0,
        }
        // Height and width of player (will change during sprite animations are not set in Sprite class)
        this.sides = {
            bottom: this.position.y + this.height,
        }
        this.gravity = 1

        // Collision Blocks
        this.collisionBlocks = collisionBlocks
    }

    // Player Looks (temp)
    // draw() {
    //     c.fillStyle = "red" 
    //     c.fillRect(this.position.x, this.position.y, this.width, this.height);
    // }

    // Gravity & Velocity
    update() {

        this.position.x += this.velocity.x

        this.checkForHorizontalCollisions()
        this.applyGravity()
        this.checkForVerticalCollisions()
    }

    // Player Collisions and Gravity on Player 
    // Horizontal Collisions
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
        }
    }

    // Gravity
    applyGravity() {
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }

    // Vertical Collisions
    checkForVerticalCollisions() {
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

