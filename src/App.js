import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SliderPicker } from "react-color";
import "./App.css";
import ReactCodeSinppet from "react-code-snippet";
import copy from "copy-to-clipboard";

class App extends Component {
  state = {
    background: "#1256c4",
    background2: "#19e0d3",
    division: 50
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };
  handleChangeCompleteTwo = (color) => {
    this.setState({ background2: color.hex });
  };
  handleRange = () => {
    const data = document.getElementById("inputRangePart").value;
    this.setState({ division: data });
  };
  handleCopy = () => {
    copy(
      `background: linear-gradient(90deg, ${this.state.background} ${this.state.division}%, ${this.state.background2})`
    );
    document.getElementById("copyBtn").innerText = "Copied!";
  };

  render() {
    return (
      <div className="container">
        <div
          className="color-preview"
          style={{
            background: `linear-gradient(90deg, ${this.state.background} ${this.state.division}%, ${this.state.background2})`
          }}
        ></div>
        <div
          className="picker"
          style={{
            marginTop: 40
          }}
        >
          <div className="card">
            <div className="card-body">
              <h3>
                Color Division - <b>{this.state.division}%</b>{" "}
              </h3>
              <hr />
              <input
                type="range"
                min="0"
                max="100"
                className="form-range"
                step="1"
                id="inputRangePart"
                onChange={this.handleRange}
              />
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-body">
              <h3>Choose Color #1</h3>
              <hr />
              <SliderPicker
                color={this.state.background}
                onChangeComplete={this.handleChangeComplete}
              />
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-body">
              <h3>Choose Color #2</h3>
              <hr />
              <SliderPicker
                color={this.state.background2}
                onChangeComplete={this.handleChangeCompleteTwo}
              />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <ReactCodeSinppet
                lang="html"
                code={`background: linear-gradient(90deg, ${this.state.background} ${this.state.division}%, ${this.state.background2})`}
              ></ReactCodeSinppet>
              <button
                className="btn btn-primary"
                onClick={this.handleCopy}
                id="copyBtn"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
