function joinList(array1) {
  let output = '';
  for (let i = 0; i < array1.length; i++) {
    if (i === array1.length - 1) {
      output += array1[i];
    } else {
      output += array1[i] + ', ';
    }
  }
  return output;
}
const conceptList = [
  'gists',
  'types',
  'operators',
  'iteration',
  'problem solving',
];
console.log(`Today I learned about ${joinList(conceptList)}.`);
