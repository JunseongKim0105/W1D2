let result = [];
function dice(number) {
  for (let i = 0; i < number; i++) {
    let num = Math.floor(Math.random() * 6 + 1);
    result.push(num);
  }
  console.log(result);
}

dice(3);
