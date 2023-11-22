import React from "react";
import { AgGridReact } from "ag-grid-react";

const FacultySubjectTable = ({
  subfac_Ref,
  overallcolumns,
  subfac,
  defaultColDef,
  getRowData,
}) => {
  return (
    <div className="table">
      <h3>Overall-table:</h3>
      <div className="ag-theme-alpine" style={{ height: "300px" }}>
        <AgGridReact
          ref={subfac_Ref}
          columnDefs={overallcolumns}
          rowData={subfac}
          defaultColDef={defaultColDef}
          rowSelection="single"
        ></AgGridReact>
        <button className="btn btn-primary" onClick={getRowData}>
          store details
        </button>
      </div>
    </div>
  );
};

export default FacultySubjectTable;
