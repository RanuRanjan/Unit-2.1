function genrateSubstring(len,data){
    for (var i = 0; i < len; i++) {
      
        for (var j = i ; j < len; j++) {
            var str = " "
            for (k = i; k <= j; k++) {
                str = str + data[k]
            
            }
        
           return(str);
        }

    }
}


function runProgram(input) {
     var newInput=input.split("");
     var len=+newInput.length;
    //  console.log(newInput);
  
var substring=(genrateSubstring(len,newInput));
   console.log(substring);



   var  sum = 0;
   for (var i = 0; i < substring; i++) {
       var ch = substring.charAt(i);
       if (ch == 'a' ||  ch == 'i'
           || ch == 'o' || ch == 'u')
           sum += substring[i];
   }

   
   console.log(sum);
}
    

if (process.env.USERNAME === "ranus") {
    runProgram(`dangerouscovid`);
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


