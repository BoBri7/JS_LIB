
/* testiranje objekta db in fi == nista odprta
ky=Object.keys(db), aky =[] //lib ni berljiv
for(let i=0;i<ky.length;i++){ ki=ky[i]
  aky.push( db[ki] )
} 
 o= db+"  p="+ typeof(db)  +" ky"+ky.length +" {"+aky.join("; ")
 +" S:"+ Object.isSealed(db)+" F:"+Object.isFrozen(db)
  + "} \n"+o
*/
/* testing:
log( dbStru2fld("dbStru",0,1))
function test(x){return x==null ? "test"  :x }
*/
//★End


/* prev ver ★★★★★
function dbStru2fld(dbSf,v){dbSf=dbSf==null ?"dbStru" :dbSf
  function  s(t,n){ if(n==null) n=15
    t=String(t)
    return t+" ".repeat(Math.max(1,n-t.length))+"| "
  }

  let db=lib()
  let dbf=db.fields()
  let dbe=db.entries()[0]
  let o= "dbStru: "+lib().title
  for( let ii=0; ii< dbf.length; ii++){ fi=dbf[ii]
    o+= "\n"                                   
    o+= s(fi)
    o+= s(String(typeof( dbe.field(fi))).slice(0,3) ,5)                 
    o+= v!=null ?dbe.field(fi) :""                        
  }
  dbe.set(dbSf,o)
  return o+"\n========\n"
}
//dbe=db.entries()[0].set("dbSf",dbStru())
//==== end ===
log(dbStru2fld("dbStru")) // Temp off
function test(x){return x==null ? "test"  :x }
*/ 
//end prev
