function sunstring(len ,data){
    for (var i = 0; i < len; i++) {

        for (var j = i ; j < len; j++) {
            var str = " "
            for (k = i; k <= j; k++) {
                str = str + data[k]
            
            }
            console.log(str);
           
        }

    }
  }




function runProgram(input) {
    var newInput=input.split("\n")

  
     for(var i=1;i<newInput.length;i+=2){
         var len=newInput[i].trim()
         var strs=newInput[i+1].trim()
        //  console.log(len,strs);
       sunstring(len,strs)
         
   
 
}
}

if (process.env.USERNAME === "ranus") {
  runProgram(`1
  4 
  aman`);
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
