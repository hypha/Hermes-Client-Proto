import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const modelClass = location.pathname === "/" ? "active" : "";
    const functionsClass = location.pathname.match(/^\/functions/) ? "active" : "";
    const elementsClass = location.pathname.match(/^\/elements/) ? "active" : "";
    const systemsClass = location.pathname.match(/^\/systems/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={modelClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Model</IndexLink>
              </li>

              <li class={functionsClass}>
                <Link to="functions" onClick={this.toggleCollapse.bind(this)}>Functions</Link>
              </li>

              <li class={elementsClass}>
                <Link to="elements" onClick={this.toggleCollapse.bind(this)}>Elements</Link>
              </li>

              <li class={systemsClass}>
                <Link to="systems" onClick={this.toggleCollapse.bind(this)}>Systems</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
