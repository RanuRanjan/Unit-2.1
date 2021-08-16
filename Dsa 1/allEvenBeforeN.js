function runProgram(input) {
  var newInput = Number(input)
  var sum=[]
  for (i = 0; i < newInput; i++){
    if (i % 2 == 0) {
      sum+=newInput[i]
    }
    
  }
  console.log(sum);
}
if (process.env.USERNAME === "ranus") {
    runProgram(`8`);
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