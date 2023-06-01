def on_pin_touch_p0():
    Korp.change(LedSpriteProperty.X, -1)
input.on_pin_touch_event(TouchPin.P0, input.button_event_down(), on_pin_touch_p0)

def on_pin_touch_p3():
    Korp.change(LedSpriteProperty.X, 1)
input.on_pin_touch_event(TouchPin.P3, input.button_event_down(), on_pin_touch_p3)

sprite = 0
Ball: game.LedSprite = None
Game_20 = 0
Musik = 0
Korp: game.LedSprite = None
Menü = 1
Game = 0
game.set_life(3)
game.set_score(1)

def on_forever():
    global Menü, Musik
    if Menü == 1:
        basic.show_leds("""
            . # # # .
                        . # . . .
                        . # # . .
                        . # . . .
                        . # # # .
        """)
        if input.button_is_pressed(Button.A):
            Menü = 2
        if input.pin_is_pressed(TouchPin.P1):
            Musik = 1
basic.forever(on_forever)

def on_forever2():
    global Korp
    if Game_20 == 2:
        Korp = game.create_sprite(2, 4)
basic.forever(on_forever2)

def on_forever3():
    global Menü
    if Menü == 3:
        basic.show_leds("""
            . # . # .
                        . # . # .
                        . # # # .
                        . # . # .
                        . # . # .
        """)
        if input.button_is_pressed(Button.B):
            Menü = 2
basic.forever(on_forever3)

def on_forever4():
    global Menü, Musik
    if Menü == 2:
        basic.show_leds("""
            # . . . #
                        # # . # #
                        # . # . #
                        # . . . #
                        # . . . #
        """)
        if input.button_is_pressed(Button.A):
            Menü = 3
        if input.button_is_pressed(Button.B):
            Menü = 1
        if input.pin_is_pressed(TouchPin.P1):
            Musik = 2
basic.forever(on_forever4)

def on_forever5():
    if Musik == 2:
        music.play_melody("C D E F D E F C5 ", 200)
        music.play_melody("C F E D E F E C ", 200)
basic.forever(on_forever5)

def on_forever6():
    if Musik == 1:
        music.play_melody("C5 F G A F G A C ", 140)
        music.play_melody("C5 G F E G A B C ", 140)
basic.forever(on_forever6)

def on_forever7():
    global Game, Game_20, Menü
    if input.pin_is_pressed(TouchPin.P1):
        Game = 2
        Game_20 += 2
        Menü = 0
basic.forever(on_forever7)

def on_forever8():
    pass
basic.forever(on_forever8)

def on_forever9():
    global Ball, sprite
    if Game == 2:
        Ball = game.create_sprite(randint(0, 4), 0)
        for index in range(4):
            Ball.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        if Korp.is_touching(Ball):
            game.add_score(1)
            Ball.delete()
        else:
            Ball.delete()
            game.remove_life(1)
        sprite += 0
basic.forever(on_forever9)
