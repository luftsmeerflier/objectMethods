const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(queryObj){
    const query = []; // [ 'id', 2 ]
    Object.entries(queryObj).forEach(q => query.push(...q));
    return this.matchOrNull(query);
  },
  matchOrNull: function(query){
    const matchOrNull =  this.store.heroes.filter( objects => {
      const hero = Object.entries(objects);
      let keyAndValues = []; // [ 'id: 2, name: 'Iron Man', squad: 'Avengers' ] ...
      for(arr of hero){
        keyAndValues.push(...arr);
      }
      //See if a member of keyAndValues includes the query values
      return query.every(includes);
      function includes(entry){
        return keyAndValues.includes(entry);
      }
    });
    return matchOrNull.length > 0 ? matchOrNull : null;
  },
};

console.log(Database.findOne({ id: 2 })); //=> { id: 2, name: 'Iron Man', squad: 'Avengers' }

