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

// aspect ratio 16:9 & Background (1920x1080 Pixel Ratio)
canvas.width = 120 * 16;
canvas.height = 67.5 * 9;

const player = new Player();

// Create damageBlock
const damageBlock = new DamageBlock();
var spawnBlock = false

// damage counter
var strike = 0


function animate() {
    window.requestAnimationFrame(animate);
    //Background
    backgroundLevel1.draw();

    //Player moving
    player.velocity.x = 0
    if (key.d.pressed) {
        player.velocity.x = 4
    } else if (key.a.pressed) {
        player.velocity.x = -4
    }
    player.draw()
    player.update()

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
            //collision detected
            // strike = strike++;
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

    if (player.position.x == 1000){
        window.location.href = "roomTwo.html";
    }
}
animate();







