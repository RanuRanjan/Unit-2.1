var input ="masaischool"

function runProgram(input) {
    
	var result = 0;
    var n = input.length;
  
    function countSubstringWithEqualEnds(s) {
        for (i = 0; i < n; i++) {
            for (j = i; j < n; j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    result++;
                }
  
                return result;
            }
        }
    }

   console.log(countSubstringWithEqualEnds(input));


}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});