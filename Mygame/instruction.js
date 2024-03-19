class instruction extends Phaser.Scene {

    constructor ()
    {
        super({ key: "instruction" });
    }

    preload() {
      this.load.image('instruction', 'assets/instruction.png')
  
  }
  
  create () {
      this.m1 = this.add.image(0, 0, 'instruction').setOrigin(0, 0).setScale(1);
     
      console.log("Welcome");
    //   let map = this.make.tilemap({ key: "world" });
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to level1");
      this.scene.start("level1");
      }, this );
  
  }
    
  }