import React from "react";

import Article from "../components/Article";

import {Sigma, sigInst, NodeShapes, EdgeShapes, RandomizeNodePositions, RelativeSize, LoadJSON} from 'react-sigma';

export default class Model extends React.Component {
  render() {

    const hintText = [
      "Hint #1",
      "Hint #2",
      "Hint #3",
      "Hint #4",
      "Hint #5",
    ];

    const randomHint = hintText[Math.round( Math.random() * (hintText.length-1) )];
    console.log("model");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomHint}
            </div>
          </div>
        </div>

        <div class="row">
          <Sigma renderer="canvas" settings={{labelSize:"fixed", maxNodeSize: 5}} >
            <EdgeShapes default="arrow"/>
            <NodeShapes default="def"/>
            <LoadJSON path ="./data.json">
              <RelativeSize initialSize={15}/>
            </LoadJSON>
          </Sigma>
        </div>

      </div>
    );
  }
}
