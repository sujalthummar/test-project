import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class DemoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
    };
  }

  changeFNameState = (newVal) => {
    this.setState({
      firstName: newVal,
    });
  };

  changeLNameState = (newVal) => {
    this.setState({
      lastName: newVal,
    });
  };
  changeAddState = (newVal) => {
    this.setState({
      address: newVal,
    });
  };

  render() {
    return (
      <>
        <div className="container border p-4 rounded">
          <p>parent</p>
          <div className="d-flex ">
            <Child1
              changeFNameState={this.changeFNameState}
              changeLNameState={this.changeLNameState}
              changeAddState={this.changeAddState}
            />
            <Child2
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              address={this.state.address}
            />
          </div>
        </div>
      </>
    );
  }
}
export default DemoState;
