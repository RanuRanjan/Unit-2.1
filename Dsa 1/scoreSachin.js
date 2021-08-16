function runProgram(input) {
    var newInput = input.split(" ");
    // console.log(newInput);
    var currentHighscore = Number(newInput[0]);
    var sachinScore = Number(newInput[1]);
    
    if (sachinScore< currentHighscore) {
        console.log("Not Yet");
    }
    else if (sachinScore > currentHighscore) {
        console.log("Broken");
    }
    else {
        console.log("Woa");
    }
   
 
}
if (process.env.USERNAME === "ranus") {
  runProgram(`264 200`);
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
