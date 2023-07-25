def Left():
    sensors.dd_mmotor(AnalogPin.P13, 1, AnalogPin.P14, 127)
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 127)
def Foward():
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 127)
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 127)
def section2():
    global start
    Foward()
    basic.pause(500)
    fowardLeft()
    basic.pause(600)
    Stop()
    Backward()
    basic.pause(500)
    Foward()
    basic.pause(2500)
    Stop()
    start = 0

def on_button_pressed_a():
    global step
    step += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    global section, start
    section = 1
    basic.show_number(section)
    Foward()
    basic.pause(2000)
    section = 1
    start = 1
    
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def fowardLeft():
    sensors.dd_mmotor(AnalogPin.P13, 1, AnalogPin.P14, 255)
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 127)
def section4():
    global start
    Foward()
    basic.pause(1500)
    fowardLeft()
    basic.pause(600)
    Stop()
    Foward()
    basic.pause(2500)
    Stop()
    start = 0
def Right():
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 127)
    sensors.dd_mmotor(AnalogPin.P15, 0, AnalogPin.P16, 127)
def Stop():
    sensors.dd_mmotor(AnalogPin.P13, 0, AnalogPin.P14, 0)
    sensors.dd_mmotor(AnalogPin.P15, 1, AnalogPin.P16, 0)
def section5():
    global start
    Foward()
    basic.pause(1000)
    fowardLeft()
    basic.pause(600)
    Stop()
    Backward()
    basic.pause(500)
    Stop()
    start = 0
def Backward():
    sensors.dd_mmotor(AnalogPin.P13, 1, AnalogPin.P14, 127)
    sensors.dd_mmotor(AnalogPin.P15, 0, AnalogPin.P16, 127)
section = 0
step = 0
start = 0
start = 0
pins.set_pull(DigitalPin.P2, PinPullMode.PULL_UP)

def section6():
    global start
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
            Foward()
            basic.pause(1500)
            basic.show_number(section)
            if section == 2:
                section = 2
                if step == 1:
                    basic.clear_screen()
                    section2()
            elif section == 4:
                section = 4
                if step == 2:
                    section4()
            elif section == 5:
                section = 5
                if step == 3:
                    section5()
            elif section == 6:
                section = 6
                if step = 4:
                    pass
    else:
        basic.show_number(step)
        Stop()
basic.forever(on_forever)
