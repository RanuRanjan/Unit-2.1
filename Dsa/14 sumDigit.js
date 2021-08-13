function runProgram(input) {
   var newInput=input.split("\n")
   var testCasa= +newInput[0]
   for(var i=2;i<newInput.length;i+=2){
       var arr=newInput[i].trim().split("").map(Number)
    //    console.log(arr);
    var add=0
    for(var j=0;j<arr.length;j++){
       add+=arr[j]
      
    }
    console.log(add);
   }
  
}
    

if (process.env.USERNAME === "ranus") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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


