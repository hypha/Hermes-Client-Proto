
function HermesData() {
    return fetch('http://olaf:5050')
    .then(res => res.json())
    .then(function(out) {
        console.log("fetch: " + out);
        let data = out;
        var nodes = out.elements.map( function(e) {return {"id": e.uuid, "label": e.name}});
        var edges = out.functions.map( function(f) {return {"id": f.uuid, "label": f.name,
                                                     "source": f.sourceId, "target": f.targetId}});
        let sigma =  {"nodes":nodes, "edges": edges};
        return {"data": data, "sigma": sigma};
    }.bind(this))
    .catch(err => console.error(err));
}

export default HermesData;






// class HermesData{
//   constructor() {
//     self = this;
//   }
//     var fetchData = function() {
//       fetch('http://olaf:5050')
//       .then(res => res.json())
//       .then(function(out) {
//           thais.data = JSON.stringify(out)
//           console.log("changed:" +this.data)
//       })
//     .catch(err => console.error(err));
//   }
//
//   var getData = function() {
//     this.fetchData()
//     console.log("final" + JSON.stringify(this.data))
//     return this.data
//   }
// }
//
// export default HermesData;
