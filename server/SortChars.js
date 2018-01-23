const sortChars = (word) => {
  return word.split('').sort((a, b) => {
    return a < b ? 1 : -1;
  }).join('');
}

module.exports = sortChars;
