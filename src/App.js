import React, { useState } from "react";
import JobForm from "./components/multiStepWizard";
import DataTable from "./components/dataTable/DataTable";
import FetchUsers from "./hooks/fetchUsers/FetchUsers";
import "./App.css";

const App = () => {
  const [jobValue, setJobValue] = useState({});
  const [filtereddata, setFilteredData] = useState([]);
  return (
    <div className="container-fluid" id="grad1">
      <JobForm
        jobValue={jobValue}
        setJobValue={setJobValue}
        filtereddata={filtereddata}
        setFilteredData={setFilteredData}
      />
      <DataTable
        value={jobValue}
        setValue={setJobValue}
        filtereddata={filtereddata}
        setFilteredData={setFilteredData}
      />
      <FetchUsers />
    </div>
  );
};

export default App;
