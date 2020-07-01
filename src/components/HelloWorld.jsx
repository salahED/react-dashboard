import React, { Component } from "react";
import { connect } from "react-redux";
import { changeButton } from "../actions/helloWorldAction";

class HelloWorld extends Component {
  sayHelloWorld = () => {
    this.props.changeButton();
  };

  render() {
    return (
      <div>
        <button
          className="baraka"
          onClick={this.sayHelloWorld}
        >
          say hello world
        </button>
        <br />
        <span className="text-3xl inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{`state of the button is : ${this.props.buttonClicked}`}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  buttonClicked: state.helloworldreducer.buttonClicked,
});

export default connect(mapStateToProps, { changeButton })(HelloWorld);
