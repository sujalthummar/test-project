import React from "react";

class Child2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container border m-2">
          <p>Child 2</p>

          <div className="card border">
            <p>{this.props.firstName}</p>
          </div>
          <br />

          <div className="card border">
            <p>{this.props.lastName}</p>
          </div>
          <br />

          <div className="card border">
            <p>{this.props.address}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Child2;
