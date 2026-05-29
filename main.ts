scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    game.gameOver(true)
})
let mySprite = sprites.create(img`
    . . . 2 2 . . . 
    . . . 2 2 . . . 
    . . . 2 2 . . . 
    2 2 2 2 2 2 2 2 
    2 . 2 2 2 2 . 2 
    2 . 2 2 2 2 . 2 
    . . 2 . . 2 . . 
    . . 2 . . 2 . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . 2 2 . . . 
    2 . . 2 2 . . . 
    2 . . 2 2 . . . 
    2 2 2 2 2 2 2 2 
    . . 2 2 2 2 . 2 
    . . 2 2 2 2 . 2 
    . . 2 . . 2 . . 
    . . 2 . . 2 . . 
    `,img`
    . . . 2 2 . . . 
    . . . 2 2 . . 2 
    . . . 2 2 . . 2 
    2 2 2 2 2 2 2 2 
    2 . 2 2 2 2 . . 
    2 . 2 2 2 2 . . 
    . . . 2 . . 2 . 
    . . . 2 . . 2 . 
    `],
200,
true
)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairNorth)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
