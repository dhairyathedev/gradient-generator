import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SliderPicker } from "react-color";
import "./App.css";
import Highlight from "react-highlight";
import copy from "copy-to-clipboard";

class App extends Component {
  state = {
    background: "#1256c4",
    background2: "#19e0d3",
    division: 50,
    angle: 240
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
  handleAngle = () => {
    const data = document.getElementById("angle").value;
    this.setState({ angle: data });
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
        <h1 className="text-center fw-bolder">
          Gradient Generator{" "}
          <span role="img" aria-label="rainbow">
            🌈
          </span>
        </h1>
        <hr />
        <div
          className="color-preview"
          style={{
            background: `linear-gradient(${this.state.angle}deg, ${this.state.background} ${this.state.division}%, ${this.state.background2})`
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
              <hr />
              <h3>Angle - {this.state.angle}deg</h3>
              <input
                type="range"
                min="0"
                max="360"
                className="form-range"
                step="1"
                id="angle"
                onChange={this.handleAngle}
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
              <Highlight language="css">
                {`background: linear-gradient(90deg, ${this.state.background} ${this.state.division}%, ${this.state.background2})`}
              </Highlight>
              <button
                className="btn btn-primary"
                onClick={this.handleCopy}
                id="copyBtn"
              >
                Copy
              </button>
            </div>
          </div>
          <br />
          <div className="footer">
            <div className="footer">
              <center>
                <hr />
                <h5>
                  Opensource -{" "}
                  <a
                    href="http://github.com/snowbit-coderboi/gradient-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark fw-bolder"
                  >
                    snowbit-coderboi/gradient-generator
                  </a>
                </h5>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
