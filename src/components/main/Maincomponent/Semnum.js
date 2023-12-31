import React from "react";

const Semnum = ({ handlesubject, thirdsem }) => {
  return (
    <div>
      <select
        name="semnum"
        className="selop"
        onChange={(e) => handlesubject(e.target.value)}
      >
        <option value="default">Semester</option>
        {thirdsem.map((d) => (
          <option key={d.sem_id}>
            id:{d.sem_id} sem:{d.sem_num}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Semnum;
