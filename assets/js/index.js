// Variables
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

// aspect ratio 16:9 & Background
canvas.width = 64 * 16
canvas.height = 64 * 9 

const player = new Player()

// Animation for Player

// let bottom = y + 100
function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = "white" //canvas
    c.fillRect(0, 0, canvas.width, canvas.height);

    player.draw()
    player.update()

   
}

animate();