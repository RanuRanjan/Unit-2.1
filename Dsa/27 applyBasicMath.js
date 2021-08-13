function runProgram(input) {
  var newInput = input.split("\n");
  var len = +newInput[0];
  var arr = newInput[1].trim().split(" ").map(Number);
  // console.log(arr);

  var min = 100000000;
  var ans = -1;

  for (var i = 0; i < len; i++) {
    var sum = 0;
    for (j = 0; j < len; j++) {
      if (i != j) {
        sum += arr[j];
      }
    }
    console.log(sum);
    if (sum % 7 == 0 && arr[i] < min) {
      min = arr[i];

      ans = i;
    }
    
  }
  console.log(ans);
}


// 14 7 8 2 4
// 14+7+8+2+4




if (process.env.USERNAME === "ranus") {
  runProgram(`5
    14 7 8 2 4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
