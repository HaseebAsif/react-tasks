import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const JobFormStep2 = ({
  jobValue,
  value,
  setJobValue,
  handleNext,
  handlePrevious,
}) => {
  return (
    <fieldset
      style={{
        display: value === 2 ? "block" : "none",
        opacity: value === 2 ? "1" : "0",
      }}
    >
      <div className="form-card">
        <div className="form-group col-xs-6 col">
          <div className="form-group col-xs-6 row">
            <div className="form-group col-md-6">
              <label for="sel1">Hourly Rate</label>
              <select required className="form-control" id="sel1">
                <option value="" selected disabled>
                  Enter Value..
                </option>
                <option>10$</option>
                <option>20$</option>
                <option>30$</option>
              </select>
              <KeyboardArrowDownIcon />
            </div>
            <div className="form-group col-md-6">
              <label for="sel1">Expected Salary</label>
              <select
                className="form-control"
                id="sel1"
                onChange={(e) => {
                  setJobValue({
                    ...jobValue,
                    Salary: e.target.value,
                  });
                }}
              >
                <option value="" selected disabled>
                  Enter Value..
                </option>
                <option>40,000</option>
                <option>50,000</option>
                <option>60,000</option>
              </select>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label for="sel1">Career Level</label>
            <select className="form-control" id="sel1">
              <option value="" selected disabled>
                Enter Value..
              </option>
              <option>Matric</option>
              <option>Inter</option>
              <option>Graduate</option>
            </select>
            <KeyboardArrowDownIcon />
          </div>
          <div className="form-group col-md-12">
            <label for="sel1">Gender</label>
            <select className="form-control" id="sel1">
              <option value="" selected disabled>
                Enter Value..
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <KeyboardArrowDownIcon />
          </div>
          <div className="form-group col-md-12">
            <label for="sel1">Equipment Specification</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="5"
              placeholder="Write a Description..."
            ></textarea>
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
        <input
          onClick={handleNext}
          type="button"
          name="next"
          className="next action-button"
          value="NEXT"
        />
      </div>
    </fieldset>
  );
};

export default JobFormStep2;