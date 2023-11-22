import React from "react";
import { AgGridReact } from "ag-grid-react";
import "./Tablestyle.css";

const SubjectTable = ({
  sub_Ref,
  columnDefs,
  firstsub,
  defaultColDef,
  handlefaculty,
}) => {
  return (
    <div className="table">
      <h3>Subject-table:</h3>
      <div className="ag-theme-alpine" style={{ height: "300px" }}>
        <AgGridReact
          ref={sub_Ref}
          columnDefs={columnDefs}
          rowData={firstsub}
          defaultColDef={defaultColDef}
          rowSelection="single"
        ></AgGridReact>
        <button className="btn btn-primary" onClick={handlefaculty}>
          select subject
        </button>
      </div>
    </div>
  );
};

export default SubjectTable;
