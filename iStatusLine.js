function isl(x,n,z){return iSL(x,n,z) }
function iSL(x,n,z){
  if(typeof(n)=="string"){ z=n;n=33 }
  x=x.split("\n")
  for(let i=0;i<x.length;i++){
    x[i]=(x[i]+" ".repeat(55)).slice(0,n==null?33:n)+(z!=null?z:"")                     
  }
  return x.join("\n")+"\n"                         
}              
