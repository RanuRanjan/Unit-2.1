function runProgram(input) {
    var newInput = input.trim().split("\n");
    var n = +newInput[0];
  var data_1 = newInput[1].trim().split("");
  var str = data_1.sort();
  // console.log(str);
  var obj = {};
  for(i = 0; i < n; i++) {
        // var str = data[i];
      if(obj[str[i]] ===undefined){
          obj[str[i]] = 1;
      }
      else {
          obj[str[i]] +=1;
      }
  }
  //console.log(obj)
  for(key in obj){
      console.log(`${key}-${obj[key]}`)
  
  }
  
  
  }
  if (process.env.USERNAME === "Pushpendra K Pandey") {
      runProgram(`4
      aman`);
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