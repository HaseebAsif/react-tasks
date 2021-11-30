import React, { useState } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import "./multiStepWizard.css";
import { useNotificationContext } from "../../contexts/notificationContext";

const JobForm = () => {
  const [value, setValue] = useState(1);
  const { jobNotification } = useNotificationContext();

  const handleNext = () => {
    setValue(value + 1);
  };

  const handlePrevious = () => {
    setValue(value - 1);
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
      <div className="row justify-content-center mt-0">
        <div className="col-11 text-center p-0 mt-3 mb-2">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <h1>CREATE A JOB POST</h1>
            <p>Complete the following steps to create an effective job post</p>
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
                  <fieldset
                    style={{
                      display: value === 1 ? "block" : "none",
                      opacity: value === 1 ? "1" : "0",
                    }}
                  >
                    <div className="form-card">
                      <div className="form-group col-xs-6 row">
                        <div className="form-group col-md-6">
                          <label for="sel1">Looking For</label>
                          <select className="form-control" id="sel1">
                            <option>Video Editing</option>
                            <option>Frontend developement</option>
                            <option>Mechanical Enginner</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="sel1">Experience</label>
                          <select className="form-control" id="sel1">
                            <option>1 Year</option>
                            <option>2 Year</option>
                            <option>3 Year</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group col-xs-6 col">
                        <div className="form-group col-md-4">
                          <label for="sel1">Education</label>
                          <select className="form-control" id="sel1">
                            <option>Matric</option>
                            <option>Inter</option>
                            <option>Graduate</option>
                          </select>
                        </div>
                        <div className="form-group col-md-12">
                          <label for="sel1">Skills</label>
                          <select className="form-control" id="sel1">
                            <option>Video Editing</option>
                            <option>Graphic Designing</option>
                            <option>Mobile App Development</option>
                          </select>
                        </div>
                        <div className="form-group col-md-12">
                          <label for="sel1">Description</label>
                          <textarea
                            required
                            name="description"
                            id=""
                            cols="30"
                            rows="5"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <input
                      onClick={handleNext}
                      type="button"
                      name="next"
                      className="next action-button"
                      value="Next Step"
                    />
                  </fieldset>
                  <fieldset
                    style={{
                      display: value === 2 ? "block" : "none",
                      opacity: value === 2 ? "1" : "0",
                    }}
                  >
                    <div className="form-card">
                      <div className="form-group col-xs-6 row">
                        <div className="form-group col-md-6">
                          <label for="sel1">Hourly Rate</label>
                          <select required className="form-control" id="sel1">
                            <option>10$</option>
                            <option>20$</option>
                            <option>30$</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="sel1">Expected Salary</label>
                          <select className="form-control" id="sel1">
                            <option>40,000</option>
                            <option>50,000</option>
                            <option>60,000</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group col-xs-6 col">
                        <div className="form-group col-md-4">
                          <label for="sel1">Career Level</label>
                          <select className="form-control" id="sel1">
                            <option>Matric</option>
                            <option>Inter</option>
                            <option>Graduate</option>
                          </select>
                        </div>
                        <div className="form-group col-md-12">
                          <label for="sel1">Gender</label>
                          <select className="form-control" id="sel1">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                        <div className="form-group col-md-12">
                          <label for="sel1">Equipment Specification</label>
                          <textarea
                            name="description"
                            id=""
                            cols="30"
                            rows="5"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <input
                      onClick={handlePrevious}
                      type="button"
                      name="previous"
                      className="previous action-button-previous"
                      value="Previous"
                    />
                    <input
                      onClick={handleNext}
                      type="button"
                      name="next"
                      className="next action-button"
                      value="Next Step"
                    />
                  </fieldset>
                  <fieldset
                    style={{
                      display: value === 3 ? "block" : "none",
                      opacity: value === 3 ? "1" : "0",
                    }}
                  >
                    <div className="form-card">
                      <div className="idance">
                        <div className="schedule content-block">
                          <div className="container">
                            <h2
                              data-aos="zoom-in-up"
                              className="aos-init aos-animate"
                            >
                              Schedule Working Days and Timings
                            </h2>

                            <div className="timetable">
                              <nav className="nav nav-tabs">
                                <a className="nav-link">S</a>
                                <a className="nav-link active">M</a>
                                <a className="nav-link active">T</a>
                                <a className="nav-link active">W</a>
                                <a className="nav-link active">T</a>
                                <a className="nav-link active">F</a>
                                <a className="nav-link">S</a>
                              </nav>
                              <div className="work-timings">
                                <a className="nav-link">Sunday</a>
                                <span style={{ display: "flex" }}>
                                  <input
                                    type="time"
                                    id="appt"
                                    name="appt"
                                    value="08:56"
                                  />
                                  to
                                  <input
                                    type="time"
                                    id="appt"
                                    name="appt"
                                    value="18:56"
                                  />
                                </span>
                              </div>
                              <div className="work-timings">
                                <a className="nav-link active">Monday</a>
                                <span style={{ display: "flex" }}>
                                  <input type="time" id="appt" name="appt" />
                                  to
                                  <input type="time" id="appt" name="appt" />
                                </span>
                              </div>{" "}
                              <div className="work-timings">
                                <a className="nav-link active">Tuesday</a>
                                <span style={{ display: "flex" }}>
                                  <input type="time" id="appt" name="appt" />
                                  to
                                  <input type="time" id="appt" name="appt" />
                                </span>
                              </div>{" "}
                              <div className="work-timings">
                                <a className="nav-link active">Wednesday</a>
                                <span style={{ display: "flex" }}>
                                  <input type="time" id="appt" name="appt" />
                                  to
                                  <input type="time" id="appt" name="appt" />
                                </span>
                              </div>{" "}
                              <div className="work-timings">
                                <a className="nav-link active">Thursday</a>
                                <span style={{ display: "flex" }}>
                                  <input type="time" id="appt" name="appt" />
                                  to
                                  <input type="time" id="appt" name="appt" />
                                </span>
                              </div>{" "}
                              <div className="work-timings">
                                <a className="nav-link active">Friday</a>
                                <span style={{ display: "flex" }}>
                                  <input type="time" id="appt" name="appt" />
                                  to
                                  <input type="time" id="appt" name="appt" />
                                </span>
                              </div>{" "}
                              <div className="work-timings">
                                <a className="nav-link">Saturday</a>
                                <span style={{ display: "flex" }}>
                                  <input type="time" id="appt" name="appt" />
                                  to
                                  <input type="time" id="appt" name="appt" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <input
                      onClick={handlePrevious}
                      type="button"
                      name="previous"
                      className="previous action-button-previous"
                      value="Previous"
                    />
                    <input
                      type="button"
                      name="make_payment"
                      className="next action-button"
                      value="Confirm"
                    />
                  </fieldset>
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
