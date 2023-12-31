/*
* izpis faz 
* za FullMun() lib
* leva poravnava za StatusFld
*/
function iFM(n,z){ //izpis mun 
  function dA1( a){ let x =  a<180 ? -(a-90) : -(270-a)
    return "="+(a<180 ?"E" :"W")+ ("  "+(x>0?"+":"")+x+"°").slice(-4) 
  }
  function A(x){ return Math.abs(x)}
  function dA( a){ let x =  a<180 ? -(a-90) : -(270-a)
    return "="+(a<180 ?"E" :"W")+ ("  "+(x>0?"⬆":"⬇")+A(x)).slice(-3) +"°"
  }

  let d= moment(field( "dan"+n)).format(" DD.MM. ")
  let u= moment(field( "ura"+n)).format("HH:mm  ")
  let a= field( "azimut"+n) 
  let da= a==null  ? " ~"  : ( z==null ?dA(a)  :dA1(a) )
  
   return (a==null ? " ❔" :a<180 ?"↗️":"↘️")
   +(d.slice(0,1)=="I" ?"~~.~~.~~" :d ) 
   +(u.slice(0,1)=="I" ?"~~:~~"       :u )
   +(a==null ?"  ~" :("  "+a).slice(-4) +"° "+ da )
 }
// leva poravnava za StatusField FM
function isfm(x,n){
  return ( iFM(x)+" ".repeat(55)).slice(0,n==null?33:n)+"\n"
}
//★★ end ★★
