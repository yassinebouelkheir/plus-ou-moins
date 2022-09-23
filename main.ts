input.onButtonPressed(Button.A, function () {
    if (!(show_Victory) && !(show_Gameover)) {
        game_Started = 1
        basic.clearScreen()
        Q += 1
        show_Change(true)
        basic.clearScreen()
        basic.showNumber(life_Count)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (!(show_Victory) && !(show_Gameover)) {
        game_Started = 1
        basic.clearScreen()
        if (Q <= 0) {
            Q = 0
        } else {
            Q += -1
        }
        show_Change(false)
        basic.clearScreen()
        basic.showNumber(life_Count)
    }
})
function show_Change (change_State: boolean) {
    for (let index = 0; index <= 4; index++) {
        led.plot(4, index)
    }
    if (change_State) {
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(1, 1)
        led.plot(1, 2)
        led.plot(1, 3)
        music.playTone(587, music.beat(BeatFraction.Whole))
        led.unplot(0, 2)
        led.unplot(1, 2)
        led.unplot(2, 2)
        led.unplot(1, 1)
        led.unplot(1, 2)
        led.unplot(1, 3)
    } else {
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        music.playTone(247, music.beat(BeatFraction.Whole))
        led.unplot(0, 2)
        led.unplot(1, 2)
        led.unplot(2, 2)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(4, index)
    }
}
input.onButtonPressed(Button.B, function () {
    if (!(show_Victory) && (!(show_Gameover) && game_Started)) {
        basic.clearScreen()
        if (Q == V) {
            show_Victory += 1
            music.playMelody("E D G F B A C5 B ", 120)
            basic.pause(3000)
            control.reset()
        } else {
            if (Q < V) {
                basic.showArrow(ArrowNames.North)
            } else {
                basic.showArrow(ArrowNames.South)
            }
            music.playTone(262, music.beat(BeatFraction.Whole))
            life_Count += -1
            if (life_Count < 1) {
                show_Gameover += 1
                music.playMelody("C5 A B G A F G E ", 120)
                basic.pause(4000)
                control.reset()
            }
        }
        basic.clearScreen()
        basic.showNumber(life_Count)
    }
})
let life_Count = 0
let game_Started = 0
let show_Gameover = 0
let show_Victory = 0
let Q = 0
let V = 0
V = randint(0, 10)
Q = 0
show_Victory = 0
show_Gameover = 0
game_Started = 0
life_Count = 3
basic.forever(function () {
    if (show_Victory) {
        basic.showString("Victory!")
    }
    if (show_Gameover) {
        basic.showString("Game over")
    }
    if (!(game_Started)) {
        basic.showString("+ ou -")
    }
})
