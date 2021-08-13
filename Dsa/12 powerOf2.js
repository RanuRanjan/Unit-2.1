function power_2(x){
   
    
    while(x%2==0){
        x=x/2
    }
    //console.log(result)
   
     if(x==1){
       console.log("True")
     }
     else {
       console.log("False")
     }

    }





function runProgram(input) 
{
    var newInput = input.trim().split("\n");
    // console.log(newInput)
    var n = Number(newInput[0].trim());
    //console.log(n)
    for(var i =1;i<=n;i++){
       // console.log(newInput[i].trim().split(" ").map(Number))
        var data =newInput[i].trim().split(" ").map(Number)
    // console.log(data);
    power_2(data)
    }
}
  
  if (process.env.USERNAME ==="ranus") {
      runProgram(`2
      2
      3`);
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