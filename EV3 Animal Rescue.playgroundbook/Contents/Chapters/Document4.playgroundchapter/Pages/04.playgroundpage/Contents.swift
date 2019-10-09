//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  Controlling a robotic leg (e.g., to create a walking sequence) may require the use of multiple actions in a sequence.

  ### Program

  Create a function named `stepLeg` that:

  1.  Makes the motor rotate `90.0` degrees, at full power
  2.  Stops for `1.0` second
  3.  Makes the motor rotate `360.0` degrees at half power
  4.  Repeats this sequence three times

  ### Analyze

  Describe how the program flow influences the behavior of the motor.

  ### Modify

  Program another sequence of your choice. Experiment with negative values for both the `forDegrees` and `withPower` parameters.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer)
func /*#-editable-code*/<#name#>/*#-end-editable-code*/() {
  ev3.motorOn(
    forDegrees: /*#-editable-code*/<#T##degrees##Float#>/*#-end-editable-code*/, 
    on: .a, 
    withPower: /*#-editable-code*/<#T##power##Float#>/*#-end-editable-code*/)
  ev3.waitFor(
    seconds: /*#-editable-code*/<#T##seconds##Float#>/*#-end-editable-code*/)
  ev3.motorOn(
    forDegrees: /*#-editable-code*/<#T##degrees##Float#>/*#-end-editable-code*/, 
    on: .a, 
    withPower: /*#-editable-code*/<#T##power##Float#>/*#-end-editable-code*/)
}

for i in 1 ... /*#-editable-code*/<#T##times##Int#>/*#-end-editable-code*/ {
  //#-editable-code
  //#-end-editable-code
}
