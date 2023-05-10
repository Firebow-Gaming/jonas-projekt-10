def on_button_a():
    Korp.change(LedSpriteProperty.X, -1)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    Korp.change(LedSpriteProperty.X, 1)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

Ball: game.LedSprite = None
Korp: game.LedSprite = None
Korp = game.create_sprite(2, 4)
game.set_life(3)

def on_forever():
    global Ball
    Ball = game.create_sprite(randint(0, 4), 0)
    for index in range(4):
        Ball.change(LedSpriteProperty.Y, 1)
        basic.pause(400)
    if Korp.is_touching(Ball):
        game.add_score(1)
        Ball.delete()
    else:
        Ball.delete()
        game.remove_life(1)
basic.forever(on_forever)
