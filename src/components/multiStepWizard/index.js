import React, { useEffect, useState } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import "./multiStepWizard.css";
import { useNotificationContext } from "../../contexts/notificationContext";
import JobFormStep1 from "./jobFormStep1";
import JobFormStep2 from "./jobFormStep2";
import JobFormStep3 from "./jobFormStep3";

const JobForm = ({ setJobValue, jobValue, filtereddata, setFilteredData }) => {
  const [value, setValue] = useState(1);
  const { jobNotification, setJobNotification } = useNotificationContext();
  const [submitButton, setSubmitButton] = useState(true);

  const handleNext = () => {
    setValue(value + 1);
  };

  const handlePrevious = () => {
    setValue(value - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredData([...filtereddata, jobValue]);
    setJobNotification([...jobNotification, jobValue]);
    setSubmitButton(false);
  };

  return (
    <div>
      <div>
        <div className="notification-count">{jobNotification.length}</div>
        <NotificationsActiveIcon className="bell-icon" />
        {jobNotification.map((item) => {
          return (
            <div className="notification-message">
              <div className="notification-field1">{item.Title}</div>
              <div className="notification-field2">{item.JobLevel}</div>
              <div className="notification-field3">{item.Type}</div>
              <div className="notification-field4">{item.Salary}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-0" style={{display:'flex', justifyContent:'center'}}>
        <div className="col-11 text-center p-0 mt-3 mb-2">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <div className="job-heading-and-text">
              <h1 className="job-post-heading">CREATE A JOB POST</h1>
              <p>
                Complete the following steps to create an effective job post
              </p>
            </div>
            <div className="step-container">
              Step {value === 1 ? "1" : value === 2 ? "2" : "3"} of 3
            </div>
            <div className="row">
              <div className="col-md-12 mx-0">
                <form id="msform">
                  <ul id="progressbar">
                    <li className={value === 1 && "active"} id="jobtype"></li>
                    <li
                      className={value === 2 && "active"}
                      id="candidatetype"
                    ></li>
                    <li
                      className={value === 3 && "active"}
                      id="shifttimings"
                    ></li>
                  </ul>
                  <JobFormStep1
                    value={value}
                    jobValue={jobValue}
                    setJobValue={setJobValue}
                    handleNext={handleNext}
                  />
                  <JobFormStep2
                    value={value}
                    jobValue={jobValue}
                    setJobValue={setJobValue}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                  />
                  <JobFormStep3
                    value={value}
                    handlePrevious={handlePrevious}
                    handleSubmit={handleSubmit}
                    submitButton={submitButton}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
