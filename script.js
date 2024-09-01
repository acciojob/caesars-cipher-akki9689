// Your Script here.
function rot13(str) {
  return str.split('').map(char => {
    // Check if the character is an uppercase letter
    if (char >= 'A' && char <= 'Z') {
      // Get the character code
      let code = char.charCodeAt(0);
      // Perform the ROT13 shift
      code = code + 13;
      // Wrap around if the shifted character goes beyond 'Z'
      if (code > 'Z'.charCodeAt(0)) {
        code = code - 26;
      }
      return String.fromCharCode(code);
    } else {
      // If not an alphabetic character, return it unchanged
      return char;
    }
  }).join('');
}

// Do not change this line
window.rot13 = rot13;
