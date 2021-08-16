function runProgram(input) {
  var newinput = input.split("\n");

  var a = newinput[0].split(" ").map(Number);
  // console.log(a)
  var add = function (ac, el) {
    return ac + el;
  };

  var b = newinput[1].split(" ").map(Number);
  var aa = a[1];
  var small = [];

  for (var i = 0; i < b.length; i++) {
    if (i < aa) {
      small.push(b[i]);
    }
  }
  console.log(small.reduce(add));
}
if (process.env.USERNAME === "ranus") {
  runProgram(`4 5
1 2 1 4`);
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
