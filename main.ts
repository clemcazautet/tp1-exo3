let y = 0
let x = randint(0, 4)
let y1 = -1
let y2 = -2
basic.forever(function () {
    led.plotBrightness(x, y, 255)
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
    led.plotBrightness(x, y1, 140)
    led.unplot(x, y1)
    y1 += 1
    led.plotBrightness(x, y1, 140)
    led.plotBrightness(x, y2, 40)
    led.unplot(x, y2)
    y2 += 1
    led.plotBrightness(x, y2, 40)
})
