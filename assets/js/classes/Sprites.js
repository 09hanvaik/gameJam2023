// Background

class icon {
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

// three heart icons - empty and full
const heart1 = new icon({
    position: {
        x: 5,
        y: 10,
    },
    height: 70,
    width: 70,
    imageSrc: "assets/img/fullHeartIcon.png",
})
const heart2 = new icon({
    position: {
        x: 85,
        y: 10,
    },
    height: 70,
    width: 70,
    imageSrc: "assets/img/fullHeartIcon.png"
})
const heart3 = new icon({
    position: {
        x: 165,
        y: 10,
    },
    height: 70,
    width: 70,
    imageSrc: "assets/img/fullHeartIcon.png"
})

// empty hearts to replace them
const emptyHeart1 = new icon({
    position: {
        x: 5,
        y: 10,
    },
    height: 70,
    width: 70,
    imageSrc: "assets/img/emptyHeartIcon.png"
})
const emptyHeart2 = new icon({
    position: {
        x: 85,
        y: 10,
    },
    height: 70,
    width: 70,
    imageSrc: "assets/img/emptyHeartIcon.png"
})
const emptyHeart3 = new icon({
    position: {
        x: 165,
        y: 10,
    },
    height: 70,
    width: 70,
    imageSrc: "assets/img/emptyHeartIcon.png"
})
