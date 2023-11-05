/*
★ Bank
  Vcr. Visa Credit ==]
  Vdb. Visa Dbt.   ==]=ista?
  Vpy. Visa prePay
★ cash
  Csh. Cash

PM. Magna. ? bencin =X ; el.e. =trajnik <= direkt
DC. diners. =X
*/
/*
function uSld_1x(e){ 
  function f(x){return e.field(x)}//
  function c(x){ return f(x).slice(0,1)=="-" ?-1 :1 }
  let x=f("zn")
  x=x*c("proj") 
  x=x*c("tr")   // -odliv +priliv >transf [★NI SALDA RAČUNA ★
                         // => MAKRO/TRIGER PREPIS V 2.ZAPIS+Corr1.★
  let s=f("st").slice(0,1)     // Re Pl Void
  let p=x *(s=="V" ?0:1)
   
//  e.set("SALDO",    x*(s=="R" ?1:0))   //saldo
//  e.set("SALDO.p", x*p)                         //saldo plan
  return [x,p ]
}
*/ //===========
function updSld(e,wr){ //CashBank
  function f(x){return e.field(x)}
  function fi(x,t){                //= izpis key:value
     let o= x+":="+  f(x) //+" = " +te(x,t)
     try { o+= "  =  "+frsc(x,t) }
     catch (er) {o+= " err"}
     return o
  }
  function frsc(x,t){         //= slice cc tgt
    switch (t){
    case 0: return s(x) ;break
    case 1: return c(x) ;break
    case 2: return rcn(x) ;break
    default: return "★"
  } }
  function c(x){ return s(x)=="-" ?-1 :1 }  //= cc +/-1
  function s(x){ return f(x).slice(0,1) }      //= slice
//?function eset(x,y){ return [x,y] }  
  function rcn(x){ let o=""     //= Saldo.target
      switch (s(x)) {
      case "C": o ="S.CASH" ;break
      case "V": o ="S.BANK" ;break
      default : o ="s.othr" 
    }
    return o
  }
  function stx(t){ let x=s("st") 
  //  return x=="R" ?"SALDO" :x=="P" ?"PLAN" :0
    return x=="V" ?0 :  t==x ?1 :0
  }

  let zn="zn",       //= znesek
  pr="proj",           //= projekt
  tr="tr" ,               //= trans +p -o =transf
  rc="rcn",             //= račun V* C* ...
  rt ="rcnt"           //= račun => transfer
 // st="st"                 //= status Re Pl Void
  zr= f(zn)*c(pr)*c(tr)
  zp =zr * stx("P")
  zr =zr * stx("R")

  if(wr > 0) {     //= zapis sald
      e.set("SALDO", zr )
      e.set("PLAN"   , zp)
      e.set( rcn(rc),    zr)
      if(s(tr)==">") {  e.set(rcn(rt), -zn)  }
  }
  return [fi(rc,2) ,fi(zn,3)+"r="+zr+" p5"+ zp, fi(tr,1),fi(rt,3),fi(pr,1) ]
}
//============
//o=updSld( entry(),0)
//o.join("\n")

enumFu(updSld,)

/*g
* test.tst
* ★  4 ŠTEVEC VRSTIC ★
*/
