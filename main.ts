input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Korp.change(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Korp.change(LedSpriteProperty.X, 1)
})
let Ball: game.LedSprite = null
let Korp: game.LedSprite = null
Korp = game.createSprite(2, 4)
game.setLife(3)
basic.forever(function () {
    Ball = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        Ball.change(LedSpriteProperty.Y, 1)
        basic.pause(400)
    }
    if (Korp.isTouching(Ball)) {
        game.addScore(1)
        Ball.delete()
    } else {
        Ball.delete()
        game.removeLife(1)
    }
})
