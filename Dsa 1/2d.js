// function runProgram(input) {
//   var newinput = input.split("\n");


// }
// if (process.env.USERNAME === "ranus") {
//   runProgram(`4 5
// 1 2 1 4`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }



// var data = [
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4]
// ];

// var sum = 0;

// for (var i = 0; i < data.length; i++){
//     for (var j = 0; j < data[i].length; j++){
//         sum+=data[i][j]
//     }
// }
// console.log(sum);



var data = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];

var sum = 0;
var data1= []

for (var i = 0; i < data.length; i++) {
  for (var j = 0; j < data[i].length; j++) {
      if (i == j || i+j == data-1) {
        data1.push(data[i][j]);
    }
  }
}
// console.log(sum);
console.log(data1);


