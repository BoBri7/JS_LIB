/*
★ isl //iSL => izpis vrsric v poravnavo za statusFild
  stringLines
  n-length = 33
  zaključek=""
★ iOp(fieldName) => če ni blank izpiše, sicer blank
*/
function isl(s,n,z){return iSL(s,n,z) }
function iSL(x,n,z){
  if(typeof(n)=="string"){ z=n;n=33 }
  if(n==null)n=33
  x=x.split("\n")
  for(let i=0;i<x.length;i++){  xi=  x[i]          
    x[i]=(x[i]+" ".repeat(55)).slice(0,n)+(z!=null?z:"")  
    x[i]  +=  "\n"+  xi.slice(n)      
  }
  return x.join("\n")+"\n"                         
}              
function iOp(x){let v=field(x)
 return v.length>0 ? "\n"+x+": "+iSL(v) :""
}

