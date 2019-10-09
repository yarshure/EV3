//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  You have just seen that the EV3 Brick can control various outputs, such as sounds, lights, and images. It can also control two types of motors.

  ### Build

  Connect a [Large Motor](glossary://Motor%20(Large)) to Port A on your EV3 Brick.

  ![EV3](45544_Turtle_EV3_02.jpg)

  ### Analyze

  Tap *Run My Code* to verify that:

  1.  The [Large Motor](glossary://Motor%20(Large)) connected to Port `.a` is turned on at a full power of `100.0` for `3.0` seconds before it hard stops.

  ### Modify

  Adjust this program as described below and tap *Run My Code* to see the effect:

  1.  Change the `withPower` parameter to another value between `-100.0` and `100.0`.

  ### Communicate

  In your team, discuss the values displayed in Port View. These values are collected by the Rotation Sensor that is embedded in the Large Motor.

  -   Important: In Port View, tap on the value displayed in the Port Information Box to change its unit of measure.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer)
//#-code-completion(identifier, show, ev3, .)
//#-code-completion(identifier, show, ImageName, neutral, pinchRight, awake, hurt, accept, decline, questionMark, warning, stop, pirate, boom, ev3Icon) 
//#-code-completion(identifier, show, BrickLightColor, green, orange, red)
ev3.motorOn(
  forSeconds: 3.0, 
  on: .a, 
  withPower: /*#-editable-code*/100.0/*#-end-editable-code*/, 
  brakeAtEnd: true)
