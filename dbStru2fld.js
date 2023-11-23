/*
 * function dbStru(dfSf,val, ln)
   dfSf = dbStru) :field to write
   val  1 write values /0= no >0||<-1=yes -1=ni zapisa dbsf=le returnValue
   ln   1 write line#  /0= not
 * return zapis + zapiše strukturo baze v polje dbSf
*/ 
function dbStru2fld(dbSf,vv,ln){                             
  function  s(t,n){ if(n==null) n=15
    t=String(t)
    return t+" ".repeat(Math.max(1,n-t.length))+"| "
  } //=10
  dbSf=dbSf==null ?"dbStru" :dbSf
  //= test 
  return "tf="+dbsf+"<"

  let db=lib(), dbf=db.fields(), n=dbf.length
  let dbe=db.entries()[0]   //★ za izpis vrednosti if( vv)
  let o= (ln>0?"=":"")+"dbStru: "+lib().title
  for( let ii=0; ii<n ; ii++){ fi=dbf[ii]
    o+= "\n" 
    o+= ln>0 ?String(1001+ii).slice(n>99 ?3 :2)+" " :""      
  //log( String(10001+ii).slice(n>99 ?3 :2)+" "+s(fi)+" /n:"+n)//★★            
    o+= s(fi)
    o+= s(String(typeof( dbe.field(fi))).slice(0,3) ,5)                 
    o+= vv>0 || vv<-1  ?dbe.field(fi) :""     //= zapis vrednosti /vv                   
  }
  if(vv>=0) dbe.set(dbSf,o)   //= write to LastEntry /vv
  return o+"\n========\n"
}
//==== end ===

