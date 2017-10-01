class HermesData {

  constructor(/* url string */ url) {
      this.url = url || 'https://apollon.planewalk.net/hermes/server/';
      this._cache = [];
      this.pageSize = 1;
      this.size = 0;
      this.getData(url);
  }
  getData() {
    return fetch(this.url, {

      method: 'get',
      dataType: 'jsonp',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(err => console.error(err));
  }



  getSigma() {
    return this.getData()
    .then(function(data) {
      var nodes = data.elements.map( function(e) {return {"id": e.uuid, "label": e.name}});
      var edges = data.functions.map( function(f) {return {"id": f.uuid, "label": f.name,
      "source": f.sourceId, "target": f.targetId}});
      let sigma =  {"nodes":nodes, "edges": edges};
      return {"data": data, "sigma": sigma};
    }.bind(this));
  }

  // getFunction() {
  //   return this.getData()
  //   .then(function(data) {
  //   var func = data.functions
  //   var elemt = data.elements
  //   var elemtMap = elemt.reduce((map, item) => map.set(item.uuid, item.name), new Map);
  //   let result = func.map((item) => (Object.assign({
  //     from: elemtMap.get(item.sourceId),
  //     to: elemtMap.get(item.targetId)
  //   }, item)));
  //   console.log(result)
  //   }.bind(this));
  // }

  getElementsObj() {
    return this.getData()
    .then(function(data) {
      return data.elements.reduce((map, item) => map.set(item.uuid, item), new Map);
    }.bind(this));
  }


getFunction() {
  var that = this;
  return this.getElementsObj()
  .then(function(functions) {
    console.log(j);
    that.size = j["total"];
    that._cache = j["table"];
    return {from: this.state.hermes.getElementsObj().get(this.state.obj.functions[i].sourceId).name,
      to: this.state.hermes.getElementsObj().get(this.state.obj.functions[i].targetId).name,
      func: this.state.obj.functions[i].name,
      // func: this.state.columns[1].key,
      // func: [ 'hair dryer', 'dish washer' ].randomElement(),
      weight: Math.round( Math.random() * 1000 )}

      // from: Promise.all(this.state.hermes.getElementsObj())
      //         .then(function (results) {
      //             results.forEach(function (result) {
      //               return result.get(this.state.obj.functions[i].sourceId).name;
      //               ;
      //         }),


    }.bind(this));
  };

  getObjectAt(/*number*/ index) /*?object*/ {
    if (index < 0 || index > this.size){
        return undefined;
    }
    if (this._cache[index] === undefined) {
        //this._cache[index] = this.createFakeRowObjectData(index);
    }
    return this._cache[index];
}

getSize() {
    return this.size;
}

}

export default HermesData;




// function HermesData() {
//     return fetch('http://olaf:5050')
//     .then(res => res.json())
//     .then(function(data) {
//         console.log("fetch: " + data);
//         var nodes = data.elements.map( function(e) {return {"id": e.uuid, "label": e.name}});
//         var edges = data.functions.map( function(f) {return {"id": f.uuid, "label": f.name,
//                                                      "source": f.sourceId, "target": f.targetId}});
//         let sigma =  {"nodes":nodes, "edges": edges};
//         return {"data": data, "sigma": sigma};
//     }.bind(this))
//     .catch(err => console.error(err));
// }
//
// export default HermesData;
