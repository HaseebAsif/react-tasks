import React from "react";

const JobFormStep3 = ({
  value,
  handleSubmit,
  submitButton,
  handlePrevious,
}) => {
  return (
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
              <h2 data-aos="zoom-in-up" className="aos-init aos-animate">
                Schedule Working Days and Timings
              </h2>

              <div className="timetable">
                <nav className="nav nav-tabs mb-3">
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
                    <input type="time" id="appt" name="appt" value="08:56" />
                    to
                    <input type="time" id="appt" name="appt" value="18:56" />
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

      <div className="next-button">
        <input
          onClick={handlePrevious}
          type="button"
          name="previous"
          className="previous action-button-previous"
          value="PREVIOUS"
        />
        {submitButton && (
          <input
            type="Submit"
            name="make_payment"
            className="next action-button"
            value="CONFIRM"
            onClick={handleSubmit}
          />
        )}
      </div>
    </fieldset>
  );
};

export default JobFormStep3;
