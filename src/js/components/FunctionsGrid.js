import React from 'react';
import ReactDataGrid from 'react-data-grid';
import HermesData from "./HermesData";


export default class FunctionsGrid extends React.Component {
  constructor(props) {
    super();

    this.state={
      obj:{functions:[]},
      columns: [
        { key: 'from', name: 'From', width: 80, editable: true },
        { key: 'to', name: 'To', width: 80, editable: true },
        { key: 'func', name: 'Function', editable: true },
        { key: 'weight', name: 'Weight', editable: true }
        ],
    };

    console.log(this.state);
    this.rowGetter = this.rowGetter.bind(this);
  }

  componentDidMount() {
    const d = new HermesData()
    d.getData().then(function(data) {
       this.setState((prevState, props) => ({obj: data, hermes: d}));
       console.log( this.state.obj);
     }.bind(this)
   )
    //  .catch(err => console.error(err));

  }

  rowGetter = (i) => {

    console.log(this.state.hermes.getElementsObj())
    // console.log(this.state.obj.functions[i].sourceId)
    // let source = this.state.obj.functions[i].sourceId
    // let elem = this.state.hermes.getElementsObj()
    // console.log(source)
    // console.log(elem)
    // let a = Promise.all(this.state.hermes.getElementsObj());
    // console.log(Object.getOwnPropertyNames(a))
    // console.log(a)
    return {
      // from: Promise.all(this.state.hermes.getElementsObj())
      //         .then(function (results) {
      //             results.forEach(function (result) {
      //               return result.get(this.state.obj.functions[i].sourceId).name;
      //               ;
      //         }),

      from: this.state.hermes.getElementsObj().get(this.state.obj.functions[i].sourceId).name,
      to: this.state.hermes.getElementsObj().get(this.state.obj.functions[i].targetId).name,
      func: this.state.obj.functions[i].name,
      // func: this.state.columns[1].key,
      // func: [ 'hair dryer', 'dish washer' ].randomElement(),
      weight: Math.round( Math.random() * 1000 )
    };
  }



  render() {
    return  (
      <div>
      { this.state.obj.functions.length ?
        <ReactDataGrid
          columns={this.state.columns}
          rowGetter={this.rowGetter}
          rowsCount={1}
          minHeight={500} />
        : <li>Loading...</li>
      }
      </div>
    );
  }
}
