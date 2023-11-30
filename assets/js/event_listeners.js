// Player Movement

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        // Double jump
        case " ":
            if (player.velocity.y === 0) {
                // canDoubleJump = true
                player.velocity.y = -10
            // } else {
            //     if (canDoubleJump == true) {
            //         canDoubleJump = false
            //         player.velocity.y = -9
            //     }
            }
            break;

        // Lefta
        case "a":
            key.a.pressed = true
            break

        // Right
        case "d":
            key.d.pressed = true
            break
    

        // Inside
        case "w":
            key.w.pressed = true
            break       
    }
})

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        // Left
        case "a":
            key.a.pressed = false
            break

        // Right
        case "d":
            key.d.pressed = false
            break
        
        // Inside
        case "w":
            key.w.pressed = false
            break 
    }
})