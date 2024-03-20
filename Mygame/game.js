
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    
    backgroundColor: '#000000',
    scene: [main, intro1, instruction, level1, level2, level3]

};

let game = new Phaser.Game(config);
window.fish=0
window.carrot=0
window.bro=0
window.heart=0