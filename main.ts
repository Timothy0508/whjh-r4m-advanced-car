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
    basic.pause(500)
    Right()
    basic.pause(1000)
    Foward()
    basic.pause(500)
    Backward()
    basic.pause(200)
    Right()
    basic.pause(650)
    Backward()
    basic.pause(2000)
    Foward()
    basic.pause(1000)
    Left()
    basic.pause(1000)
}
input.onPinPressed(TouchPin.P2, function () {
    section += 1
    Foward()
    basic.pause(1000)
    start = 1
})
function section4 () {
    Right()
    basic.pause(1500)
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
    basic.pause(1200)
    Foward()
    basic.pause(200)
    basic.pause(800)
    Stop()
    basic.pause(99999999999999999999999)
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
            if (section == 1) {
                section2()
                basic.clearScreen()
                Stop()
                basic.pause(99999999999999999999999999)
            } else if (section == 3) {
                section4()
                basic.clearScreen()
            } else if (section == 4) {
                section5()
                basic.clearScreen()
            }
            section += 1
            basic.showNumber(section)
        }
    }
})
