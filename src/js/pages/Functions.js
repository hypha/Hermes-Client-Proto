import React from "react";

import Article from "../components/Article";

import MyTable from "../components/FunctionsTable";

export default class Functions extends React.Component {
  render() {
    return (
      <div>
        <h1>Functions > User </h1>
        <div class="container"> <MyTable /> </div>
      </div>
    );
  }
}
