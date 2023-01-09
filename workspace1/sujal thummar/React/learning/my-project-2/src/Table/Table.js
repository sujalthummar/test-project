import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      limitValue: 10,
      skipValue: 0,
      searchValue: "",
    };
  }

  componentDidMount = () => {
    if (!this.state.users) {
      fetch(
        `https://dummyjson.com/users?skip=${this.state.skipValue}&limit=${this.state.limitValue}`
      )
        .then((res) => res.json())
        .then((userDemo) => this.setState({ users: userDemo }));
    }
  };

  handleNext = () => {
    this.setState(
      {
        skipValue: this.state.skipValue + 10,
      },
      () => this.fireApi()
    );
  };

  fireApi = () => {
    fetch(
      `https://dummyjson.com/users/search?q=${this.state.searchValue}`
      // ?skip=${this.state.skipValue}&limit=${this.state.limitValue}`
    )
      .then((res) => res.json())
      .then((userDemo) => this.setState({ users: userDemo }));
  };

  handlePrevious = () => {
    this.setState(
      {
        skipValue: this.state.skipValue - 10,
      },
      () => this.fireApi()
    );
  };

  handlePageChange = (page) => {
    console.log(page);
    this.setState(
      {
        skipValue: (page - 1) * 10,
      },
      () => this.fireApi()
    );
  };

  onSearchInputChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
    setTimeout(() => this.fireApi(), 1000);
  };

  render() {
    return (
      <>
        <input
          onChange={this.onSearchInputChange}
          style={{ marginLeft: "80px" }}
          type="search"
          className="from-control "
          placeholder="search"
        />

        <br />
        <br />

        <div className="container  ">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users?.users.map((usr, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{`${usr.id}`}</th>
                    <td>{`${usr.firstName}`}</td>
                    <td>{`${usr.lastName}`}</td>
                    <td>{`${usr.email}`}</td>
                    <td>{`${usr.company.department}`}</td>
                    <td>{`${usr.phone}`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br />

          <nav aria-label="Page navigation example">
            <ul className="pagination  justify-content-center">
              <li className="page-item ">
                <button className="page-link" onClick={this.handlePrevious}>
                  Previous
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => this.handlePageChange(1)}
                >
                  1
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => this.handlePageChange(2)}
                >
                  2
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => this.handlePageChange(3)}
                >
                  3
                </button>
              </li>
              <li className="page-item">
                <button className="page-link" onClick={this.handleNext}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default Table;
