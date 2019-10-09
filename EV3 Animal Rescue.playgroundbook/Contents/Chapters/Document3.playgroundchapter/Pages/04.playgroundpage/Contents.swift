//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  With the Ultrasonic Sensor, you can use the:

  1.  `waitForUltrasonicIncrease` function to detect when the distance between an object and the Ultrasonic Sensor is increasing
  2.  `waitForUltrasonicDecrease` function to detect when the distance between an object and the Ultrasonic Sensor is decreasing

  ### Program

  Using the same build as on the previous page, create the following functions.

  1.  Program the Ultrasonic Sensor to detect when the distance between the sensor and an object is decreasing.
  2.  Use the red EV3 Brick Status Light to indicate that the object is getting closer.

  -   Experiment: Place your hand in front of the sensor before tapping *Run My Code*, then move your hand toward the Ultrasonic Sensor to act as an object.

  ### Modify

  Make the following modifications to your previous program.

  1.  Program the Ultrasonic Sensor to detect when the distance between the sensor and an object is increasing.
  2.  Use the green EV3 Brick Status Light to indicate that the object is moving farther away.

  ### Communicate

  In your team, discuss how this function could be used to help the turtle.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer)
//#-code-completion(keyword, show, func, for, while)
//#-code-completion(identifier, show, ev3, .)
//#-code-completion(identifier, show, waitForUltrasonicIncrease(on:))
//#-code-completion(identifier, show, InputPort, one, two, three, four)
//#-code-completion(identifier, show, waitForUltrasonicDecrease(on:))
//#-code-completion(identifier, show, brickLightOn(withColor:inMode:))
//#-code-completion(identifier, show, BrickLightColor, green, red, orange)
//#-code-completion(identifier, show, BrickLightMode, flashing, on, pulsating)
//#-editable-code
ev3.
//#-end-editable-code
