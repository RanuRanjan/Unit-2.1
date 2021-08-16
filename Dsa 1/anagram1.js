function runProgram(input) {
  var newinput = input.split("\n");
  var originalWord = newinput[0].trim();
  var anagram = newinput[1].trim();
    
  var arr =[]
    for (i = 0; i < anagram.length; i++){
        if (anagram.charAt(i) != " ") {
            arr.push(anagram.charAt(i));
        }
    }
    console.log(arr);

  
    
  
  
  // console.log(anagram);
}

if (process.env.USERNAME === "ranus") {
  runProgram(`anagram
nag a ram`);
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
