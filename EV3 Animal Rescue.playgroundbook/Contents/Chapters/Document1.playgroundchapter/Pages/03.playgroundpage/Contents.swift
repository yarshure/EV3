//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  Let's explore some functions that will enable you to control the outputs of your EV3 Brick.

  ### Build

  Use a Bluetooth-connected EV3 Brick to analyze the program below.

  ![EV3](45544_Turtle_EV3_01.jpg)

  ### Analyze

  Tap on *Run My Code* and see what happens.

  You should see that: 1. Two images ("eyes closed" and "eyes open") are shown on the Brick Display. 2. The EV3 Brick Status Light blinks red.

  ### Modify

  Change some of the program's parameters and tap on *Run My Code* to change:

  1.  The expression of the eyes (by using different images)
  2.  The length of time between expressions
  3.  The color that the EV3 Brick Status Light blinks

  Modify and execute your program as many times as you need.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer)
//#-code-completion(identifier, show, ev3, .)
//#-code-completion(identifier, show, ImageName, neutral, pinchRight, awake, hurt, accept, decline, questionMark, warning, stop, pirate, boom, ev3Icon) 
//#-code-completion(identifier, show, BrickLightColor, green, orange, red) 
ev3.displayImage(
  named: /*#-editable-code*/.hurt/*#-end-editable-code*/,
  atX: 0, 
  atY: 0, 
  clearScreen: true)
  
ev3.waitFor(seconds: /*#-editable-code*/0.5/*#-end-editable-code*/)

ev3.displayImage(
  named: /*#-editable-code*/.neutral/*#-end-editable-code*/,
  atX: 0, 
  atY: 0, 
  clearScreen: true)

ev3.brickLightOn(
    withColor: /*#-editable-code*/.red/*#-end-editable-code*/,
    inMode: .flashing)
