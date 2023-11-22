// import React, { useEffect } from "react";
import { useState } from "react";
import Tableselopt from "./Tableselopt";

const Timedata = (props) => {
  const { filtersubfac } = props;

  const [val, setVal] = useState("");

  const handleFit = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    setVal(selectedValue);
    props.node.setDataValue(props.column, selectedValue);

    const updatedOptions = filtersubfac.map((option) => {
      if (option.sub_title === selectedValue) {
        const newCount = option.tcp - 1;
        return { ...option, tcp: newCount, disabled: newCount === 0 };
      }
      return option;
    });
    console.log(updatedOptions);
    // setFiltersubfac(updatedOptions);
  };

  return (
    <div>
      <Tableselopt
        filtersubfac={filtersubfac}
        handleFit={handleFit}
        val={val}
      />
    </div>
  );
};

export default Timedata;
