let y1 = 0
basic.forever(function () {
    led.plotBrightness(randint(0, 4), 0, 255)
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            y1 = 4 - y
            if (led.pointBrightness(x, y1) == 255) {
                led.plotBrightness(x, y1, 150)
                led.plotBrightness(x, y1 + 1, 255)
            } else if (led.pointBrightness(x, y1) == 150) {
                led.plotBrightness(x, y1, 50)
            } else if (led.pointBrightness(x, y1) == 50) {
                led.plotBrightness(x, y1, 0)
            }
        }
    }
    basic.pause(200)
})
