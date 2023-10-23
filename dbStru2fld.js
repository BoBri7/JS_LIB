/**
function dbStru(dfSf,val)
  (dfSf) field to write
   val  1 write values /0= not
  return zapiše strukturo baze v polje dbStru
*/
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
//log(dbStru2fld("dbStru"))
function test(x){return x==null ? "test"  :x }
//★End
