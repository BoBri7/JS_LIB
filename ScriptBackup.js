

//====== prepis/združitev dbStru (novaStru <= opisi 
function f(x){return e.field(x).split("\n")}
function c(x){ return x.slice(0,1)=="=" ?1 :0 }
function ka(t,c){  let a=[] 
  for(let i=1;i<t.length;i++){ let ti=t[i]
    if(c>0) c= ti.indexOf(" ")
    a.push( ti.slice(c,20+c ))
  } return a
}
function ac(a,i,n){ return i<n? a[i]  :"xxxx"}
function ii(s) {return " ."+(s+"."+" ".repeat(15)).slice(0,15)+" |"}

log("//============= ★  \n \n" )
db=lib().entries()
e= db[ db.length -01]  
//e=db0.find(db["id"]==10 )
fi="dbStru"
f1=f(fi);         c1=c(f1[0]); k1= ka(f1,c1); n1=k1.length
f2=f(fi+"1"); c2=c(f2[0]); k2=ka(f2,c2); n2=k2.length
n=Math.max(n1,n2)
k=[] //output array
log( "e.id="+e.field("id")+"a:{"+ f1[0] +"} c:{"+f2[0]+"}")

//" ========= \n" )
log( "f1:"+ f1[0] +" {"+ c1+"}"+n1 )
log("f2:"+ f2[0] +" {"+ c2+"}" +n2 )


k= [ " #     afn    |  typ  |   < = opombe    "  ]
for(let i=0;i<n1;i++){let ai=ac(c1,i,n1), bi=ac(c2,i,n2)
  oi = "\n"+ i+ii(ai) 
  o+="         "+ c2.indexOf(ai)
  o+="         "+ c1.indexOf(bi)
} 

log( o)  //.join("\n") +
*/
//log("\n =============")


