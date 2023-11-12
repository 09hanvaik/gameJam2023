// Background

class heartIcon {
    constructor({ position, imageSrc }) {
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
        }
        this.image.src = imageSrc
        this.loaded = false
        this.width = 70
        this.height = 70
    }
    draw() {
        if (!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

// three heart icons
const heart1 = new heartIcon({
    position: {
        x: 5,
        y: 10,
    },
    imageSrc: "assets/img/fullHeartIcon.png"
})
const heart2 = new heartIcon({
    position: {
        x: 85,
        y: 10,
    },
    imageSrc: "assets/img/fullHeartIcon.png"
})
const heart3 = new heartIcon({
    position: {
        x: 165,
        y: 10,
    },
    imageSrc: "assets/img/fullHeartIcon.png"
})

// empty hearts to replace them
const emptyHeart1 = new heartIcon({
    position: {
        x: 5,
        y: 10,
    },
    imageSrc: "assets/img/emptyHeartIcon.png"
})
const emptyHeart2 = new heartIcon({
    position: {
        x: 85,
        y: 10,
    },
    imageSrc: "assets/img/emptyHeartIcon.png"
})
const emptyHeart3 = new heartIcon({
    position: {
        x: 165,
        y: 10,
    },
    imageSrc: "assets/img/emptyHeartIcon.png"
})