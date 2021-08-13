function checkPalindrome(str) {
  var len = str.length;
  var rev = "";
  for (var i = len - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  // console.log(rev);
  if (rev == str) {
    return true;

  } 
  else {
    return false;
  }
}

function runProgram(input) {
  var newInput = input;
  var len = newInput.length;

  var max = 0;
  for (var i = 0; i < len; i++) {
    var sub = "";
    for (var j = i; j < len; j++) {
      sub = sub + newInput[j];
      // console.log(sub);
      if(checkPalindrome(sub) && sub.length>max){
        max=sub.length
      }
    }
   
  }
  console.log(max);
}

if (process.env.USERNAME === "ranus") {
  runProgram(`thisracecarisgood`);
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
