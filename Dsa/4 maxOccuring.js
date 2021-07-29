function runProgram(input) {
    var newInput = input.trim().split("\n");
    var len = Number(newInput[0]);
  
    var str = newInput[1].trim().split(" ").map(Number);
    //console.log(str);
  
    var obj = {};
    for (var i = 0; i < str.length; i++) {
      if ((obj[str[i]] = obj[str[i]])) {
        obj[str[i]] += 1;
      } else {
        obj[str[i]] = 1;
      }
    }
  //   console.log(obj);
    var max = 0;
    var item
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
      0 2 0 6 9`);
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
  