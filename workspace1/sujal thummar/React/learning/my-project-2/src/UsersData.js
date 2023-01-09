import React from "react";

class UsersData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUserId: "",
      userData: "",
      users: null,
    };
  }

  componentDidMount = () => {
    const loc = window.location.href;

    const id = loc.split("users/")[1];

    if (!this.state.users) {
      fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => res.json())
        .then((userDemo) => this.setState({ users: userDemo }));
    }
  };

  //
  render() {
    return (
      <>
        {this.state.users ? (
          <div className="container">
            <div className="card rounded-4 p-3">
              <h2 style={{ fontWeight: "bolder" }}>Personal Information</h2>
              <hr />

              <div className="row">
                <div className="col-sm-6">
                  <div style={{ padding: "10px" }}>
                    {" "}
                    <label htmlFor="firstName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                      required=""
                      value={`${this.state.users?.firstName} ${this.state.users?.lastName}`}
                    />
                  </div>

                  <div style={{ padding: "10px" }}>
                    <label htmlFor="firstName" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="**********"
                      required=""
                      value={`${this.state.users.phone}`}
                    />
                    <div style={{ padding: "10px" }}>
                      <label htmlFor="firstName" className="form-label">
                        Date Of Birth
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="1 January 2000"
                        required=""
                        value={`${this.state.users.birthDate}`}
                      />
                    </div>
                  </div>
                  <div className="col"></div>
                </div>
                <div className="col-sm-6">
                  <div style={{ padding: "10px" }}>
                    {" "}
                    <label htmlFor="firstName" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="helloworld@gmail.com"
                      value={this.state.users.email}
                      required=""
                    />
                  </div>

                  <div style={{ padding: "10px" }}>
                    <label htmlFor="firstName" className="form-label">
                      Nationality
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Indian"
                      required=""
                    />

                    <div style={{ padding: "10px" }}>
                      <label htmlFor="firstName" className="form-label">
                        Select Gender
                      </label>
                      <br />

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value={`${this.state.users.gender}`}
                        />

                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          Female
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio3"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Adderss"
                    Value={`${this.state.users.address}`}
                  ></textarea>
                </div>
                <div className="col-sm-12 text-end">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg m-2"
                    style={{
                      width: "200px",
                      height: "50px",
                      alignItems: "right",
                    }}
                  >
                    Save Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default UsersData;

// params
