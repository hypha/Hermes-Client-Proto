import React from "react";

import Article from "../components/Article";

import {Sigma, NodeShapes, EdgeShapes, NOverlap, RandomizeNodePositions, RelativeSize, Forcelink, ForceAtlas2, LoadJSON} from 'react-sigma';

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

        <div style={{"height" : "100%"}}>
          <Sigma renderer="canvas" style={{
                                           maxWidth:"inherit", height:"700px"
                                         }}
                                   settings={{
                                              hideEdgesOnMove:false,
                                              animationsTime:3000,
                                              borderSize: 2,
                                              singleHover: true,
                                              defaultLabelHoverColor: "#F00",
                                              edgeHoverSizeRatio: 2,
                                              enableEdgeHovering: true,
                                              drawEdges: true,
                                              drawEdgeLabels: true,
                                              minArrowSize: 8,
                                              defaultLabelColor: "rgb(0,0,65)",
                                              defaultLabelSize: 20,
                                              edgeColor: "default",
                                              defaultEdgeColor: "rgb(40,40,40)",
                                              sideMargin: 0.5
                                             }} >
            <EdgeShapes default="curvedArrow"/>
            <NodeShapes default="def"/>
            <LoadJSON path ="./data.json">
              <RandomizeNodePositions>
                <ForceAtlas2 iterationsPerRender={1} timeout={500}/>

                <RelativeSize initialSize={15}/>
              </RandomizeNodePositions>
            </LoadJSON>
          </Sigma>
        </div>

      </div>
    );
  }
}
