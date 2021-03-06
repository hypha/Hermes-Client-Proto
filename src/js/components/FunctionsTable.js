import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import HermesData from "./HermesData";

import 'fixed-data-table-2/dist/fixed-data-table.min.css';





class TextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

// class MyTable extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//       obj:  {functions: {from: "", to: ""}},
//       data: {}
//   }
//     };
//
//
// componentDidMount() {
//   const d = new HermesData()
//   d.getData().then(function(data) {
//      this.setState((prevState, props) => ({obj: d.getFunction(), data: d }));
//      console.log( this.state.obj);
//    }.bind(this)
//  )
//  }
//
// render() {
//   var {obj} = this.state;
//
//         return <Table
//         rowHeight={70} rowsCount={this.state.d.getSize()} width={1170} height={500} headerHeight={30}>
//
//     />
//     </Table>
// }
// }
//
//
class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {name: 'Rylan', sex: "male"},
        {name: 'Amelia', sex: "female"},
        {name: 'Estevan', sex: "male"},
        {name: 'Florence', sex: "female"},
        {name: 'Tressa', sex: "female"},
      ],
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Name</Cell>}

          cell={
            <TextCell
              data={this.state.myTableData}
              field="name"
            />
          }
          fixed={true}
          width={100}
        />
        <Column
          header={<Cell>Sex</Cell>}

          cell={
            <TextCell
              data={this.state.myTableData}
              field="sex"
            />
          }
          fixed={true}
          width={100}
        />
    </Table>
    );
  }
}
module.exports =MyTable;
