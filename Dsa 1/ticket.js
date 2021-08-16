function runProgram(input) {
  var newinput = input.split("\n");
  //   console.log(newinput);
  var a = newinput[0].trim().split(" ").map(Number);
  var b = newinput[1].trim().split(" ").map(Number);
  // var aa = a.split(" ").map(Number);
  // var bb = b.split(" ").map(Number);
//   console.log(a);
//   console.log(b);
  // console.log(a);
  // console.log(b);
  var sum = 0;

    for (i = 0; i < a.length; i++) {
      sum += (a[i]*b[i])
    }
    console.log(sum)
}
if (process.env.USERNAME === "ranus") {
  runProgram(`1200 1400 2000
5 6 2`);
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
