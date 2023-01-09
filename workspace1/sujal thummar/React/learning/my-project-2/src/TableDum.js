// use

import React, { useState, useEffect } from "react";

const TableDum = () => {
  // 1. state ...
  const [data, setUserDetail] = useState([]);

  // 2. logic ..
  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((usr) => setUserDetail(usr));
  }, []);

  // 3. JSX ...
  return (
    <>
      <div className="container  ">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
            </tr>
          </thead>

          {data.length > 0 &&
            data.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td> {item.lastName}</td>
                </tr>
              );
            })}
        </table>
        <br />
      </div>
    </>
  );
};

export default TableDum;
