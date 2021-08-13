function runProgram(input) {
  
var newInput =input.trim().split("\n");
var [layer,rows,col]=newInput[0].trim().split(" ").map(Number)
var arr=newInput[1].trim().split(" ").map(Number)
var count=0;



// for(i =0;i<layer;i++){
//       for(j=0;j<rows;j++){
//             var threedarr=[]
//               for(k=0;k<col;k++){
//                   threedarr.push(arr[count++]);
                   
//               }
//               console.log(threedarr.join(" "))
//       }
var threedarr=[]
for( var i=0 ;i<layer;i++){
      var layerarr=[];
      for(var k=0;k<rows;k++){
            var rowsarr=[];
            for(var j=0; j<col;j++){
                  rowsarr.push(arr[count++]);

            }
            layerarr.push(rowsarr.join(" "));
      }
      threedarr.push(layerarr.join("\n"));
}
console.log(threedarr.join("\n"));
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
