function runProgram(input) {
  
var newInput =input.trim().split("\n");
// console.log(newInput)
var test = newInput[0].trim().split(" ").map(Number);
var n = test[0];
var m = test[1];
var l = test[2];
var arr =newInput[1].trim().split(" ").map(Number);
// console.log(data)
var max =0;

for(i =0;i<n;i++){
for(j=0;j<m;j++){
        var res="";

        for(k=0;k<l;k++){
                res+=(arr[max++])+" ";
             
        }
        console.log(res)
}


}



}
    

if (process.env.USERNAME === "ranus") {
    runProgram(`2 2 2
    1 2 3 4 5 6 7 8`);
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
