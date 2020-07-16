let y = 0
let x = randint(0, 4)
let y1 = -1
let y2 = -2
basic.forever(function () {
    led.plotBrightness(x, y, 255)
    basic.pause(500)
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
    led.plotBrightness(x, y1, 100)
    led.unplot(x, y1)
    y1 += 1
    led.plotBrightness(x, y1, 100)
    led.plotBrightness(x, y2, 10)
    led.unplot(x, y2)
    y2 += 1
    led.plotBrightness(x, y2, 10)
})
