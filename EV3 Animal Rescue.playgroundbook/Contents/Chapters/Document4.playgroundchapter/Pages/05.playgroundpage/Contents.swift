//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  ### Build

  Connect a Ultrasonic Sensor to Port `.four`.

  ![EV3](45544_Turtle_EV3_05.jpg)

  ### Evaluate

  Tap *Run My Code* and evaluate whether the program shown below correctly does the following. Make corrections if needed.

  1.  The Large Motor runs at full power if it detects an object at a distance less than or equal to `20.0` cm.
  2.  Otherwise, the Large Motor runs at half power.

  ### Modify

  Choose and create various functions that might be able to help the turtle in its quest for food.

  -   Important: In the programming area below, you can change the parameters to experiment on your own.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer)
//#-code-completion(keyword, show, func, while, if)
//#-code-completion(identifier, show, ev3, .)
//#-code-completion(identifier, show, measureUltrasonicCentimeters(on:))
//#-code-completion(identifier, show, InputPort, one, two, three, four)
//#-code-completion(identifier, show, motorOn(on:withPower:))
//#-code-completion(identifier, show, OutputPort, a, b, c, d)
//#-editable-code
while true {
  if ev3.measureUltrasonicCentimeters(
    on: .one) > 20.0 {
    ev3.motorOn(
      on: .a, 
      withPower: 100)
  } else {
    ev3.motorOn(
      on: .a, 
      withPower: 50)
  }
}
//#-end-editable-code
