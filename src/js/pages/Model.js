import React from "react";

import {Sigma, NodeShapes, EdgeShapes, NOverlap, Filter, RandomizeNodePositions, RelativeSize, Forcelink, ForceAtlas2, LoadJSON} from 'react-sigma';

import HermesData from "../components/HermesData";
import HermesSigma from "../components/HermesSigma";
import moment from 'moment';

export default class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedNode: null, sigmaData: {nodes: null}};

  }

  componentDidMount() {
    HermesData().then(function(data){
       this.setState({sigmaData: data.sigma});
       console.log( this.state.sigmaData);
     }.bind(this));

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

    const renderer= "canvas";

    const styles = {
      sigma: {
         maxWidth:"inherit",
        height:"700px",
        width: '100%',
      }
    };

    const settings = {
      sigma:
      {hideEdgesOnMove:true,
      clone: false,
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
      sideMargin: 0.5}
    };

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
          <Sigma renderer= {renderer} style={styles.sigma}
                                   settings={settings.sigma}

                                    onClickNode={ e => this.setState({selectedNode: e.data.node.id}) }
                                    onClickStage={ e => this.setState({selectedNode: null}) }>
            <HermesSigma graph={this.state.sigmaData}>

            <EdgeShapes default="curvedArrow"/>
            <NodeShapes default="def"/>
            <RandomizeNodePositions key={moment().valueOf()}>
              <Filter neighborsOf={ this.state.selectedNode } />
              <ForceAtlas2 iterationsPerRender={1} timeout={5000}/>
              <RelativeSize initialSize={8}/>
            </RandomizeNodePositions>
          </HermesSigma>

          </Sigma>
        </div>

      </div>
    );
  }
}
