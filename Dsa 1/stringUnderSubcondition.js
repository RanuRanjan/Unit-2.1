function runProgram(input) {
  
    var s = input;
    var len = s.length
    // console.log(s);

  
    
    for (var i = 0; i < len; i++) {

        for (var j = i + 1; j <= len; j++) {
            var str = " "
            for (k = i; k < j; k++) {
                str = str + s[k]
            
            }
            console.log(str);
            str=""
        }

       
      
 
    }
}


if (process.env.USERNAME === "ranus") {
  runProgram(`abcab`);
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
