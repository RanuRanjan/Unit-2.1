var input = "masaischool"

count = 0;
for (var i = 0; i < input.length; i++) {
    if (input[i] != "a" && input[i] != "e" && input[i] != "i" && input[i] != "o" && input[i] != "u") {
      // console.log(input[i]);
    count++;
  }
}
console.log(count);
