function runProgram(input) {
  var newInput = input.trim().split("\n");
  var len = +newInput[0];
  var arr = newInput[1].trim().split(" ");
  // console.log(arr);
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    if ((obj[arr[i]] )=== undefined) {
      obj[arr[i] ]= 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  // console.log(obj);
   var max=0;
   
   for(key in obj){
     if(max<obj[key]){
       max=obj[key]
       var res=key
     }
   }
   console.log(res);
  
}
if (process.env.USERNAME === "ranus") {
  runProgram(`5
A
ABA
ABA
A
A`);
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
