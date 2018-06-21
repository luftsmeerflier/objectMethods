const Database = {
 store: {
  tuplefy: function(objArray){
    let tuples = [];
    objArray.forEach(obj => {
      let objEntries = Object.entries(obj);
      tuples.push(objEntries);
    });
    return tuples;
  },
  
},

