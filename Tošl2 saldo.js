/*
★ Bank <=
  Vcr. Visa Credit ==]
  Vdb. Visa Dbt.   ==]=ista?
  Vpy. Visa prePay
   Vsav. varčevalni
★ cash <=  Csh. Cash
? PM. Magna. ? bencin =X ; el.e. =trajnik <= direkt
? DC. diners. =X
*/
/* 
* = updSld(e,w)
* entry
* write return {[obj]}
*/
function updSld(e,wr){ //== 
  function f(x){return e.field(x)}
  function fi(x,t){                //= izpis key:value
    function fx(x,t){         //= slice cc tgt
      switch (t){
      case 0: return s(x) ;break
      case 1: return c(x) ;break
      case 2: return rcn(x) ;break
      default: return "★?"
    } }
     let o= x+":="+  f(x) //+" = " +te(x,t)
     try { o+= "  =  "+fx(x,t) }
     catch (er) {o+= " err"}
     return o
  }
  function c(x){ return s(x)=="-" ?-1 :1 }  //= cc +/-1
  function s(x){ return f(x).slice(-1) }       //= slice
  function rct(x){ let o=""     //= Saldo.target 4transfer
    switch (s(x)) {
    case "C": o ="CASH" ;break
    case "V": o ="BANK" ;break
    default : o ="othr" 
    } return o
  }
  // return Void=0  R/P x=t? 1,0
  function fx(t){ let x=s("st"); return x=="V" ?0:t== null ?1 :ifx(t,x) }
  function ifs(a,b){ return a==b ?1,0}
  
  let zn="zn",     //= znesek
  pr="proj",       //= projekt
  tr="tr" ,        //= trans +p -o =transf
  rc="rcn",        //= račun V* C* ...
  rt ="rcnt",       //= račun => transfer
  st="st"           //= status Re Plan Void
  let z= f(zn)*c(pr)*c(tr)*stx(st)

  if(wr > 0) {     //= zapis sald
      e.set("SALDO", zn* fx("R")  )
      e.set("PLAN",  zn* fx("P")  )
      e.set( "CASH", zn * )
      e.set( "BANK", zn *  )
      e.set( "OTHR", zn *  )
      if(s(tr)==">") {  e.set(rct(rt), -zn)  }
  }
  return [fi(rc,2), //račun 
          fi(zn,3), 
          fi(tr,1),
          fi(rt,3),
          fi(pr,1) ]
}
//============




