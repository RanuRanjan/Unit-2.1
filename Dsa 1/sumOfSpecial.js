function isPrime(len) {
 
    if (len <= 1){
        return false;
    }
    for (var i = 2; i < len; i++){
        if (len % i == 0){
            return false;
        }
 
    return true;
    }
}
function findSum( arr, len)
{
 
    var sum = 0;
 
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++){
 
            
            if (isPrime(j - i)) {
                   sum = sum + (arr[i] - arr[j]);
            }
    }
    return sum;;
}
}


function runProgram(input) {
    newInput=input.split("\n");
    // console.log(newInput);
    
    var len=newInput[0].trim().split("").map(Number);
    var arr=newInput[1].trim().split(" ").map(Number);

    //  console.log(len);
     console.log(arr);
    console.log(findSum(arr,len));
   

    }

if (process.env.USERNAME === "ranus") {
    runProgram(`6
                1 2 3 5 7 12`);
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