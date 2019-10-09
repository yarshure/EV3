//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  ### Evaluate

  Using the same build as on the previous page, tap *Run My Code* and evaluate whether the program shown below correctly does the following. Make corrections if needed.

  1.  The EV3 Brick makes a sound when it detects an object passing in front of the Ultrasonic Sensor.

  -   Experiment: Move your hand in front of the Ultrasonic Sensor to act as an object.

  ### Modify

  Choose and create various functions that might be able help the turtle to avoid objects, or find food. Consider the following examples.

  1.  Program the EV3 Brick to make one sound for every two objects that pass in front of the Ultrasonic Sensor.
  2.  Program the EV3 Brick to display the detected value of the Ultrasonic Sensor.

  -   Important: In the programming area below, you can change the parameters to experiment on your own.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer)
//#-code-completion(keyword, show, func, for, while)
//#-code-completion(identifier, show, ev3, .)
//#-code-completion(identifier, show, waitForUltrasonicChange(on:))
//#-code-completion(identifier, show, InputPort, one, two, three, four)
//#-code-completion(identifier, show, waitFor(seconds:))
//#-code-completion(identifier, show, playSound(file:atVolume:withStyle:))
//#-code-completion(identifier, show, SoundFile, hello, goodbye, fanfare, errorAlarm, start, stop, object, ouch, blip, arm, snap, laser) 
//#-code-completion(identifier, show, SoundStyle, waitForCompletion, playOnce, playRepeat) 
//#-editable-code
ev3.waitForUltrasonicChange(on: .one)
ev3.playSound(
  file: .object, 
  atVolume: 50.0, 
  withStyle: .playOnce)
//#-end-editable-code
