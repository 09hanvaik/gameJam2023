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

// aspect ratio 16:9 & Background (1024x579 Pixel Ratio) // please do not change this for now
canvas.width = 64 * 16;
canvas.height = 64 * 9;

// collision blocks
const parsedCollisions = collisionsLevel2.parse2D() //set to the singular room its on currently // info from utils.js
const collisionBlocks = parsedCollisions.createObjectsFrom2D()

// Background
// Level Images (for now)
const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "assets/img/room2.png" // current background image is set here
})

// Player Created & Animations for that Player Stored
const player = new Player({
    collisionBlocks,
    imageSrc: "assets/img/sprites_animations/girlIdleRight.png",
    frameRate: 7,
    animations: {
        idleRight: {
            frameRate: 7,
            frameBuffer: 2,
            loop: true,
            imageSrc: "assets/img/sprites_animations/girlIdleRight.png",
        },
        idleLeft: {
            frameRate: 7,
            frameBuffer: 2,
            loop: true,
            imageSrc: "assets/img/sprites_animations/girlIdleLeft.png",
        },
        runRight: {
            frameRate: 14,
            frameBuffer: 3,
            loop: true,
            imageSrc: "assets/img/sprites_animations/girlRunRight.png",
        },
        runLeft: {
            frameRate: 14,
            frameBuffer: 3,
            loop: true,
            imageSrc: "assets/img/sprites_animations/girlRunLeft.png",
        },
        jumpRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: "assets/img/sprites_animations/girlJumpRight.png",
        },
        // not sure a jump left is possible to code, leaving it out for now
        // jumpLeft: {
        //     frameRate: 8,
        //     frameBuffer: 2,
        //     loop: true,
        //     imageSrc: "assets/img/sprites_animations/girlJumpLeft.png",
        // },
    },
})

// Create damageBlock
const damageBlock = new DamageBlock();
var spawnBlock = false

// damage counter
var strike = 0


function animate() {
    window.requestAnimationFrame(animate);
    //Background
    backgroundLevel1.draw()
    //Collision Blocks for Level
    collisionBlocks.forEach(CollisionBlock => {
        CollisionBlock.draw()
    })

    //Player moving // code for spite switching (run/idle/jump)
    // this might need some adjustment - lower number is slower player moves right/left
    player.velocity.x = 0
    if (key.d.pressed) {
        player.switchSprite('runRight')
        player.velocity.x = 2.5
        player.lastDirection = 'right'
    } else if (key.a.pressed) {
        player.switchSprite('runLeft')
        player.velocity.x = -2.5
        player.lastDirection = 'left'
    } else if (key.w.pressed) {
        player.switchSprite('jumpRight') // not actually sure jump animation is working - very hard to see
        player.lastDirection = 'right'
    } else {
        if (player.lastDirection === 'left') player.switchSprite('idleLeft')
        else player.switchSprite('idleRight')
    }

    player.draw()
    player.update()
}
// when player goes under spawn point damageBlock falls
// if timer is less than AMOUNT then spawning function happens 
if (player.position.x == 300) {
    spawnBlock = true;

    //-----TEST---- damage dealt when player passes under spawn point
    if (strike < 3) {
        strike++
    } else {
        strike = 0
    }
}
if (spawnBlock === true) {
    damageBlock.draw();
    damageBlock.update();
}

// ---------- Collisions -------------
// !!! NOT WORKING !!! Does not cause errors, for now illustrates concept, replace later

// player and damage box overlap
// if (player.position.x < damageBlock.position.x + damageBlock.width &&
//     player.position.x + player.width > damageBlock.position.x &&
//     player.position.y < damageBlock.position.y + damageBlock.height &&
//     player.position.y + player.height > damageBlock.y) {
//         collision detected
//         strike = strike++;
// } else {
//     // no collision
// }

//----------- Health System ----------
// heart icons 
heart1.draw();
heart2.draw();
heart3.draw();
// if player has taken damage, a heart is removed
if (strike === 1) {
    console.log(strike)
    emptyHeart3.draw()
} else if (strike === 2) {
    emptyHeart3.draw()
    emptyHeart2.draw()
} else if (strike === 3) {
    emptyHeart1.draw()
    emptyHeart2.draw()
    emptyHeart3.draw()
    // game over
}

// Need to move this somewhere else but placeholder for now

// creates an error when animating sprites so commenting out for now, not sure what
// is happening with this code 
//     controlsDisplay.draw()


//      if (player.position.x == 1000){
//         window.location.href = "roomOne.html";
//     }
animate();







