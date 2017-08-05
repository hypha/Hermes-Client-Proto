import React from "react";

export default class ItemLister extends React.Component {
	constructor() {
  	super();
 		 this.state={items:[]};
  }
  componentDidMount(){
  	fetch(`http://jsonplaceholder.typicode.com/posts`)
 		.then(result=>result.json())
    .then(items=>this.setState({items}))
  }
  render() {
    console.log("systems");
  	return(
      <div>
        <h1>Systems </h1>

      	<ul>
            {this.state.items.length ?
            	this.state.items.map(item=><li key={item.id}>{item.title}</li>)
              : <li>Loading...</li>
            }
        </ul>

      </div>
   )
  }
}
