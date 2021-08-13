function distinctSubstring(data) {
    var len=data.length

    var obj={}
    for(var i =0;i<len;i++){
          if(obj[data[i]]==undefined){
                obj[data[i]]+=1
          }
          else{
            obj[data[i]] =1
          }
    }

    var res=Object.keys(obj)
    // console.log(res);
    return res.length
}

function runProgram(input) {
  var newInput = input.split("\n");
  var testcase = +newInput[0];
 
  for (var i = 1; i < newInput.length; i += 2) {
    var len = +newInput[i];
    var str = newInput[i + 1].trim().split("");
    // console.log(str);

    
    var arr=[]
    for (var j = 0; j < len; j++) {
      var sub = "";
      for (var k = j; k < len; k++) {
        sub = sub + str[k];
      //   console.log(sub);
      arr.push(sub)
      }
    }
    console.log(distinctSubstring(arr)); 
// console.log(arr);
  }
}

if (process.env.USERNAME === "ranus") {
  runProgram(`2
    5
    abcde
    3
    aaa`);
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
