
class animationScene extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'animationScene' });
    }

    preload() {

        this.load.spritesheet('gen', 'assets/char-blank2-64x64.png',{ frameWidth:64, frameHeight:64 });
       

    } // end of preload //

    create (){

    console.log("animationScene")

    this.anims.create({
        key:'gen-up',
        frames:this.anims.generateFrameNumbers('gen',
        { start:105, end:112 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'gen-left',
        frames:this.anims.generateFrameNumbers('gen',
        { start:118, end:125 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'gen-down',
        frames:this.anims.generateFrameNumbers('gen',
        { start:131, end:138 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'gen-right',
        frames:this.anims.generateFrameNumbers('gen',
        { start:144, end:151 }),
        frameRate:5,
        repeat:-1
    });

    
    this.add.sprite(100, 100, 'gen').play('gen-up').setScale(2)
    this.add.sprite(250, 100, 'gen').play('gen-left').setScale(2)
    this.add.sprite(400, 100, 'gen').play('gen-down').setScale(2)
    this.add.sprite(550, 100, 'gen').play('gen-right').setScale(2)


    } // end of create //

    update () {

    } // end of update // 
}