/*
* izpis faz
*/
function iii(n){
  function dA( a){ let x =  a<180 ? a-90 : 270-a
    return "="+(a<180 ?"E" :"W")+ ("  "+(x>0?"+":"")+x).slice(-3) +"°"
  }
  let d= moment(field( "dan"+n)).format(" DD.MM. ")
  let u= moment(field( "ura"+n)).format("HH:mm  ")
  let a= field( "azimut"+n) 
  let da= a==null  ? " ~"  : dA(a)
  
   return (a==null ? "❔" :a<180 ?"↗️":"↘️")
   +(d.slice(0,1)=="I" ?"~~.~~.~~" :d ) 
   +(u.slice(0,1)=="I" ?"~~:~~"       :u )
   +(a==null ?"  ~" :("  "+a).slice(-4) +"° "+ da )
 }
/*
leva poravnava za StatusField
*/
function ii(x){const n=33
  return ( iii(x)+" ".repeat(n)).slice(0,n)+"."
}
