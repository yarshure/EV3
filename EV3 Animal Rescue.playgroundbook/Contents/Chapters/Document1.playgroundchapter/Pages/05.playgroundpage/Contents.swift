//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  Various sensors, or inputs, can be connected to your EV3 Brick.

  ### Build

  Connect an [Ultrasonic Sensor](glossary://Ultrasonic%20Sensor) to Port 4 of your EV3 Brick.

  ![EV3](45544_Turtle_EV3_03.jpg)

  ### Program

  Complete the program as described below so that when you move your hand in front of the Ultrasonic Sensor connected to Port `.four`, the Large Motor connected to Port `.a` starts for `3.0` seconds at full power.

  1.  Tap in the box below to enter the code.
  2.  Start by writing `ev3.`
  3.  Continue by writing the first letters of the function `waitForUltrasonicChange`. When you see this function appear in the box, tap on it.
  4.  Complete the function by entering the number of the Port to which the Ultrasonic Sensor is connected, Port `.four`.

  ### Analyze

  Change the Live View from [Port View](glossary://Port%20View) to [Data View](glossary://Data%20View). Tap *Run My Code* again and observe the values captured by the [Ultrasonic Sensor](glossary://Ultrasonic%20Sensor).

  -   Callout(Data View icon): ![Data View](live_view_graph_mode@2x.png)

  ### Communicate

  In your team, discuss where on the graph the Ultrasonic Sensor has detected movement.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer)
//#-code-completion(identifier, show, ev3, ., waitForUltrasonicChange(on:))
//#-code-completion(identifier, show, InputPort, one, two, three, four)
//#-editable-code

//#-end-editable-code
ev3.motorOn(
  forSeconds: /*#-editable-code*/3.0/*#-end-editable-code*/, 
  on: .a, 
  withPower: /*#-editable-code*/100.0/*#-end-editable-code*/, 
  brakeAtEnd: true)
