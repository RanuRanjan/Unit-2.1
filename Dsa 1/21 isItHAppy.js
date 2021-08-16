function isHappynumber(n)
 {
    if (n == 1 || n == 7)
        return true;
    var sum = n, x = n;
 
   
    while(sum > 9)
    {
        sum = 0;
 
        
        while (x > 0)
        {
            var d = x % 10;
            sum += d * d;
            x /= 10;
        }
        if (sum == 1)
            return true;
        x = sum;
    }
    if(sum == 7)
        return true;
    return false;
}




function runProgram(input) {
     var newInput=input.split("\n")
     for(var i=1;i<newInput.length;i++){
         var num=newInput[i].trim().split(" ").map(Number)
        //  console.log(num);
        console.log(isHappynumber(num));
     }
     
}
    

if (process.env.USERNAME === "ranus") {
    runProgram(`3
    19
    2
    312082396`);
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


