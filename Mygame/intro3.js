class intro3 extends Phaser.Scene {

  constructor ()
  {
      super({ key: 'intro3' });
  }
  
  create () {

      console.log("intro3")
      this.add.text(10,500, 'Animation labs, press spacebar to continue', 
          { font: '24px Courier', fill: '#ffffff' });

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function(){
          this.scene.start("level1");
          }, this );

  }

}