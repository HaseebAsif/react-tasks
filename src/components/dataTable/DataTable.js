import React, { useState, useEffect } from "react";
import { useNotificationContext } from "../../contexts/notificationContext";
import { data } from "./data";

const DataTable = ({ value, setValue, filtereddata, setFilteredData }) => {
  const [search, setSearch] = useState("");
  const [isAdd, setAdd] = useState(false);
  const { jobNotification, setJobNotification } = useNotificationContext();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setAdd(false);
    setFilteredData([...filtereddata, value]);
    setJobNotification([...jobNotification, value]);
  };
  useEffect(() => {
    setFilteredData(
      data.filter((data) =>
        data.Title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
  return (
    <>
      <div
        className="input-group input-group-lg my-4"
        style={{ width: "50%", margin: "0 auto" }}
      >
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Search Job Title
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={handleChange}
        />
      </div>
      {!isAdd && (
        <button className="btn btn-primary my-3" onClick={() => setAdd(true)}>
          Add new
        </button>
      )}

      <table
        className="table table-striped table-bordered"
        style={{ width: "100%", marginBottom: "100px" }}
      >
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Experience</th>
            <th>Education</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {filtereddata.map((item) => {
            return (
              <tr>
                <td>{item.Title}</td>
                <td>{item.JobLevel}</td>
                <td>{item.Type}</td>
                <td>{item.Salary}</td>
              </tr>
            );
          })}
          {isAdd && (
            <tr>
              <td>
                <input
                  className="input-group-text"
                  id="inputGroup-sizing-md"
                  type="text"
                  placeholder="Job Title"
                  onChange={(e) =>
                    setValue({ ...value, Title: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className="input-group-text"
                  id="inputGroup-sizing-lg"
                  type="text"
                  placeholder="Experience"
                  onChange={(e) =>
                    setValue({ ...value, JobLevel: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className="input-group-text"
                  id="inputGroup-sizing-lg"
                  type="text"
                  placeholder="Education"
                  onChange={(e) => setValue({ ...value, Type: e.target.value })}
                />
              </td>
              <td>
                <input
                  className="input-group-text"
                  id="inputGroup-sizing-lg"
                  type="text"
                  placeholder="Salary"
                  onChange={(e) =>
                    setValue({ ...value, Salary: e.target.value })
                  }
                />
              </td>
            </tr>
          )}
          {isAdd && (
            <button className="btn btn-primary" onClick={handleAdd}>
              Submit
            </button>
          )}
        </tbody>
      </table>
      <br />
      <br />
    </>
  );
};

export default DataTable;
