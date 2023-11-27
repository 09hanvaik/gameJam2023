// Sprite Class
class Sprite {
    constructor({ position, imageSrc, frameRate = 1, animations }) {
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
            // Player width and Height
            this.width = this.image.width / this.frameRate
            this.height = this.image.height
        }
        this.image.src = imageSrc
        this.loaded = false
        // number of frames to be cropped / number of frames in a spritesheet
        this.frameRate = frameRate
        this.currentFrame = 0
        this.elapsedFrames = 0 // keeps increasing over time
        this.frameBuffer = 2 // buffer so frames repeat // affect how fast animation runs
        
        // animations argument (holds all this information for the sprite)
        this.animations = animations

        //this loop goes through all the different sprite sheets so you can
        //switch between animations for the player using a key to refer to the sheet
        // is stored in index.js
        if (this.animations) {
            for (let key in this.animations) {
                const image = new Image()
                image.src = this.animations[key].imageSrc
                this.animations[key].image = image
            } 

            // checking this worked correctly
            // console.log(this.animations)
        }
    }
    
    draw() {
        if (!this.loaded) return
        // Sprite Animations - Cropbox for Sprite Sheet
        const cropbox = {
            position: {
                x: this.width * this.currentFrame,
                y: 0,
            },
            width: this.width,
            height: this.height,
        }

        // Arguments to crop image (sprite sheet cropped so it can run through images
        // like an animation)
        c.drawImage(
            this.image,
            cropbox.position.x,
            cropbox.position.y,
            cropbox.width,
            cropbox.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )

        this.updateFrames()
    }

    // function to crop spritesheets for animations
    updateFrames() {
        this.elapsedFrames++

        if (this.elapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate - 1) this.currentFrame++
            else this.currentFrame = 0
        }
    }
}