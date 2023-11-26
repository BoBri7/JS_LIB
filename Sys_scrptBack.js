function scrptBck(sn,fn,n){ 
  let s=String(eval(sn)).split("\n"), o="function: "+sn
  for(let i=0;i<s.length;i++){
    o+="\n"+i+" "+s[i]
  } 
  let e=lib().entries()[n==null ?0 :n]
  e.set(fn, o)  
  return o
} 
//★ write file ★ backup
//?  exists / exists()
function exist(o){ 
  try { let t=o.readChar() ;  return true }
  catch (Er) {return false }
 }
function WFn(txt, fo) { let ff="/MyData/"
 function ttt(x){ return x}
  txt = "Lib:" + lib().title + " fun:" + fo + "\n" + txt;
  var i=0, o="", er="", ern=0, fn=""
  fo+=moment().format(" YYMMDD")
  do {
       fn=ff+fo+"_"+( i++)+".txt"
       txt=fn+" ***z\n"+txt
       o = file( fn);
        log(" ["+ fn+"]  Exist ="+o.exists+i)
     } while (exist(o) );

     try { 
         o.write( txt ); ern++
     }
     catch (Er) {
         er +=  Er.title +" #"+ ern+ "\n";
         message(er);
         log("[ napaka "+er)
     }
     finally {
         o.close();
         return "FW: " + fn + " =>   / er#:" + er+" #"+ ern;
     }
}

//=== end FWn ==
t= scrptBck("WFn","backuptxt",2)
log(t+" \n \n 22:55:22  ")
log( WFn(t,"WFn"))

tf="Livno 23.xlsx"
o= file(tf)
log(o.exists)

return x }
// log( scrptBck("scrptBck", "backuptxt",1))
