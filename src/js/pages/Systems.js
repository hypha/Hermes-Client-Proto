import React from "react";

export default class ItemLister extends React.Component {
	constructor() {
  	super();
 		 this.state={obj:{elements:[]}};
  }

  componentDidMount(){
  	fetch(`http://olaf:5050/`, {

      method: 'get',
      dataType: 'jsonp',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      }
    })
 		.then(response=>response.json())
    .then(responseData => {console.log(responseData); return responseData;})
    .then(obj=>this.setState({obj}))
    .catch(err => {
        console.log("fetch error" + err);
    })
  }

  render() {
  	return(
    	<ul>
          {this.state.obj.elements.length ?
          	this.state.obj.elements.map(item=><li key={item.uuid}>{item.name}</li>)
            : <li>Loading...</li>
          }
      </ul>

   )
  }
}
