/*  v1 25. 11. 2023 10:55
 * function dbStruCfld(ln=1,fn = dbStru, cs=1) 
     ln: {1} ## line numbers / {0} brez 
     fn: field to write {dbStru}
     cs: {1} prevzame obstoječe komentarje
        //if f(fn) empty => 0

      //★ if ln#==$ shift parameters <=
 * try set(o,fn)
 * return zapis + zapiše strukturo baze v polje dbSf
*/ 
// test dbStru. =★12
function dbStruCfld(ln, dbSf, cs){                             
  function  s(t,n){     t=String(t); if(n==null) n=15
    return t+" ".repeat(Math.max(1,n-t.length))+"| "  }   
  function u(s){ return s.toUpperCase() }
  o=typeof(ln)

/*
  if( typeof(ln)=="string
  if( !isNaN(dbSf) ){ ln=vv;  vv=dbSf;  dbSf=null  }  
  dbSf=dbSf==null ?"dbStru" :dbSf
  //= test return "tf="+dbSf+"<"+
  let db=lib(), dbf=db.fields(), n=dbf.length,oi=""
  let dbe=db.entries()[0]   //★ za izpis vrednosti if( vv)
  let o= (ln>0?"=":"\n")+"dbStru: "+lib().title,pis=o.length

  for( let ii=0; ii<n ; ii++){ fi=dbf[ii]  //=★★★ zanka ★★★
    oi= ln>0 ?String(1001+ii).slice(n>99 ?3 :2)+" " :""             
    oi+= s(fi)
    oi+= s(String(typeof( dbe.field(fi))).slice(0,3) ,5)                 
    oi+= vv>0 || vv<-1  ?dbe.field(fi) :""     //= zapis vrednosti /vv  

    if(typeof(ln)=="string") {
       let iis =u(oi).indexOf(u(ln))
       if(iis >= 0){ oi+= "["+iis+ "  $¢"+ln } 
      } 
      o+="\n"+ oi     
   }

  //if(vv >=0) {
//    try { dbe.set(dbSf, o)  } //= write to LastEntry /vv
//    catch (Er){ o+="\n★ lib() nima target fielda "+dbSf }
// }
*/
  return o
}
log ( dbStruCfld("ttt") )
