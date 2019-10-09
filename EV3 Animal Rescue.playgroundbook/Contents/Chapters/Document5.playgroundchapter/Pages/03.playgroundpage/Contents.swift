//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  ### Program

  Using your turtle prototype, create a function named `moveTurtleAndDetect`.

  1.  Program your turtle to move forward and stop `5.0` cm away from the "fruit," using the Ultrasonic Sensor.

  -   example: To stop motors, use the function `stopMove`. For example:\
      \
      `ev3.stopMove(leftPort: .a, rightPort: .b)`

  ### Analyze

  Use the data from Port View or Data View to demonstrate that the turtle has stopped 5.0 cm from the object.

  ### Modify

  Add a behavior to your program that clearly indicates when the sensor has detected the "fruit."

  ### Communicate

  Describe the differences between programming your robot to move without assistance from a sensor and programming it to move and react based on sensor input.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer)
//#-code-completion(keyword, show, func, while, if)
//#-code-completion(identifier, show, ev3, .)
//#-code-completion(identifier, show, move(leftPort:rightPort:leftPower:rightPower:))
//#-code-completion(identifier, show, OutputPort, a, b, c, d)
//#-code-completion(identifier, show, stopMove(leftPort:rightPort:))
//#-code-completion(identifier, show, waitForUltrasonicCentimeters(on:lessThanOrEqualTo:))
//#-code-completion(identifier, show, InputPort, one, two, three, four)
//#-code-completion(identifier, show, waitForUltrasonicInches(on:lessThanOrEqualTo:))
//#-code-completion(identifier, show, waitForUltrasonicCentimeters(on:greaterThanOrEqualTo:))
//#-code-completion(identifier, show, waitForUltrasonicInches(on:greaterThanOrEqualTo:))
//#-code-completion(identifier, show, move(forRotations:leftPort:rightPort:leftPower:rightPower:))
//#-editable-code
//#-end-editable-code
