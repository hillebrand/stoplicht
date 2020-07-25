function zet_stoplicht_op_rood () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
input.onButtonPressed(Button.A, function () {
    zet_stoplicht_op_rood()
    answer = 0
})
radio.onReceivedString(function (question) {
    basic.showIcon(IconNames.Heart)
    if (question == "Is het groen?") {
        radio.sendNumber(answer)
    }
})
function zet_stoplicht_op_groen () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
}
input.onButtonPressed(Button.B, function () {
    zet_stoplicht_op_groen()
    answer = 1
})
let answer = 0
radio.setGroup(1)
zet_stoplicht_op_groen()
answer = 1
