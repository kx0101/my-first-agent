/**
 * ROT13 decoder function
 * @param {string} str - The ROT13 encoded string
 * @returns {string} - The decoded string
 */
function rot13Decode(str) {
  return str.replace(/[a-zA-Z]/g, function(char) {
    // Get the character code
    const code = char.charCodeAt(0);
    
    // Handle uppercase letters (A-Z: 65-90)
    if (code >= 65 && code <= 90) {
      // Shift by 13, wrap around if necessary
      return String.fromCharCode(((code - 65 + 13) % 26) + 65);
    }
    
    // Handle lowercase letters (a-z: 97-122)
    if (code >= 97 && code <= 122) {
      // Shift by 13, wrap around if necessary
      return String.fromCharCode(((code - 97 + 13) % 26) + 97);
    }
    
    return char;
  });
}

// The encoded string to decode
const encodedString = 'Pbatenghyngvbaf ba ohvyqvat n pbqr-rqvgvat ntrag!';

// Decode and print the message
console.log(rot13Decode(encodedString));