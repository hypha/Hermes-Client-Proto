import React from 'react';
import ReactDataGrid from 'react-data-grid';
import HermesData from "./HermesData";


export default class FunctionsGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { key: 'dir', name: 'DIR' },
        { key: 'partner', name: 'Partner' },
        { key: 'func', name: 'Function' },
        { key: 'weight', name: 'Weight' }
      ],
    };
  }



  rowGetter(i) {
    Array.prototype.randomElement = function () {
      return this[Math.floor(Math.random() * this.length)]
    };

    return {
      dir: [ "<--", "-->" ].randomElement(),
      partner: [ 'hair dryer', 'dish washer' ].randomElement(),
      func: [ "kick", "spit" ].randomElement(),
      weight: Math.round( Math.random() * 1000 )
    };
  }


  render() {
    return  (
      <ReactDataGrid
        columns={this.state.columns}
        rowGetter={this.rowGetter}
        rowsCount={50}
        minHeight={500} />
    );
  }
}
