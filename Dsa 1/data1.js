function runProgram(input) {
  var newInput = input.split("\n");
  // console.log(newInput);
    var mini="";
    var max="";
  var len = newInput[0].split("").map(Number);
//   console.log(len);
  var arr =newInput[1].split(" ").map(Number);
    // console.log(arr);
    
    for (i = 0; i < arr.length; i++) {
      if (arr[i] < mini) {
        mini = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }
    console.log(mini);
    console.log(max);
 
}
if (process.env.USERNAME === "ranus") {
  runProgram(`11
55 -5 -8 2 0 9 4 5 6 9 1`);
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
