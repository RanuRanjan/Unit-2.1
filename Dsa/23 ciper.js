function ciper(data, n) {
  var count = 1;
  var result = "";
  var temp = data[0];
  for (var i = 1; i < n; i++) {
    if (data[i] == temp) {
      count++;
    } else {
      result += temp + count;
      count = 1;
      temp = data[i];
    }
  }
  result += temp + count;
  console.log(result);
}

function runProgram(input) {
  var newInput = input.split("\n");
  for (var i = 1; i < newInput.length; i += 2) {
    var len = +newInput[i];
    var str = newInput[i + 1].trim().split("");
    //

    ciper(str);
  }
}

if (process.env.USERNAME === "ranus") {
  runProgram(`2
    5
    aabcc
    5
    aazaa`);
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
