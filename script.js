/**
 ** DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 ** DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

const textOutput = document.getElementById('text-output');
textOutput.innerText = '';

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText() {
  // CODE GOES HERE
  const text = document.getElementById('text-input').value;
  textOutput.innerText = text;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem) {
  //CODE GOES HERE
  elem.classList.toggle('active');
  textOutput.classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
  elem.classList.toggle('active');
  textOutput.classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
  //CODE GOES HERE
  elem.classList.toggle('active');

  textOutput.classList.contains('underline')
    ? textOutput.classList.remove('underline')
    : textOutput.classList.add('underline');
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
  // CODE GOES HERE
  elem.classList.add('active');
  textOutput.style.textAlign = alignType;
  const btns = document.querySelectorAll('.btn.align');
  btns.forEach((btn) => {
    elem === btn || btn.classList.remove('active');
  });
}
