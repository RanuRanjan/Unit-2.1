function Weight(data){
    var sum=0;
    for(var j=0;j<data.length;j++){
        sum+=data[j]*j+data[j]
    }
    return sum
}



function runProgram(input) {
    var newInput=input.split("\n")
    for(var i=1;i<newInput.length;i+=2){
        var len=+newInput[i]
        var arr= newInput[i+1].trim().split(" ").map(Number)
      console.log(  Weight(arr));
    }
}
    

if (process.env.USERNAME === "ranus") {
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1`);
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


