function repeatChar(str){
    var obj = {};
    for(i = 0; i <str.length ; i++) {
    
    if(obj[str[i]] === undefined){
        obj[str[i]] = 1;
    }
    else {
        obj[str[i]] += 1;
    }
}
for(key in obj){
    if (obj[key] == 1 ){
        console.log("Unique");
        break;
    }
    else{
        console.log("No");
        break;
    }
}
}

function runProgram(input) {
    var newInput=input.split("")
    // console.log(newInput);
    repeatChar(newInput)
}
    

if (process.env.USERNAME === "ranus") {
    runProgram(`masai`);
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


