//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  ### Program

  Using the same build as on the previous page, program the robotic leg to:

  1.  Move randomly at random power and for a random length of time between 1 and 5 seconds

  ### Modify

  Explore the `random` function by:

  1.  Making the robotic leg move in a random direction at a random power

  -   Note: The `random` function randomizes a value between its `min` and `max` parameters.

  ### Analyze

  Tap *Run My Code* more than one time. Use Data View to compare the differences between two graphs by describing the relationship between the graph and the motion of the robotic leg.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer)
//#-code-completion(keyword, show, func, for, while)
//#-code-completion(identifier, show, var, let)
//#-code-completion(identifier, show, ev3, .)
//#-code-completion(identifier, show, random(min:max:), random(max:))
//#-code-completion(identifier, show, motorOn(forSeconds:on:withPower:))
//#-code-completion(identifier, show, OutputPort, a, b, c, d)
//#-editable-code
let power = random(min: 0.0, max: 100.0)
let seconds = random(min: <#T##Float##Float#>, max: <#T##Float##Float#>)
ev3.motorOn(
  forSeconds: seconds, 
  on: .a, 
  withPower: power)
//#-end-editable-code
