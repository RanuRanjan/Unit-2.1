function spiralTraverl(data, row) {
  var left = 0;
  var right = row - 1;
  var top = 0;
  var bottom = row - 1;
  var total = row * row;
  var count = 0;
  var result = "";
  while (count < total) {

    for (let i = left; i <= right; i++) {
      if (count < total) {
        result += data[top][i] + " ";
        count++
      }
    }
    top++
    for (let i = top; i <= bottom; i++) {
      if (count < total) {
        result += data[i][right] + " ";
        count++
      }
    }
    right--;
    for (let i = right; i >= left; i--) {
      if (count < total) {
        result += data[bottom][i] + " ";
        count++
      }
    }
    bottom--;
 
    for (let i = bottom; i >= top; i--) {
      if (count < total) {
        result += data[i][left] + " ";
        count++;
      }
    }
    left++;
  }
   console.log(result);
}



function runProgram(input) {
  input = input.trim().split("\n");
  
    var row = +input[0];
  var data = [];

    for (var j = 1; j <= row; j++){
      data.push(input[j].trim().split(" ").map(Number));
    }
   spiralTraverl(data,row);
  
}
if (process.env.USERNAME === "ranus") {
  runProgram(`4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8`);
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