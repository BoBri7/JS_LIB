function setSaldo(e ,wr){  if(wr==null) wr=0
 function N(s){ return Number(s)}
  function np(a){let o=1; for( i in a){o=o*a[i]}; return o}
  function eset(tgtf, znsk, p1,p2){ 
     try {znsk=znsk *(p1==null ?1 : p1.slice(0,1)==p2 ?1 :0)   }
     catch(Err){
         Er+="\n f:"+tgtf+" p1="+p1+" p2="+p2 +" $"+Err.message
     }
     if(wr > 1) { e.set( tgtf, znsk) 
     }
     k.push(tgtf+" = "+znsk)
  }//======== 12
  let o={"zn":0,"proj":1,"tr":2,"st":3,"rcn":4,"rcnt":4}      //= object
  let k=Object.keys(o), s="" ,Er=""
  for( let i=0;i<k.length;i++){ let ki=k[i] ,vi=e.field(ki)
    s=i+" "+ki +" = "+vi
    switch (o[ki]){
    case 1: vi=vi.slice(-1);break //=="-" ?"d" :"x" ;break   // proj -
    case 2: vi=vi.slice(-1)                                          // tr p+1 o-1 tr>0
                  // vi=vi=="-" ?-1 :1 ;
                  break  
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
  
    zn=np([o.zn, o.tr<0 ?-1 :1] , o.proj=="-" ?-1,1)

    if(o.st < 1)zn=0
    if(o.tr == ">") zn = -zn
    try { var er="Er¢ " }
    catch (E){ er+=E.description }
    eset("SALDO",zn);
    eset("PLAN", zn,  o.st,"P") 
    eset("DOLG", -zn,  o.proj,"-")
    eset("CASH" ,zn,  o.rcn,"C")
    eset("BANK",zn,   o.rcn,"B")
    eset("OTHR",zn,   o.rcn,"o")

     
    if(o.tr== ">" ){   //=== TRANSFER ==
       e.set(o.rcnt, e.field(o.rcnt)-zn); 
       e.set("SALDO",0)
       message( e.field("id")+" ★trans> ")
    }
    else{
       // e.set("rcnt",null)
        message(" ni transfer")
      }
  } 
  if(Er != "") {
     log("Er Id#="+e.field("id")+  Er);
     k.push("Err="+Er);
  }
  return  k.join("\n")
} 
//==========

//if(1==1){
//  db=lib().entries()
//  log(setSaldo(db[ 6 ] , 2) +"\n")
//}

/* previous
function setSaldo(e ,wr){  if(wr==null) wr=0
 function N(s){ return Number(s)}
  function np(a){let o=1; for( i in a){o=o*a[i]}; return o}
//  function eset(wr,k,tf,z, p1,p2){
  function eset(tf,z, p1,p2){ 
     try {z=z *(p1==null ?1 : p1.slice(0,1)==p2 ?1:0)}
     catch(E){er+= "\n p1=" +p1+" p2= "+p2+" E$"+E.description}
     if(wr > 1) { e.set(tf,z) }
     k.push(tf+" = "+z)
  }
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
    try { var er="Er¢ " }
    catch (E){ er+=E.description }
    eset("SALDO",zn);
    eset("PLAN", zn,o.st,"P") 
    eset("CASH" ,zn,o.rcn,"C")
//    eset(wr,k, "BANK",zn,o.rcn,"B")
//    eset(wr,k,"OTHR",zn,o.rcn,"o")
    if(o.tr== ">") eset(wr,k,o.rcnt,-zn)
  }
  
  return  k.join("\n")+"\n"+er +" \n\n"
} 
//==========
//setSaldo ( entry(), wr /0 =  1= no wr 2=write )
// sharedSALDO + gitHub function 
DBGx = 1 //=== debuging <<=
if( DBGx >0 ){ ;
  var er== "";
  db=lib().entries();

  if( DBGx =1){  ; //debug 1 entry
     e=db[   5     ]  //== entry #
     t= setSaldo(e ,  1) //1= ?  2= ??
  } 
  else { // zanka all db
   for(let i=0;i<db.length;i++){e=db[i];   t=setSaldo(e,2) }
 }
 log("end")
}


  

*/

