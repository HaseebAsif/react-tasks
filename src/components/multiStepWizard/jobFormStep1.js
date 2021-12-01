import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const JobFormStep1 = ({ jobValue, value, setJobValue, handleNext }) => {
  return (
    <fieldset
      style={{
        display: value === 1 ? "block" : "none",
        opacity: value === 1 ? "1" : "0",
      }}
    >
      <div className="form-card">
        <div className="form-group col-xs-6 col">
          <div className="form-group col-xs-6 row">
            <div className="form-group col-md-6">
              <label for="sel1">Looking For</label>
              <select
                className="form-control"
                id="sel1"
                variant="outlined"
                onChange={(e) => setJobValue({ Title: e.target.value })}
              >
                <option value="" selected disabled>
                  Enter Value..
                </option>
                <option>Video Editing</option>
                <option>Frontend developement</option>
                <option>Mechanical Enginner</option>
              </select>

              <KeyboardArrowDownIcon />
            </div>
            <div className="form-group col-md-6">
              <label for="sel1">Experience</label>
              <select
                className="form-control"
                id="sel1"
                onChange={(e) =>
                  setJobValue({
                    ...jobValue,
                    JobLevel: e.target.value,
                  })
                }
              >
                <option value="" selected disabled>
                  Enter Value..
                </option>
                <option>1 Year</option>
                <option>2 Year</option>
                <option>3 Year</option>
              </select>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label for="sel1">Education</label>
            <select
              className="form-control"
              id="sel1"
              onChange={(e) =>
                setJobValue({
                  ...jobValue,
                  Type: e.target.value,
                })
              }
            >
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
            <label for="sel1">Skills</label>
            <select className="form-control" id="sel1">
              <option value="" selected disabled>
                Enter Value..
              </option>
              <option>Video Editing</option>
              <option>Graphic Designing</option>
              <option>Mobile App Development</option>
            </select>
            <KeyboardArrowDownIcon />
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
      <div className="next-button1">
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

export default JobFormStep1;
