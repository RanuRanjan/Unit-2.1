function Chintucandy(num) {
  var i = num;
  var count = 0;
  while (num >= 10) {
    count += num/10; 
    num += num/10-(num/10)*10;
    
  }
  count=count+i;
  console.log(Math.ceil(count));
    
//   console.log(num + count);
}

function runProgram(input) {
  var newInput = input.trim().split("\n");

  for (var i = 1; i < newInput.length; i++) {
    var data = newInput[i].trim().split(" ").map(Number);
    // console.log(num);
    
   Chintucandy(data)
  }
}

if (process.env.USERNAME === "ranus") {
  runProgram(`6
    1
    10
    19
    9876
    12345
    1000000000`);
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
