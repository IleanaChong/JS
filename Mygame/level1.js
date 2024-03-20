class level1 extends Phaser.Scene {
  constructor() {
    super({
      key: "level1",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("level1", "assets/level1.tmj");

    // Step 2 : Preload any images here
    this.load.image("groceryimg", "assets/grocery.png");
    this.load.image("wallimg", "assets/wall.png");
    this.load.image("kitchenimg", "assets/kitchen.png");
    
    this.load.spritesheet("gen", "assets/character.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("life", "assets/heart.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("fish", "assets/fish.png", {
       frameWidth: 64,
       frameHeight: 64,
     });

  } // end of preload //

  create() {
    console.log("level1");

    // Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "level1" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let kitchenTiles = map.addTilesetImage("kitchen","kitchenimg")
    let groceryTiles = map.addTilesetImage("grocery","groceryimg")
    let wallTiles = map.addTilesetImage("wall","wallimg")

    // Step 5  create an array of tiles
    let tilesArray = [
        kitchenTiles,
        groceryTiles,
        wallTiles,
    ];

    // Step 6  Load in layers by layers
    this.floorLayer = map.createLayer("floorLayer",tilesArray,0,0)
    this.wallLayer = map.createLayer("wallLayer",tilesArray,0,0)
    this.elementLayer = map.createLayer("elementLayer",tilesArray,0,0)


    //var level2Down = this.input.keyboard.addKey(50);
    //level2Down.on('down', function(){
      //console.log("2 pressed jump to level 2)");
      //this.scene.start("Level2");
      //}, this );

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

   this.anims.create({
     key:'heartAnim',
     frames:this.anims.generateFrameNumbers('heart',
     { start:0, end:2 }),
     frameRate:5,
     repeat:-1
 });

this.anims.create({
       key:'fish',
       frames:this.anims.generateFrameNumbers('fish',
      { start:0, end:2 }),
       frameRate:5,
       repeat:-1
   }); 

// this.anims.create({


    // Add main player here with physics.add.sprite
    // this.player=this.physics.add.sprite(50, 50, 'gen')
    // window.player=this.player

    var start = map.findObject("ObjectLayer", (obj) => obj.name === "start");
    this.player=this.physics.add.sprite(start.x, start.y, 'gen');

    var heart = map.findObject("ObjectLayer", (obj) => obj.name === "heart");
    this.heart=this.physics.add.sprite(heart.x, heart.y, 'life').setScale (0.5)

    var heart2 = map.findObject("ObjectLayer", (obj) => obj.name === "heart2");
    this.heart2=this.physics.add.sprite(heart2.x, heart2.y, 'life').setScale (0.5)

    var heart3 = map.findObject("ObjectLayer", (obj) => obj.name === "heart3");
    this.heart3=this.physics.add.sprite(heart3.x, heart3.y, 'life').setScale (0.5)

    var fish = map.findObject("ObjectLayer", (obj) => obj.name === "fish");
    this.fish=this.physics.add.sprite(fish.x, fish.y, 'fish').setScale (0.5)
    
    var fish2 = map.findObject("ObjectLayer", (obj) => obj.name === "fish2");
    this.fish2=this.physics.add.sprite(fish2.x, fish2.y, 'fish').setScale (0.5)
    
    var fish3 = map.findObject("ObjectLayer", (obj) => obj.name === "fish3");
    this.fish3=this.physics.add.sprite(fish3.x, fish3.y, 'fish').setScale (0.5)

    window.player=this.player

    this.player.body.setSize(this.player.width * 0.4, this.player.height * 0.6)

    // //load objects from the map
    // let heart = map.findObject("objectLayer", (obj) => obj.name === "heart");
 
// // Define your items with objectLayer
//     this.enemy1 = this.physics.add
//       .sprite(heart.x, heart.y, "heart")
//       .play("heartAnim");
 
// When object overlap with player, call the this.collectFire function
this.physics.add.overlap(this.player, this.heart, this.hitheart, null, this);

this.physics.add.overlap(this.player, this.heart2, this.hitheart2, null, this);

this.physics.add.overlap(this.player, this.heart3, this.hitheart3, null, this);

this.physics.add.overlap(this.player, this.fish, this.hitfish, null, this);

this.physics.add.overlap(this.player, this.fish2, this.hitfish, null, this);

this.physics.add.overlap(this.player, this.fish3, this.hitfish, null, this);
    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

      // create() {
    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
    //this.cursors=this.input.keyboard
    // camera follow player
    this.cameras.main.startFollow(this.player);

  // replace with layers loaded above 
  this.wallLayer.setCollisionByExclusion(-1, true);
 
  // enable collision
  this.physics.add.collider(this.player, this.wallLayer);

  // replace with layers loaded above 
  this.elementLayer.setCollisionByExclusion(-1, true);
 
  // enable collision
  this.physics.add.collider(this.player, this.elementLayer);

  } /////////////////// end of create //////////////////////////////

  // var level2Down = this.input.keyboard.addKey(50);

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("gen-left", true); 
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("gen-right", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.anims.play("gen-up", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.anims.play("gen-down", true);
    } else {
      this.player.setVelocity(0);
      this.player.anims.stop();
    }

    if (
      this.player.x > 907 &&
      this.player.y > 340 &&
      this.player.y < 456 &&
      window.fish > 2
    ) { 
      console.log("Door1");
      this.level2();
    }

  } // end of update //

   // this function is called when player touch the heart
   hitheart(player, item) {
    console.log("Hit heart!!!");
    this.cameras.main.shake(200);
    item.disableBody(true, true); // remove heart
    return false;
  }

  hitheart2(player, item) {
    console.log("Hit heart2!!!");
    this.cameras.main.shake(200);
    item.disableBody(true, true); // remove heart
    return false;
  }

  hitheart3(player, item) {
    console.log("Hit heart3!!!");
    this.cameras.main.shake(200);
    item.disableBody(true, true); // remove heart
    return false;
  }

  hitfish(player, item) {
    console.log("Hit fish!!!");
    this.cameras.main.shake(200);
    item.disableBody(true, true); // remove fish
    window.fish++
    return false;
  }

  level2(player, tile) {
    console.log("level2 function");
    this.scene.start("level2",);
  }

}