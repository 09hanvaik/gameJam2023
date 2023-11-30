// Player Movement

window.addEventListener("keydown", (event) => {
    if (player.preventInput) return
    switch (event.key) {
        // Double jump
        case "w":

        for(let i = 0; i < doors.length; i++){
            const door = doors[i]

            if (player.position.x + player.width <= door.position.x + door.width &&
                player.position.x >= door.position.x &&
                player.position.y + player.height >= door.position.y &&
                player.position.y <= door.position.y + door.height){
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    //player.switchSprite('enterDoor') //We don't have sprite animation for this
                    door.play()
                    setTimeout(function() {
                        if(window.location.href = "index.html"){
                            window.location.href = "roomOne.html";
                        }
                        else if (window.location.href = "roomOne.html"){
                            window.location.href = "roomTwo.html";
                        }
                      }, 1500);
                    
                    return
                }
        }
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