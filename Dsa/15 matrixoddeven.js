



function runProgram(input) {
  var newInput = input.trim().split("\n");
  var testCase = +newInput[0];
  // console.log(testCase);
  var line = 1;

  for (var i = 0; i < testCase; i++) {
    var [row, col, type] = newInput[line++].trim().split(" ").map(Number);
    console.log(row, col, type);
    var arr = [];
    for (var j = 0; j < row; j++) {
      arr.push(newInput[line++].trim().split(" ").map(Number));

     
    }
    // console.log(arr);
  }
}

if (process.env.USERNAME === "ranus") {
  runProgram(`2
    3 3 1
    1 2 3
    4 5 6
    7 8 9
    3 3 2
    1 2 3
    4 5 6
    7 8 9`);
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
