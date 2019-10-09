//#-hidden-code
import PlaygroundSupport
import Foundation

let ev3 = PlaygroundPageSupport.createRobot()
//#-end-hidden-code
/*:#localized(key: "FirstProseBlock")
  Many of functions that you will use to control your creations have parameters, or characteristics, that can be modified to change their behavior.

  -   Example:\
      In the code below, `ev3.playSound` is the function that will play a sound. The parameters of that function are `file`, `atVolume`, and `withStyle`.\
      \
      `.hello` is the input value to the `file` parameter, specifying what sound will be played.\
      `50.0` is specifying the volume level at which the sound will be played, with 100.0 being the maximum level.\
      `.playOnce` is specifying that the sound will be played once.

  The [Quick Help Function](glossary://Quick%20Help%20Function) will guide you in learning the EV3 functions and their parameters.

  You can find it by tapping on the function that you need help with, then selecting the *Help* option from the pop-up menu.

  Watch a video that demonstrates this process: ![How to get help](help.mp4 poster="help.jpg")

  ### Analyze

  Try out the Quick Help Function by tapping on the `file` parameter to find out what sounds you can play.

  ### Modify

  Select a different sound for the EV3 Brick to play, then tap *Run My Code* to hear the new sound.
  */
//#-code-completion(everything, hide)
//#-code-completion(currentmodule, show)
//#-code-completion(identifier, show, ev3, .)
//#-code-completion(identifier, show, SoundFile, hello, goodbye, fanfare, errorAlarm, start, stop, object, ouch, blip, arm, snap, laser) 
ev3.playSound(
  file: /*#-editable-code*/.fanfare/*#-end-editable-code*/,
  atVolume: 50.0,
  withStyle: .playOnce)
