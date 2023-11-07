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

// aspect ratio 16:9 & Background
canvas.width = 64 * 16
canvas.height = 64 * 9 

const player = new Player()

function animate() {
    window.requestAnimationFrame(animate);
    //Background
    c.fillStyle = "white" 
    c.fillRect(0, 0, canvas.width, canvas.height);

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
