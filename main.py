def on_forever():
    basic.show_leds("""
        # # # # .
                # # # # .
                # # # # .
                # # # # .
                # # # # .
    """)
    basic.show_string("Hurensohn")
    music.play_melody("B B E G D B B F ", 120)
    music.play_melody("F F A E E B F F ", 120)
basic.forever(on_forever)
