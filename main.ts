input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    Korp.change(LedSpriteProperty.X, -1)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    Korp.change(LedSpriteProperty.X, 1)
})
let sprite = 0
let Ball: game.LedSprite = null
let Game = 0
let Musik = 0
let Game_20 = 0
let Korp: game.LedSprite = null
let Lobbymusik = 1
let Menü = 1
game.setLife(3)
game.setScore(1)
basic.forever(function () {
    if (Game_20 == 2) {
        Korp = game.createSprite(2, 4)
    }
})
basic.forever(function () {
    if (Menü == 1) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            `)
        if (input.buttonIsPressed(Button.A)) {
            Menü = 2
        }
        if (input.pinIsPressed(TouchPin.P1)) {
            Musik = 1
            Lobbymusik = 0
        }
    }
})
basic.forever(function () {
    if (Game == 2) {
        Ball = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index < 4; index++) {
            Ball.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        if (Korp.isTouching(Ball)) {
            game.addScore(1)
            Ball.delete()
        } else {
            Ball.delete()
            game.removeLife(1)
        }
        sprite += 0
    }
})
basic.forever(function () {
    if (Menü == 3) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        if (input.buttonIsPressed(Button.B)) {
            Menü = 2
        }
        if (input.pinIsPressed(TouchPin.P1)) {
            Lobbymusik = 0
            Musik = 3
        }
        if (input.buttonIsPressed(Button.A)) {
            Menü = 4
        }
    }
})
basic.forever(function () {
    if (Menü == 2) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
        if (input.buttonIsPressed(Button.A)) {
            Menü = 3
        }
        if (input.buttonIsPressed(Button.B)) {
            Menü = 1
        }
        if (input.pinIsPressed(TouchPin.P1)) {
            Lobbymusik = 0
            Musik = 2
        }
    }
})
basic.forever(function () {
    if (Menü == 4) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # . . . .
            # . . # .
            . # # . .
            `)
        if (input.buttonIsPressed(Button.B)) {
            Menü = 3
        }
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("Kolja")
        }
    }
})
basic.forever(function () {
    if (Musik == 2) {
        music.playMelody("C D E F D E F C5 ", 200)
        music.playMelody("C F E D E F E C ", 200)
        if (game.score() == 50) {
            music.playMelody("C D C5 D C5 D C5 D ", 500)
        }
    }
})
basic.forever(function () {
    if (Musik == 1) {
        music.playMelody("C5 F G A F G A C ", 140)
        music.playMelody("C5 G F E G A B C ", 140)
        if (game.score() == 50) {
            music.playMelody("C D C5 D C5 D C5 D ", 500)
        }
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        Game = 2
        Game_20 += 2
        Menü = 0
    }
})
basic.forever(function () {
    if (Musik == 3) {
        music.playMelody("C D E C5 C D E C ", 240)
        music.playMelody("C5 E F E D C D E ", 240)
        if (game.score() == 50) {
            music.playMelody("C D C5 D C5 D C5 D ", 500)
        }
    }
})
basic.forever(function () {
    if (Lobbymusik == 1) {
        music.playMelody("G A B A F G A G ", 100)
    }
})
