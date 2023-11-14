function noRepeatedLetters(arr){
  const noNumbers = arr.filter(a => typeof a === 'string');
  return noNumbers.map(element => element.split('').filter((value, index) => element.indexOf(value) === index).join(''))
}

console.log(noRepeatedLetters([3, "aab", "abaa", "baccbaa"]))