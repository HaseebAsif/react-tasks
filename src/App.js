import React from "react";
import JobForm from "./components/multiStepWizard";
import DataTable from "./components/dataTable/DataTable";
import FetchUsers from "./hooks/fetchUsers/FetchUsers";
import "./App.css";

const App = () => {
  return (
    <div className="container-fluid" id="grad1">
      <JobForm />
      <DataTable />
      <br />
      <br />
      <FetchUsers />
    </div>
  );
};

export default App;
