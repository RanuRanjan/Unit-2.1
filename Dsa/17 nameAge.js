function runProgram(input) {
    var newInput=input.split(" ")
    var name=newInput[0].trim()
    var gender= newInput[1].trim()
    if(gender=="M"){
        console.log(`Hello Mr. ${name}`);
    }
    else{
        console.log(`Hello Mrs. ${name}`);
    }
}
    

if (process.env.USERNAME === "ranus") {
    runProgram(`Prateek F`);
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


