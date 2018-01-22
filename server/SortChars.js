const sortChars = (word) => {
  return word.split('').sort((a, b) => {
    return b - a;
  }).join('');
  
}

module.exports = sortChars;
