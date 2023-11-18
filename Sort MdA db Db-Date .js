//sort.★ multiDimArray ★
function Asort(a,c,i){ if(i==null)i=1;if(c==null)c=0
  function compare(a, b) { 
     return a[c]==b[c] ?0 : a[c]<b[c] ?i :-i 
   }
  return a.sort(compare) 
} 

//sort db ★ field ★
function dbSortF(db,cf,i){ if(i==null)i=1
   dbs =  function(a,b) {
      return a.field(cf)<b.field(cf) ?i :-i  // ★★
  }
  return db.sort( {compare: dbs })
} 

//sort db ★ date.field => moment ★
function dbSortD(db,cf,i){ if(i==null)i=1
  function mt(d){return moment(d)}
  dbs =  function(a,b) {
     return mt(a.field(cf))<mt(b.field(cf)) ?i :-i  // ★★
  }
  return db.sort( {compare: dbs })
} 
