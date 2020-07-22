Step 3 - LED Jumpers
====================

Input which colours you would like your LEDs to show into the form below, then hit the button to generate a diagram. Solder all the jumpers highlighted by a white rectangle in the image to set your colours.

.. raw:: html

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script language="javascript" src="_static/colourPickerJr/imgsh.js"></script> <!-- Javascript for image show/hide -->
    <script language="javascript" src="_static/colourPickerJr/mobileDetect.js"></script> <!-- Javascript for disabling fullscreen in portrait mode -->
    <link rel="stylesheet" type="text/css" href="_static/colourPickerJr/positioning.css"></link> <!-- CSS to position & overlay images -->
    <title>LED Colour Picker v2</title>
  </head>

  <body>
    <h1>Select LED Colours Below:</h1>

    <form id="ledform" action="javascript:;" onsubmit="refreshImages()">
      <table>
        <tr>
            <th></th>
            <th>LED One</th>
            <th>LED Two</th>
            <th>LED Three</th>
            <th>LED Four</th>
        </tr>
        <tr>
            <th>Red</th>
            <th><input type="radio" required id="led1" name="led1" value="Red"></th>
            <th><input type="radio" required id="led2" name="led2" value="Red"></th>
            <th><input type="radio" required id="led3" name="led3" value="Red"></th>
            <th><input type="radio" required id="led4" name="led4" value="Red"></th>
        </tr>
        <tr>
            <th>Green</th>
            <th><input type="radio" required id="led1" name="led1" value="Green"></th>
            <th><input type="radio" required id="led2" name="led2" value="Green"></th>
            <th><input type="radio" required id="led3" name="led3" value="Green"></th>
            <th><input type="radio" required id="led4" name="led4" value="Green"></th>
        </tr>
        <tr>
            <th>Yellow</th>
            <th><input type="radio" required id="led1" name="led1" value="Yellow"></th>
            <th><input type="radio" required id="led2" name="led2" value="Yellow"></th>
            <th><input type="radio" required id="led3" name="led3" value="Yellow"></th>
            <th><input type="radio" required id="led4" name="led4" value="Yellow"></th>
        </tr>
      </table>
      <br>
      <button type="submit">
        Generate
      </button>
      <br><br><br>
    </form>


    <div class="imgParent">
      <img id="mainImg" class="mainImg" src="_static/colourPickerJr/images/back.png"></img>
      <img id="TL-R" class="overlayImg" src="_static/colourPickerJr/images/TL-R.png"></img>
      <img id="TL-G" class="overlayImg" src="_static/colourPickerJr/images/TL-G.png"></img>
      <img id="TR-R" class="overlayImg" src="_static/colourPickerJr/images/TR-R.png"></img>
      <img id="TR-G" class="overlayImg" src="_static/colourPickerJr/images/TR-G.png"></img>
      <img id="B1-R" class="overlayImg" src="_static/colourPickerJr/images/B1-R.png"></img>
      <img id="B1-G" class="overlayImg" src="_static/colourPickerJr/images/B1-G.png"></img>
      <img id="B2-R" class="overlayImg" src="_static/colourPickerJr/images/B2-R.png"></img>
      <img id="B2-G" class="overlayImg" src="_static/colourPickerJr/images/B2-G.png"></img>
    </div>
    <br>
    <a id="fullscreenButton" href="javascript:fullscreenImage()"><button id="fullscreenButtonText">Enlarge the image</button></a>
    <br><br>
  </body>

  </html>


If you are unsure, please refer to the video below:

|

.. youtube:: PktxJEJBNFY
   :width: 100%

|

Troubleshooting
***************

- If you flow solder into a connection and want to disconnect it, use solder wick to remove the solder or brush downwards with your soldering iron to seperate the two pins.