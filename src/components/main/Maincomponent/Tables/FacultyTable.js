import React from "react";
import { AgGridReact } from "ag-grid-react";
import "./Selectoption.css";

const FacultyTable = ({
  fac_Ref,
  facultycolumns,
  firstfac,
  defaultColDef,
  handlesubfac,
}) => {
  return (
    <div className="table">
      <h3>Faculty-table:</h3>
      <div className="ag-theme-alpine" style={{ height: "200px" }}>
        <AgGridReact
          ref={fac_Ref}
          columnDefs={facultycolumns}
          rowData={firstfac}
          defaultColDef={defaultColDef}
          rowSelection="single"
        ></AgGridReact>
        <button className="btn btn-primary" onClick={handlesubfac}>
          select Faculty
        </button>
      </div>
    </div>
  );
};

export default FacultyTable;
