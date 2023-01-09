import React from "react";

import Users from "./Users";
import UsersData from "./UsersData";
import Table from "./Table/Table";
import TableDum from "./TableDum";
import DemoState from "./DemoState/Parent";

import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UsersData />} />
          <Route path="/table" element={<Table />} />
          <Route path="/table-dum" element={<TableDum />} />
          <Route path="/demo-state" element={<DemoState />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
