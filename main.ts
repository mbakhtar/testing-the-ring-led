let rotate = 0
forever(function () {
    modules.led1.setPixelColor(rotate, 0xff0000)
    pause(1000)
    modules.led1.rotate(1)
    pause(1000)
    rotate += 1
    pause(1000)
    if (rotate == 8) {
        rotate = 0
        modules.led1.setAll(0x000000)
    }
    pause(1000)
})
