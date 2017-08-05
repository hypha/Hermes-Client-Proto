import React from "react";

import {Sigma, NodeShapes, EdgeShapes, NOverlap, Filter, RandomizeNodePositions, RelativeSize, Forcelink, ForceAtlas2, LoadJSON} from 'react-sigma';

import FadData from "../../FadData";


export default class Model extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selectedNode: null}
    this.data = new FadData().getGraph()
  }

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
                                              hideEdgesOnMove:true,
                                              animationsTime:3000,
                                              borderSize: 2,
                                              singleHover: true,
                                              defaultLabelHoverColor: "#000055",
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
                                             }}
                                    graph={this.data}
                                             onClickNode={ e => this.setState({selectedNode: e.data.node.id}) }
                                             onClickStage={ e => this.setState({selectedNode: null}) }>
            <EdgeShapes default="curvedArrow"/>
            <NodeShapes default="def"/>
            <RandomizeNodePositions>
              <Filter neighborsOf={ this.state.selectedNode } />
              <ForceAtlas2 iterationsPerRender={1} timeout={5000}/>
              <RelativeSize initialSize={8}/>
            </RandomizeNodePositions>

          </Sigma>
        </div>

      </div>
    );
  }
}
