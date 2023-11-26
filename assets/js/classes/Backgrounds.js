// Background

class Background {
    constructor({ position, imageSrc }) {
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
        }
        this.image.src = imageSrc
        this.loaded = false
    }
    draw() {
        if (!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const backgroundLevelMain = new Background ({
        position: {
            x: 0,
            y: 0,
        },
        imageSrc: "assets/img/2_game_background.png"
    })

const backgroundLevel1 = new Background ({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "assets/img/room1.png"
})

const backgroundLevel2 = new Background ({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "assets/img/room2.png"
})

function removeControls() {
    backgroundLevelMain.draw()
}
