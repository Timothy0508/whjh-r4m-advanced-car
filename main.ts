function Left() {
    sensors.DDMmotor(AnalogPin.P13, 1, AnalogPin.P14, 127)
    sensors.DDMmotor(AnalogPin.P15, 1, AnalogPin.P16, 127)
}

function Foward() {
    sensors.DDMmotor(AnalogPin.P13, 0, AnalogPin.P14, 255)
    sensors.DDMmotor(AnalogPin.P15, 1, AnalogPin.P16, 255)
}

function section2() {
    Turn(100)
    Foward()
    basic.pause(500)
    Turn(220)
    Foward()
    basic.pause(600)
}

function Turn(degree: number) {
    Right()
    basic.pause(degree / 360 * 6000)
    Stop
}

input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
    
    start = 1
})
function section4() {
    Right()
    basic.pause(1500)
    Backward()
    basic.pause(500)
    Foward()
    basic.pause(500)
    Left()
    basic.pause(1500)
}

function Right() {
    sensors.DDMmotor(AnalogPin.P13, 0, AnalogPin.P14, 127)
    sensors.DDMmotor(AnalogPin.P15, 0, AnalogPin.P16, 127)
}

function Stop() {
    sensors.DDMmotor(AnalogPin.P13, 0, AnalogPin.P14, 0)
    sensors.DDMmotor(AnalogPin.P15, 1, AnalogPin.P16, 0)
}

function section5() {
    Right()
    basic.pause(1500)
    Foward()
    basic.pause(200)
    Backward()
    basic.pause(800)
    Stop()
    basic.pause(99999999999999999999999)
}

function Backward() {
    sensors.DDMmotor(AnalogPin.P13, 1, AnalogPin.P14, 255)
    sensors.DDMmotor(AnalogPin.P15, 0, AnalogPin.P16, 255)
}

let section = 0
let start = 0
start = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function on_forever() {
    
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
            if (section == 2) {
                section2()
            } else if (section == 4) {
                section4()
            } else if (section == 5) {
                section5()
            }
            
        }
        
    }
    
})
