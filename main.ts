input.onButtonPressed(Button.A, function () {
    led.unplot(x, 0)
    x = x - 1
    led.plot(x, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 0)
    x += 1
    led.plot(x, 0)
})
let x = 0
x = randint(0, 4)
led.plot(x, 0)
