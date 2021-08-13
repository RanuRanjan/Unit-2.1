
  
  function runProgram(input) {
    var mainCount = 0;
    for (var i = 0; i < input.length; i++) {
        var result = "";
        for (var j = i; j < input.length; j++) {
            result += input[j];
            var obj = {};
            for (let i = 0; i < result.length; i++){
                if (obj[result[i]] == undefined) {
                    obj[result[i]] = 1;
                }
            }
            var count = 0;
            for (key in obj) {
                if (key == "a" || key == 'i' || key == 'o' || key == 'u') {
                    count++;
                }
            }
           
            if (count == 4) {

                mainCount++;
            }
            
        }
    }
    console.log(mainCount);
          
}

if (process.env.USERNAME === "ranus") {
    runProgram(`3
    3 1
    1 2 3
    2 2
    1 2
    2 3
    1 2`);
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


