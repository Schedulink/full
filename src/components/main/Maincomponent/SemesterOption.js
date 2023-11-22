import React from "react";

const SemesterOption = ({ handlesemester }) => {
  return (
    <div>
      <label>
        <select
          name="semester"
          className="selop"
          onChange={(e) => handlesemester(e.target.value)}
        >
          <option value="default">Choose odd or even</option>
          <option value="odd">odd</option>
          <option value="even">even</option>
        </select>
      </label>
    </div>
  );
};

export default SemesterOption;
