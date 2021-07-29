function runProgram(input) {
         var newInput=input.trim().split('\n');

         var testCase=Number(newInput[0])

         var len=1;

         while(len<newInput.length){
             var size =Number(newInput[len]);
            //  console.log(size);
             
             
               var arr=[]
               for(var i=0;i<size ;i++){
                   arr[i]=newInput[i+len+1].trim().split(" ").map(Number)
   
               }
               
               var res=""

                  for(var i=arr.length-1;i>=0;i--){
                      res+=arr[i][0]+" "
                  }
                  for(var j=1;j<arr.length;j++){
                    res+=arr[j][j]+" "
                }
                for(var k=arr.length-2;k>=0;k--){
                    res+=arr[k][arr.length-1]+" "
                }

               console.log(res);
               len+=size+1
         }





}
    

if (process.env.USERNAME === "ranus") {
    runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9`);
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


