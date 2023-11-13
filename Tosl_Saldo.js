/* 13. 11. 2023 9:25 
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
  function ik(x,t){           //= izpis key:value
    function f_(x,t){         //= slice cc tgt
      switch (t){
      case 0: return s(x)     ;break
      case 1: return c(x)     ;break
      case 2: return r_(x) ;break
      default: return "★?"
    } }
     let o= x+": "+  f(x) //+" = " +te(x,t)
     try { o+= "  =  "+f_(x,t) }
     catch (er) {o+= " err"}
     return o
  }
  function c(x){ return s(x)=="-" ?-1 :1 }  //= cc +/-1
  function s(x){ return f(x).slice(-1) }       //= slice
  function r_(){      //=
    switch (f(rc).slice(0,1)) {
    case "C": let o ="CASH" ;break
    case "V":  o ="BANK" ;break
    default :   o ="othr" 
    } return o
  }
  // return Void=0  R/P x=t? 1,0
  function rpv(t){ let x=s("st"); 
     return x=="V" ?0 :t== null ?1 :i_(t,x) 
  }
  function rx(x){ return r_()==x ?1 :0}
  
  let zn="zn",   //= znesek
  pr="proj",      //= projekt {+/-}
  tr="tr" ,          //= trans +p -o =transf
  rc="rcn",        //= račun V* C* ...
  rt ="rcnt",      //= račun => transfer
  st="st"            //= status Re Plan Void
  let z= f(zn)*c(pr)*c(tr)*rpv()

  if(wr > 0) {     //= zapis sald
      e.set("SALDO", z* rpv("R") )
      e.set("PLAN",    z* rpv("P") )
      e.set( "CASH",  z * rx("C") )
      e.set( "BANK",  z * rx("B") )
      e.set( "OTHR",  z *  (1-rx("B")-rx("C")))
      if(s(tr)==">") {  e.set(rct(rt), -zn)  }
  }
  return [ 
         // rc+": "+ f(rc)+" "+r_() ,
          f(rt) ,
          ik(rc,2),        //račun 
          ik(zn,3),       // znexek
          ik(tr,3),         //plač prejem transfer
          ik(pr,1),         // projekt
          (s(tr)==">" ?ik(rt,2):"★"),       // rč.transfer
 
  ]
}
