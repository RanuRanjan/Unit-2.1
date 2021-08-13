function runProgram(input) {
    var newInput=+input;
    // console.log(newInput)
    var sum=0;
    for(var m=1;i>=newInput;i+=2){
          sum+=i
    }
   console.log(sum);
}
    

if (process.env.USERNAME === "ranus") {
    runProgram(`6`);
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


