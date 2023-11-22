import React from "react";
import { AgGridReact } from "ag-grid-react";

const Timetable = ({
  TimetablecolumnDefs,
  TimetablerowData,
  TimetabledefaultColDef,
  onCellClicked,
  frameworkComponents,
  table_Ref,
}) => {
  return (
    <div className="table">
      <h3>Timetable</h3>
      <div className="ag-theme-alpine" style={{ height: "700px" }}>
        <AgGridReact
          ref={table_Ref}
          columnDefs={TimetablecolumnDefs}
          rowData={TimetablerowData}
          defaultColDef={TimetabledefaultColDef}
          frameworkComponents={frameworkComponents}
          rowHeight="150"
          onCellClicked={onCellClicked}
        ></AgGridReact>
        {/* <button className='btn' onClick={getRowData}>store details</button> */}
      </div>
    </div>
  );
};

export default Timetable;
