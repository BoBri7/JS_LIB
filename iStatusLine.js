function iLJ(x,n){
  x=x.split("\n")
  for(let i=0;i<x.length;i++){
    x[i]=(x[i]+" ".repeat(55)).slice(0,n==null?33:n)                         
  }
  return x.join("\n")                         
}              
