import React from "react";

const Degoption = ({ handlesubmit, deg }) => {
  return (
    <div>
      <select
        className="selop"
        name="deg"
        onChange={(e) => handlesubmit(e.target.value)}
      >
        <option value="default">Degree programme</option>
        {deg.map((d) => (
          <option key={d.id}>{d.deg_name}</option>
        ))}
      </select>
    </div>
  );
};

export default Degoption;
