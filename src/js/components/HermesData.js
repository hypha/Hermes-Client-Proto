class HermesData {


  getData() {
    return fetch('http://olaf:5050',{

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
