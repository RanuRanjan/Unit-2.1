function runProgram(input) {
  var newInput = input.trim().split("\n");
  var len = Number(newInput[0]);

  
  var obj = {};
  for (var i = 1; i <=len; i++) {
    var str=newInput[i].trim().split("\n")
    if ((obj[str] = obj[str])) {
      obj[str] += 1;
    } else {
      obj[str] = 1;
    }
  }
  // console.log(obj);
  var max = 0;
  var item=5;
  for (key in obj) {
    
    if (max < obj[key]) {
      max = obj[key];
      item = key;
     // console.log(key, obj[key]);
    }
  }
 // console.log(max);
  console.log(item);
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
