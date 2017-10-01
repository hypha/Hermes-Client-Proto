import React from "react";
import HermesData from "../components/HermesData";


export default class ItemLister extends React.Component {
	constructor() {
  	super();
 		 this.state={obj:{elements:[]}};
  }

  componentDidMount() {
    const d = new HermesData()
    d.getData().then(function(data){
       this.setState({obj: data});
       console.log( this.state.obj.functions);
     }.bind(this));

  }


  render() {
  	return(
      <div>
    	<ul>
          {this.state.obj.elements.length ?
          	this.state.obj.elements.map(item=><li key={item.uuid}>{item.name}</li>)
            : <li>Loading...</li>
          }
      </ul>
      </div>


   )
  }
}
