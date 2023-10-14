/**
function dbStru(dfSfld)
  (dfSf) field to write
  return zapiše strukturo baze v polje dbStru
*/
function dbStru2Fld(dbSf){
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
    o+= dbe.field(fi)                           
  }
  dbe.set(dbSf==null ?"dbStru" :dbSf,o)
  return o+"\n========\n"
}
//dbe=db.entries()[0].set("dbSf",dbStru())
//==== end ===
//log(dbStru2fld("dbStru"))
