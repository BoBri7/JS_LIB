function scrptBck(sn,fn,n){ 
  let s=String(eval(sn)).split("\n"), o="function: "+sn
  for(let i=0;i<s.length;i++){
    o+="\n"+i+" "+s[i]
  } 
  let e=lib().entries()[n==null ?0 :n]
  e.set(fn, o)  
  return o
} 

// log( scrptBck("scrptBck", "backuptxt",1))
