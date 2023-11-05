function enumFu(f,n){ f=String(f).split("\n")
  let o=""
  if(n==null)n=0                    
  for(let i=0;i<f.length;i++){
      o+=(i+n)+" "+f[i]+"\n"
  } return o
} 
