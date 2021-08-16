function runProgram(input) {
  var newInput = input.split("");
  console.log(newInput);
  var str=newInput.join(" ")
  // console.log(or);
  var ans = true;
  

    for (var i = 0; i < newInput.length/2; i++) {
      if(str[i] !== str[newInput.length - 1 - i) {
      ans = false;
      break;
    }
    i--;
  }
  if (ans) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

if (process.env.USERNAME === "ranus") {
  runProgram(`121`);
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
