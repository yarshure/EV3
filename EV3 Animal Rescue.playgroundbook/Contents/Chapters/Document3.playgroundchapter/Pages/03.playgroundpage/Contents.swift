//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  The Ultrasonic Sensor is used to detect the presence of any object that is placed in front of it. You can program reactions after one or many objects are detected.

  ### Program

  Using the same build, create a function called `detectObject` that:

  1.  Uses the Ultrasonic Sensor to detect an object, for example your hand, at a distance less than or equal to `30.0` cm, using the robot's `waitForUltrasonicCentimeters` function
  2.  Makes the EV3 Brick Status Light blink red for `2.0` seconds when an object is detected, using the `brickLightOn` function followed by the `waitFor` function
  3.  Uses that function to detect three objects

  ### Analyze

  Using Data View, confirm that the sensor has detected three objects.

  ### Modify

  Add a command to your program that makes the EV3 Brick play a sound using the `playSound` function, after three objects have been detected.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer)
//#-code-completion(keyword, show, func, for, while)
//#-code-completion(identifier, show, ev3, .)
//#-code-completion(identifier, show, waitForUltrasonicCentimeters(on:lessThanOrEqualTo:))
//#-code-completion(identifier, show, InputPort, one, two, three, four)
//#-code-completion(identifier, show, waitForUltrasonicCentimeters(on:greaterThanOrEqualTo:))
//#-code-completion(identifier, show, waitForUltrasonicInches(on:lessThanOrEqualTo:))
//#-code-completion(identifier, show, waitForUltrasonicInches(on:greaterThanOrEqualTo:))
//#-code-completion(identifier, show, brickLightOn(withColor:inMode:))
//#-code-completion(identifier, show, BrickLightColor, green, red, orange)
//#-code-completion(identifier, show, BrickLightMode, flashing, on, pulsating)
//#-code-completion(identifier, show, brickLightOff())
//#-code-completion(identifier, show, playSound(file:atVolume:withStyle:))
//#-code-completion(identifier, show, SoundFile, hello, goodbye, fanfare, errorAlarm, start, stop, object, ouch, blip, arm, snap, laser) 
//#-code-completion(identifier, show, SoundStyle, waitForCompletion, playOnce, playRepeat) 
//#-editable-code
func detectObject() {
    
}
detectObject()
//#-end-editable-code
