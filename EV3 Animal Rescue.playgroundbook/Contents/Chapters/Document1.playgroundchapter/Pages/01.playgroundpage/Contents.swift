//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  Before you start a new project, you must connect your [EV3 Brick](glossary://EV3%20Brick) to your iPad.

  To do that, follow these steps:

  1.  Tap on *Connect EV3 Brick*.
  2.  Once the EV3 Brick is paired with your iPad, the [Port View](glossary://Port%20View) will show you the value(s) of any [input](glossary://Input) or [output](glossary://Output) that is connected to a port.

  -   Callout(Port View icon): ![Port View](live_view_plates_mode@2x.png)

  ### Program

  Send your first program to the brick by tapping on *Run My Code* to make the EV3 Brick say "Hello."

  Once the brick says "Hello," go to the next page.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(literal, show, integer, float)
//#-code-completion(identifier, show, ev3, .)
//#-code-completion(identifier, show, playSound(file:atVolume:withStyle:))
//#-code-completion(identifier, show, SoundFile, hello, goodbye, fanfare, errorAlarm, start, stop, object, ouch, blip, arm, snap, laser) 
//#-code-completion(identifier, show, SoundStyle, waitForCompletion, playOnce, playRepeat) 
ev3.playSound(
  file: .hello, 
  atVolume: 100.0, 
  withStyle: .waitForCompletion)
