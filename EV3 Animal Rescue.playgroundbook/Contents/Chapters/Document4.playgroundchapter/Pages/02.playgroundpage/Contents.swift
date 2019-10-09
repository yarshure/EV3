//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  ### Build

  Connect the robotic leg to Port `.a` of your EV3 Brick.

  ![EV3](45544_Turtle_EV3_06.jpg)

  ### Program

  Using the `motorOn` function:

  1.  Make the leg move in one direction for `4.0` seconds at half power.

  ### Modify

  Explore the `motorOn` function by:

  1.  Changing the `withPower` value to make the leg move at full power
  2.  Changing the `withPower` to a negative value to change the leg's direction of movement
  3.  Changing the `forSeconds` parameter to `forRotations`, to make the leg move for `5.0` rotations at full power.

  ### Analyze

  Using Port View or Data View, confirm that the motor has completed five rotations. Look at the value displayed in the Port Information Box or next to the generated graph.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer)
//#-code-completion(keyword, show, func, for, while)
//#-code-completion(identifier, show, ev3, .)
//#-code-completion(identifier, show, motorOn(forSeconds:on:withPower:))
//#-code-completion(identifier, show, motorOn(forRotations:on:withPower:))
//#-code-completion(identifier, show, OutputPort, a, b, c, d)
//#-editable-code
ev3.motorOn(
  forSeconds: 4.0, 
  on: .a,
  withPower: 50.0)
//#-end-editable-code
