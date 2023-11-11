/*
* iT2L izpis Text v Vrstce
 p=
  text
  dolžina =35 /-izpiše dolžino
  #" "pred
  z=$zaključek
  object2eval/end ★
? dve zaporedni dolgi besedi ?

* iL2L( izpis listObjekta v vrstice /checked
 p = ListObj,  LL, hed, z){
*/
function iT2L(x,n,p,z,obj){
  function mm(x){ return Math.max(n,m,oi.length) }
  function c(x){ return x.length }
  const cc =5
  p= p>0 ?" ".repeat(p)   :""  
   //  vrstica.          output mxLL. novaVrstica
  let oi=(n<0 ?"-":""), o=[] , m=0   , xn=""   
  n= n!=null ?Math.abs(n) :35 
  x=x.split(" ")
  for(let i=0;i<c(x);i++){ xi=x[i]  //vse besede ★
  if(xi>" "){
     if( c(oi+xi) < n+5) { oi+=xi+" "}
     else {
       if(n-c(oi) > 5 ) {
          xn="-"+xi.slice(n-c(oi)+cc)+" "//ostanek v novo vrstico
          oi+=xi.slice(0, n-c(oi)+cc)+"-"     // dopolni vrstico
       }
        else  {  xn=xi +" " ;  xi ="" }
     }
     if(c(oi) > n || xn >""){    //== zapis vrstice
        m=mm()
        o.push(oi)
        oi=p+xn;  xn=""
     }
   }
   }if(oi.trim()>" "){ o.push(oi), m= mm() } //==pripis ostanka
   if(obj!=null)o.push(eval(obj))                            //4test variavl v skripti
   if(o[0].slice(0,1)=="-") {    //== pripis dolžine
       o[0]= o[0].slice(1) 
       o.push( "[mxL="+m+"]")
   }
   for(let i=0;i<c(o);i++){oi=o[i] //== desna poravnava+z
      o[i]=(oi+" ".repeat(m)).slice(0,m)
      if(oi.length>m) o[i]+= "+!"+oi.slice(m)
      o[i]+=(z!=null ?z:"")
      try { if(DBG)o[i]+="["+c(oi)+">"+c(o[i]) }  //==t= dolžine vrstic
      catch(er){}
   } 
   return o.join("\n")//+"\no1="+cc+"<"
}
/* prev. ver errors!
function iT2L(x,n,p,z,obj){
  function mm(x){ return Math.max(m,oi.length) }
  function c(x){ return x.length }
  const cc =5
  p= p>0 ?" ".repeat(p)   :""  
   //  vrstica.          output mxLL. novaVrstica
  let oi=(n<0 ?"-":""), o=[] , m=0   , xn=""   
  n= n!=null ?Math.abs(n) :35 
  x=x.split(" ")
  for(let i=0;i<c(x);i++){ xi=x[i]  //vse besede ★
  if(xi>" "){
     if( c(oi+xi) < n+5) { oi+=xi+" "}
     else {
       if(n-c(oi) > 5 ) {
          xn="-"+xi.slice(n-c(oi)+cc)+" "//ostanek v novo vrstico
          oi+=xi.slice(0, n-c(oi)+cc)+"-"     // dopolni vrstico
       }
        else  {  xn=xi +" " ;  xi ="" }
     }
     if(c(oi) > n || xn >""){    //== zapis vrstice
        m=mm()
        o.push(oi)
        oi=p+xn;  xn=""
     }
   }
   }if(oi.trim()>" "){ o.push(oi), m= mm() } //==pripis ostanka
   if(obj!=null)o.push(eval(obj))                            //4test variavl v skripti
   if(o[0].slice(0,1)=="-") {    //== pripis dolžine
       o[0]= o[0].slice(1) 
       o.push( "[mxL="+m+"]")
   }
   for(let i=0;i<c(o);i++){oi=o[i] //== desna poravnava+z
      o[i]=(oi+" ".repeat(m).slice-oi.length+1)+(z!=null ?z:"")
      //o[i]+="["+c(oi)+">"+c(o[i])   //==t= dolžine vrstic
   } 
   return o.join("\n")//+"\no1="+cc+"<"
}
*/
//=======
function iL2L(ListObj, LL, h, z){
  h= h!=null ? h+":" :""
  z= z!=null?z :""
  o=""
  for(let i=0;i<ListObj.length;i++){ let xi=ListObj[i]
    o+=iT2L( (xi.checked ?"[×] " :"[ ] ")+String(xi),LL,4,z)+"\n"
  } 
 return o.length>1 ?h+"\n"+o:""
} //★10
//=========
/* 4 test
x="a12345 b678 c90 d123 e456 t2p=           x"
x+="  a b c f78901m aaaa bbb cccccc dd ee fff ggg"
x+=" dd 1234567 8901234 6789 ]}"

iT2L(x,25,05,".")//,
f=field("teme")
f.push("c2 "+x)
f[2].checked = true
//f[2]+="g+ "+x
//f.join("=\n")+"\n==========="+"\n"+
iT2L(x,-30,4,".","'{mxL='+m") +" \n \n"+
iL2L(f,-35,"= TEME =",".")

//typeof(f)
*/
