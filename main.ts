let rotate = 0
forever(function () {
    modules.led1.setPixelColor(rotate, 0xff0000)
    modules.led1.rotate(1)
    rotate += 1
    if (rotate > 8) {
        rotate = 0
        modules.led1.setAll(0x000000)
    }
    pause(1000)
})
