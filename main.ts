let y = 0
let x = 0
let y1 = 0
let y2 = 0
basic.forever(function () {
    y = 0
    x = randint(0, 4)
    while (y <= 6) {
        y1 = y - 1
        y2 = y1 - 1
        led.plotBrightness(x, y1, 150)
        led.plotBrightness(x, y2, 50)
        led.plotBrightness(x, y, 255)
        y += 1
        basic.pause(200)
        led.unplot(x, y2)
    }
    led.unplot(x, y)
    led.unplot(x, y1)
})
