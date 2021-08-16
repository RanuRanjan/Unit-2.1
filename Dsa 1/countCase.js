var arr = ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"];

var str = 'abcdefghijklmnopqrstuvwxyz'

var count = 0

for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr.length; j++){
        for (k = 0; k < str.length; k++){
            if (arr[i][j] == str[k]) {
                count++
            }
        }
    }
}
console.log(count);
