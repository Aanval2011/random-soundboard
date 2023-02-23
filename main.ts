let nummer = 0
input.onButtonPressed(Button.A, function () {
    nummer = randint(1, 9)
    basic.showNumber(nummer)
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
basic.forever(function () {
    if (nummer == 7) {
        music.playMelody("G F A G B A C5 B ", 400)
    }
})
basic.forever(function () {
    if (nummer == 1) {
        music.playMelody("G F G A - F E D ", 130)
    }
})
basic.forever(function () {
    if (nummer == 6) {
        music.playMelody("D F G A G A C5 B ", 120)
    }
})
basic.forever(function () {
    if (nummer == 2) {
        music.playMelody("B C5 A F G E C5 C ", 420)
    }
})
basic.forever(function () {
    if (nummer == 8) {
        music.playMelody("E D G F B A C5 B ", 400)
    }
})
basic.forever(function () {
    if (nummer == 9) {
        music.playMelody("F - E B C5 A - B ", 520)
    }
})
basic.forever(function () {
    if (nummer == 3) {
        music.playMelody("C5 - E B C5 A F - ", 120)
    }
})
basic.forever(function () {
    if (nummer == 4) {
        music.playMelody("C - C - C - E - ", 120)
        music.playMelody("E - C - C C A - ", 120)
        music.playMelody("C5 C - F - C E C5 ", 120)
        music.playMelody("- C - E - C C - ", 120)
    }
})
basic.forever(function () {
    if (nummer == 5) {
        music.playMelody("E B C5 A B G A F ", 128)
    }
})
