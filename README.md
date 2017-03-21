# Embedding JavaScript
This assignment is intended to improve your fluency with querying and selectively editing the DOM (Document Object Model).  To complete all challenges you will need to add changes to all files.

## First Challenge
If you click on the index.html file you will see two sections with many grey divs. Inside click.js create two functions.

#### Same Color
-  This will be enabled by clicking on b1.
-  Create the function samecolor() which takes one input named hex.
-  Find all of the divs in the first section and change their background-color to the #rbg that you want.
-  Also in the function give each div a different opacity (which is the property of transparency). [MDN Opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) I would suggest evenly spacing the opacities.

#### Different Color
-  This will be enabled by clicking on b2.
-  Create a function diffcolor() which takes one input named hex.
-  Find all of the divs in the second section.
-  Color the background of half of the divs with hex and the other half with hex's color complement.
-  Make sure the colors alternate. Example yellow, blue, yellow, blue, etc...

## Second Challenge
Inside of resize.js create two functions: tabletSize() and phoneSize().

#### Tablet Size
Adjust the width and the height of all sections and divs to be 75% of their current values.  This will be enabled by clicking the button b3.

-  Search of all of the sections on the page.
-  Declare two variables: width and height.
-  Assign both of these variable the current width and current height.
-  Update the variables.
-  Reassign the sections to have the new values of width and height.

#### Phone Size
Adjust the width and the height of all sections and divs to be 50% of their current values.  This will be enabled by clicking the button b4.

## Extra
Create a 5th button, b5, and resize the page back to full desktop size.  Note: this must work for both instances.
-  Tablet ----> Desktop
-  Phone  ----> Desktop
