function Left () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    127
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    127
    )
}
function Foward () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    127
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    127
    )
}
function section2 () {
    Foward()
    basic.pause(1000)
    fowardLeft()
    basic.pause(600)
    Stop()
    Backward()
    basic.pause(500)
    Foward()
    basic.pause(2500)
    Stop()
    start = 0
}
input.onButtonPressed(Button.A, function () {
    step += 1
})
input.onPinPressed(TouchPin.P2, function () {
    section += 0
    Foward()
    basic.pause(500)
    start = 1
})
function fowardLeft () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    255
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    127
    )
}
function section4 () {
    Foward()
    basic.pause(1500)
    fowardLeft()
    basic.pause(600)
    Stop()
    Foward()
    basic.pause(2500)
    Stop()
    start = 0
}
function Right () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    127
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    127
    )
}
function Stop () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    0
    )
}
function section5 () {
    Foward()
    basic.pause(1000)
    fowardLeft()
    basic.pause(600)
    Stop()
    Backward()
    basic.pause(500)
    Stop()
    start = 0
}
function Backward () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    127
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    127
    )
}
let section = 0
let step = 0
let start = 0
start = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (start == 1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
            Foward()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
            Right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
            Left()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1) {
            section += 1
            Foward()
            basic.pause(1500)
            basic.showNumber(section)
            if (section == 2) {
                section = 2
                if (step == 1) {
                    basic.clearScreen()
                    section2()
                }
            } else if (section == 4) {
                section = 4
                if (step == 2) {
                    section4()
                }
            } else if (section == 5) {
                section = 5
                if (step == 3) {
                    section5()
                }
            } else if (section == 6) {
                section = 6
            }
        }
    } else {
        basic.showNumber(step)
        Stop()
    }
})
