/*
  dbStru22file ( cc =# ?  )
  cc= nul=> createNew; -1 overawrite ??
  get comments from prev
  //MMM. čćđšž *
  //III//ČĆĐŠŽ ★
  ...
*/
function dbStru2file(DBG,cn) {    //=  main function =
  if(" /H/h".indexOf(DBG)>0){
    rv="\n>= dbStru2file(DBG, c ) \n>= return dbStru & WritNF "
    return rv+"\n>= c>0=overwrite DBG>1 apendLog"
  }
  function lg(x){
    if(DBG)log(x);
    if(DBG>1)dbg+="\n"+x
  };                                 
  function sa(x){ return x.split("\n") } ;                              
  function aj(x){ return x.join("\n") }; 
  function len(x){ return x.length }; 
  function mt(d){return moment(d)}      
  function dt(p){p=isNaN(p) ?"D.M.YY HH:mm":"HH:mm"+(p>0?":ss":"")
    return  mt().format(p)
  }  
  //= getFileNum = return newFile#
  function getFN(){ let i=0, fo; 
    function fexist(fo){  
      try { let t=fo.readChar(); return true }
      catch (Er) { return false }
    } //= end fexist 
    do{} while(fexist(file(fn(i++)))&& i<99); //=PreventDedLup
    return i-1;  //=== return newFile#
  } //= end getFN
  
  //= lineNumbering
  function ii(x){return ("000"+x ).slice(-2)+" "}  //= zap.�t. 
  //= fileName 
  function fn(x){return lib().title+" "+x+".dbs" } //= fileName 

  //= readLastWritenFile 
  function readLWF(x) {           
    let fo=file( fn( isNaN(x) ?getFN()-1 :x))
    ra=  fo.readLines()  //=>  Aray of lines
    //fo.close()         //=not neded,  autoClose?
    return ra            //== array of lines
  } //= end readF
  
  //= writeFile #=new.   /overWriteLast  
  function writNF(txt,ov) {                      
    let fni = fn( getFN() -(ov>0?1:0) );
    if( DBG ) fni= "D-" + fni;  //======★★★
    // lg(" Writing "+fni+" l="+sa(txt).length);
    let fo=file( fni )
    let o=fo.write(txt)
    fo.close()
    lg("=WriteFile "+fni+" l="+len(sa(txt))+"/"+len(txt))
    return o //=?testiraj kaj vrne    todo
  } //= end writNewF
  
  //= fn => ky : fildNam | typ |; 
  function fn2ky(fn){ 
    function k(t,n){t+=" ".repeat(n);return t.slice(0,n)+"| " }; 
    function ft(x){x=typeof(e0.field(x));return x.slice(0,3) };                               
    let kt=fn.slice(0,2)=="==" ?"===" :ft(fn); //== page
    return k(fn,20)+k(kt,4)
  } //= end fn2ky
  

  //=======   End Functions ===  ===
  let t0= mt()
  if(isNaN(DBG))DBG=0
  let dbg= DBG>0 ?"\n\n== DBG="+DBG+" c="+cn :""
  lg("DBG Stru2file "+dt(1));   //= init log
  const db = lib();             //= lib
  const e0 = db.entries()[0];    //= entry for typ 
  //= next File#  ? //= entry 4 typeof
  let nfn  =  getFN(), dbs,kys ; 
  
  //= preparing Last Writen dbStru & kys
  if(nfn > 0 ){
    //= read lastFile =>//== log                                                               //= obstaja!
    dbs = readLWF(nfn-1)    //= existing dbStru
    lg("Read dbStru:"+fn(nfn-1)+" #="+len(dbs))  
   
    //== getExistingKys"  //= kys to prev.f.koments
    kys=["kys from "+fn(nfn-1)  ];
    for(let i=1; i< dbs.length; i++){    //= zanka dbs=>kys
      ki = dbs[i].slice(3,31)        //= ccc
      kys.push(ki)           //== kys push 
  //    lg("ky["+i+"]="+ki+"= len="+ ki.length)
    } //= endFor 
   // for(let i=0; i<5; i++){ kys.push(ki)  }
  } else  lg("ni obstoječih zapisov")
 
  //== zanka dbStru ==> dbStruAct
  dba=["dbStru Lib:"+db.title+" "+dt()+"" ] ; 

  dba.push("## fieldName           | typ | opombe");
  
  //== read fields in lib = dbStruAct
  dbf= db.fields();           //= dbFfieldNames
  
  //=== main loop fieldNames
  for(let i=1; i< dbf.length; i++){ 
    let fi = dbf[i]    ;             //= fieldName
    let ky=fn2ky( fi ) ;             //= f.nam => ky
    if(nfn >0){                     //=  chk kys  in prev 
      let cn= kys.indexOf(ky);       //= LineNumber kys
      ky=  cn >0
        ? dbs[cn].slice(3)   //   +( DBG?"   find/"+cn:""  )
        : ky
  
    } //= end if 
    
    //=  ZAPIS KLJUČA+komentarja
    dba.push(  ii(i)  +  ky );          
  }  //= endFor. main loop
  dba.push(  "   = END dbStructure")
  if(DBG>0)dba.push("   "+dt(1)+ " / "+(mt()-t0)+"ms")
  
  //== Write act stru 
  o=writNF( aj(dba)+dbg,cn) ; //=* WRITE FILE  *
  
  //=== "dba","dbs","kys" ===
  return aj( dba )  //=== RETURN ===
} //== end dbStru2file ==

/*function msg(x){ message(x)}
//=======   End Functions ===  ===

log("\n== dbStru == start=\n\n")
//dbStru2file(DBG,cn)
//c>0=overwrite DBG>1=apendLog
//
o=dbStru2file( 2,9 );   //=== call ===
o+=dbStru2file("h");
log(o);

log("== dbStru2file == E N D ==\n");

//= end =; 
*/
