//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  ### Build

  Connect the Ultrasonic Sensor module that you have just built to Port `.four` of your EV3 Brick.

  ![SensorBuild](45544_Turtle_EV3_04.jpg)

  ### Program

  Complete the parameters of this sequence so that the following happens when you tap *Run My Code*:

  1.  The Ultrasonic Sensor detects an object, for example your hand, at a distance less than or equal to `30.0` cm, using the robot's `waitForUltrasonicCentimeters` function.
  2.  The EV3 Brick Status Light blinks red for `2.0` seconds when an object is detected, using the `brickLightOn` function.

  -   Important: When writing a function in your code, you will see a mention of `Float` as a parameter input value. `Float` represents a decimal number, for example `ev3.waitFor(seconds: 0.5)`

  ### Communicate

  In your team, discuss how this function could be used to help a turtle.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer)
ev3.waitForUltrasonicCentimeters(
    on: /*#-editable-code*/<#T##InputPort##InputPort#>/*#-end-editable-code*/,
    lessThanOrEqualTo: /*#-editable-code*/<#T##Float##Float#>/*#-end-editable-code*/)
ev3.brickLightOn(
    withColor: .red, 
    inMode: .flashing)
ev3.waitFor(
    seconds: /*#-editable-code*/<#T##Float##Float#>/*#-end-editable-code*/)
ev3.brickLightOff()
