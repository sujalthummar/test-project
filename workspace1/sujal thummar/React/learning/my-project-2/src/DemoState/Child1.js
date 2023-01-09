import React from "react";

class Child1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFNameChange = (event) => {
    this.props.changeFNameState(event.target.value);
  };

  handleLNameChange = (e) => {
    this.props.changeLNameState(e.target.value);
  };

  handleAddChange = (events) => {
    this.props.changeAddState(events.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container border m-2">
          <p>Child 1</p>

          <input aria-label="first-name" onChange={this.handleFNameChange} />
          <br />
          <br />
          <input aria-label="first-name" onChange={this.handleLNameChange} />
          <br />
          <br />
          <input aria-label="first-name" onChange={this.handleAddChange} />
        </div>
      </React.Fragment>
    );
  }
}

export default Child1;
