class intro1 extends Phaser.Scene {

    constructor ()
    {
        super({ key: "intro1" });
    }

    preload() {
      this.load.image('intro1', 'assets/intro.png')
  
  }
  
  create () {
      this.m1 = this.add.image(0, 0, 'intro1').setOrigin(0, 0).setScale(1);
     
      console.log("Welcome");
    //   let map = this.make.tilemap({ key: "world" });
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to level1");
      this.scene.start("level1");
      }, this );
  
  }
    
  }
