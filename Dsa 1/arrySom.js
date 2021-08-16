var arr = [2, 4, 5, 3, 6, 8];
// Sample Output - [2, 6]
var n = arr.length

var even = []
 
for (var i = 0; i < n; i++){
    if (i % 2 == 0 && arr[i] % 2 == 0) {
       even.push(arr[i]);
    }
}
console.log(even)