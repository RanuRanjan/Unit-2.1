function runProgram(input) {
    var newInput = input.split("\n");
    // console.log(newInput);
    var scoreNz = newInput[0].split(" ").map(Number);
    // console.log(scoreNz);
    var scoreEng = newInput[1].split(" ").map(Number);
    // console.log(scoreEng);

    if (scoreNz[0] == scoreEng[0]) {
        if (scoreEng[1] == scoreNz[1]) {
            if (scoreNz[2] == scoreEng[2]) {
                console.log("tie");

            }
            else if (scoreEng[2] > scoreNz[2]) {
                console.log("England");
            }
            else {
                console.log("NewZealand");
                
            }

        }
        else if (scoreEng[1] > scoreNz[1]) {
            console.log("England");
        }
        else {
            console.log("NewZealand");
        }
    }
    else if (scoreEng[0] > scoreNz[0]) {
        console.log("England");
    }
    else {
        console.log("NewZealand");
    }
}
if (process.env.USERNAME === "ranus") {
  runProgram(`241 15 21
241 15 26`);
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
