class main extends Phaser.Scene {

  constructor ()
  {
      super({ key: "main" });
  }

  preload() {
    this.load.image('main', 'assets/main.png')

}

create () {
    this.m1 = this.add.image(0, 0, 'main').setOrigin(0, 0).setScale(1);
   
    console.log("Welcome");
  //   let map = this.make.tilemap({ key: "world" });

    var spaceDown = this.input.keyboard.addKey('SPACE');
    
    spaceDown.on('down', function(){
    console.log("Spacebar pressed, go to intro1");
    this.scene.start("intro1");
    }, this );

}
  
}
