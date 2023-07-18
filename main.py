def Left():
    sensors.dd_mmotor(AnalogPin.P13, 1, AnalogPin.P14, 127)
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 127)
def Foward():
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 255)
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 255)
def section2():
    right()
    basic.pause(1500)
    Foward()
    basic.pause(500)
    left()
    basic.pause(4500)
    Foward()
    basic.pause(600)
    right()
    basic.pause(4500)
    foward()
    basic.pause(500)
    left()
    basic.pause(1500)

def on_pin_pressed_p2():
    global start
    start = 1
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def section4():
    Right()
    basic.pause(1500)
    Backward()
    basic.pause(500)
    Foward()
    basic.pause(500)
    Left()
    basic.pause(1500)
def Right():
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 127)
    sensors.dd_mmotor(AnalogPin.P15, 0, AnalogPin.P16, 127)
def Stop():
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 0)
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 0)
def section5():
    Right()
    basic.pause(1500)
    Foward()
    basic.pause(200)
    Backward()
    basic.pause(800)
    Stop()
    basic.pause(99999999999999999999999)
def Backward():
    sensors.dd_mmotor(AnalogPin.P13, 1, AnalogPin.P14, 255)
    sensors.dd_mmotor(AnalogPin.P15, 0, AnalogPin.P16, 255)
section = 0
start = 0
start = 0
pins.set_pull(DigitalPin.P2, PinPullMode.PULL_UP)

def on_forever():
    global section
    if start == 1:
        if pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P8) == 0:
            Foward()
        elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P8) == 1:
            Right()
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P8) == 0:
            Left()
        elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P8) == 1:
            section += 1
            basic.show_number(section)
            if section == 2:
                section2()
            elif section == 4:
                section4()
            elif section == 5:
                section5()
basic.forever(on_forever)
