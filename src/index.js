module.exports = function check(str, bracketsConfig) {
  let string = str.split("");

  for (let i = 0; i < string.length; i += 1) {
    for (let k = 0; k < bracketsConfig.length; k += 1) {
      if (
        string[i] === bracketsConfig[k][0] &&
        string[i + 1] === bracketsConfig[k][1]
      ) {
        counter = i;
        string.splice(counter, 2);
        i = i - (counter + 1);
      }
    }
    if (string.length === 0) {
      return true;
    }
  }

  return false;
};
