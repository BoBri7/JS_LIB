function getSaldo(e ,wr){  if(wr==null) wr=0
//x  let t="SALDO,PLAN,CASH,BANK,OTHR".split(",")  //= target?
  let o={"zn":0,"proj":1,"tr":2,"st":3,"rcn":4,"rcnt":4}  //= object
  let k=Object.keys(o), s=""
  for( let i=0;i<k.length;i++){ let ki=k[i] ,vi=e.field(ki)
    s=i+" "+ki +" = "+vi
    switch (o[ki]){
    case 1: vi=vi.slice(-1)=="-" ?-1 :+1 ;break   // proj -
    case 2: vi=vi.slice(-1)                          ;break  // tr p+ o- tr>
    case 3: vi=vi.slice(0,1)      // st Re Pl Void=0
       vi=vi=="V" ?0 :vi ;break 
    case 4: vi=vi.slice(0,1)       // rcn BankCashaOthr
        vi=vi=="C" ?"CASH" : vi=="V" ? "BANK"  : "othr"  
    }
    s+= "=>"+vi ; k[i]= s
  }
 e.set

  return  k
} 

//===
db=lib().entries()
 t=test(db[9])
log(" \n"+t.join("\n") +" \n \n")
