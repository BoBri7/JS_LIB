/**
*  iT2L(text,LineLength =33) 
*  LL<0 izpiše max LL
*/
function iT2L(x,n){//x= field(x); 
let o="",O=[],m=0
  n=n==null ?33 :n
  x=x.split(" ")
  for(let i=0;i<x.length;i++){ xi=x[i]
    o+=xi>"" ?xi+" " :""
    if(o.length>Math.abs(n)-5){
       m=Math.max(m,o.length)
       O.push(o)
       o=""
    }
  }if(o>"") O.push(o)
return O.join("\n")+(n<0 ?"["+m+"]" :"")
}
//★ END ★
