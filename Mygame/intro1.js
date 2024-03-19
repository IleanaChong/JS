class intro1 extends Phaser.Scene {

  constructor ()
  {
      super({ key: 'intro1' });
  }
  
  create () {

      console.log("intro1")
      this.add.text(10,500, 'Animation labs, press spacebar to continue', 
          { font: '24px Courier', fill: '#ffffff' });

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function(){
          this.scene.start("intro2");
          }, this );

  }

}