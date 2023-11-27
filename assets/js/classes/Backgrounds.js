// Background Class 

// had to comment this out as two backgrounds are declared, one in index.js and one here. 
// as i currently can't work out how to fix this, commented this out for now

// class Background {
//     constructor({ position, imageSrc }) {
//         this.position = position
//         this.image = new Image()
//         this.image.onload = () => {
//             this.loaded = true
//         }
//         this.image.src = imageSrc
//         this.loaded = false
//     }
//     draw() {
//         if (!this.loaded) return
//         c.drawImage(this.image, this.position.x, this.position.y)
//     }
// }

// // this code does not work
// const backgroundLevelMain = new Background ({
//         position: {
//             x: 0,
//             y: 0,
//         },
//         imageSrc: "assets/img/mainRoom.png"
//     })

// const backgroundLevel1 = new Background ({
//     position: {
//         x: 0,
//         y: 0,
//     },
//     imageSrc: "assets/img/room1.png"
// })

// const backgroundLevel2 = new Background ({
//     position: {
//         x: 0,
//         y: 0,
//     },
//     imageSrc: "assets/img/room2.png"
// })

// function removeControls() {
//     backgroundLevelMain.draw()
// }
// 
