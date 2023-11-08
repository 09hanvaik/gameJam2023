// Variables
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
const key = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    }
}

// aspect ratio 16:9 & Background (1600x900 Pixel Ratio)
canvas.width = 100 * 16
canvas.height = 100 * 9

const player = new Player()

function animate() {
    window.requestAnimationFrame(animate);
    //Background
    backgroundLevel1.draw()

    //Player moving
    player.velocity.x = 0
    if (key.d.pressed) {
        player.velocity.x = 4
    } else if (key.a.pressed) {
        player.velocity.x = -4
    }
    player.draw()
    player.update()   
}

animate();
