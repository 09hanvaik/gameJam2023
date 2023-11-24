// Background

class controls {
    constructor({ position, imageSrc, height, width }) {
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
        }
        this.image.src = imageSrc
        this.loaded = false
        this.width = width
        this.height = height
    }
    draw() {
        if (!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

// Controls
const controlsDisplay = new controls({
    position: {
        x: 512,
        y: 288,
    },
    height: 300,
    width: 300,
    imageSrc: "assets/img/controls.png",
})