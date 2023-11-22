import React from "react";

const Tableselopt = ({ filtersubfac, handleFit, val, getdata }) => {
  return (
    <div>
      <select
        name="overall"
        style={{ width: "150px", position: "relative", top: "10px" }}
        onChange={getdata}
        value={val}
        onInput={handleFit}
      >
        <option value="default">Sub_code</option>
        <option>NILL</option>
        {filtersubfac &&
          filtersubfac.map((d) => (
            <option key={d.s_no} disabled={d.disabled}>
              {d.sub_code}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Tableselopt;
