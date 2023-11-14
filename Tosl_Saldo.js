function N(s){ return Number(s)}
function np(a){let o=1; for( i in a){o=o*a[i]}; return o}
function eset(wr,k,tf,z, p1,p2){ 
  z=z *(p1==null?1: p1.slice(0,1)==p2 ?1,0)
  if(wr>1)e.set(tf,z)
  k.push(tf+" = "+z)
}

function setSaldo(e ,wr){  if(wr==null) wr=0
// x  let t="SALDO,PLAN,CASH,BANK,OTHR".split(",")  //= target?
  let o={"zn":0,"proj":1,"tr":2,"st":3,"rcn":4,"rcnt":4}      //= object
  let k=Object.keys(o), s=""
  for( let i=0;i<k.length;i++){ let ki=k[i] ,vi=e.field(ki)
    s=i+" "+ki +" = "+vi
    switch (o[ki]){
    case 1: vi=vi.slice(-1)=="-" ?-1 :+1 ;break   // proj -
    case 2: vi=vi.slice(-1)=="-" ?-1 : 1
                          ;break  // tr p+ o- tr>
    case 3: vi=vi.slice(0,1)      // st Re Pl Void=0
       vi=vi=="V" ?0 :vi ;break 
    case 4: vi=vi.slice(0,1)       // rcn BankCashaOthr
        vi=vi=="C" ?"CASH" : vi=="V" ? "BANK"  : "othr"  
    }
    s+= "=>"+vi ; k[i]= s
    o[ki]=vi
  }
 e.set("TestOUT", k.join("\n"))
 if(wr>0){
  
    zn=np([o.zn,o.proj,o.tr])
    if(o.st<1)zn=0
    if(o.tr == ">") zn = -zn
    
    eset( "SALDO",zn);
    eset("PLAN", zn,o.st,"P") 
    eset("CASH" ,zn,o.rcn,"C")
    eset("BANK",zn,o.rcn,"B")
    eset("OTHR",zn,o.rcn,"o")
    if(o.tr== ">") eset(o.rcnt,-zn)
  }
  return  k
} 

// ===
db=lib().entries()
 t=setSaldo(db[5],1)
log(" \n"+t.join("\n") +" \n \n")
//log( np(["a","22"]))

  
