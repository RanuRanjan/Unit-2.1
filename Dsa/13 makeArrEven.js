function Even (len){
    
}


function rotateArray(arr,len){
   for(var i=0;i<arr.length;i++){
     for (var j = i + 1; j < len; j++){

   }
     

}



function runProgram(input) {
    var newInput=input.split("\n")
    var testCase=+input[0]
    for(var i=1;i<newInput.length;i+=2){
        var [len]=newInput[i].trim().split(" ").map(Number);
        var arr=newInput[i+1].trim().split(" ").map(Number)
    //    console.log(arr,len);
    }
   
   
    
}
    

if (process.env.USERNAME === "ranus") {
    runProgram(`2
    1
    2
    3
    1 2 3`);
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


