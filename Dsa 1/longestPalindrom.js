

var n = "goodracecar";


for (i = 0; i < n.length; i++){
    for (j = i + 1; j <= n.length; j++){
        var str =" ";
        for (k = i; k < j; k++ ) {
            str+=(n[k]);
        }
       
       
    }
     
}
console.log(str);