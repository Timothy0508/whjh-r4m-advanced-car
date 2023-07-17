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
    255
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    255
    )
}
function section2 () {
    Right()
    basic.pause(1500)
    Foward()
    basic.pause(200)
    Backward()
    basic.pause(800)
    Foward()
    basic.pause(500)
    Left()
    basic.pause(1500)
}
input.onPinPressed(TouchPin.P2, function () {
    start = 1
})
function section4 () {
    Right()
    basic.pause(1500)
    Backward()
    basic.pause(500)
    Foward()
    basic.pause(500)
    Left()
    basic.pause(1500)
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
    Right()
    basic.pause(1500)
    Foward()
    basic.pause(200)
    Backward()
    basic.pause(800)
    Stop()
    basic.pause(99999999999999999999999)
}
function Backward () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    255
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    255
    )
}
let start = 0
start = 0
let section = 0
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
            basic.showNumber(section)
            Foward()
            basic.pause(250)
            if (section == 2) {
                section2()
            }
        }
    }
})
