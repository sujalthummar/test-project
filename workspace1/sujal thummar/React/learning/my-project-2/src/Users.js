import React from "react";

import { Link } from "react-router-dom";

// import { redirect } from "react-router-dom";
// import axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }

  findRecord = () => {
    // window.location("http://localhost:3000/users");
  };

  componentDidMount = () => {
    if (!this.state.users) {
      fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((usersRecord) => this.setState({ users: usersRecord }));
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mt-4 mb-5">
          <div className="row row-cols-2 row-cols-md-3">
            {this.state.users ? (
              <>
                {this.state.users?.users.slice(0, 8).map((usr, index) => {
                  return (
                    <div
                      key={index}
                      onClick={this.findRecord()}
                      className="col-lg-4 col-xl-3 pb-4"
                    >
                      <Link to={`/users/${usr.id}`}>
                        <div
                          className="card rounded-4 mx-auto"
                          style={{ overflow: "hidden", position: "relative" }}
                        >
                          <span className="avatar avatar-xl">
                            <img
                              style={{
                                width: "100%",
                                maxHeight: 150,
                                objectFit: "cover",
                              }}
                              className="avatar-img"
                              src="assets/backgraound.webp"
                              alt=""
                            />
                          </span>
                          <div
                            className="d-flex mx-auto"
                            style={{ position: "relative", top: -40 }}
                          >
                            <span className="avatar avatar-xl">
                              <img
                                style={{
                                  height: "72px",
                                  width: "72px",
                                }}
                                className="avatar-img rounded-circle border border-white border-3 shadow"
                                // src="assets/backgraound.webp"
                                src={
                                  usr.image
                                    ? usr.image
                                    : "https://robohash.org/hicveldicta.png?size=50x50&set=set1"
                                }
                                alt=""
                              />
                            </span>
                          </div>

                          <div className="text-center">
                            <p className="h6">
                              <strong>
                                {`${usr.firstName} ${usr.lastName}`}
                              </strong>
                            </p>
                            <p style={{ color: "gray" }}>
                              {usr.company.title ? usr.company.title : ""}
                            </p>
                          </div>

                          <div className="mx-auto">
                            <a href="/" className="p-2">
                              F
                            </a>
                            <a href="/" className="p-2">
                              I
                            </a>
                            <a href="/" className="p-2">
                              L
                            </a>
                            <a href="/" className="p-2">
                              T
                            </a>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-around">
                            <div className="text-center">
                              <p style={{ color: "gray" }}>Follower</p>
                              <p className="h6">23K</p>
                              <div className="text-center">
                                <p style={{ color: "gray" }}>Followeing</p>
                                <p className="h6">10K</p>
                              </div>
                              <div className="text-center">
                                <p style={{ color: "gray" }}>Total Posts</p>
                                <p className="h6">456</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </>
            ) : (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
