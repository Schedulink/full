import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Main.css";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Degoption from "./Maincomponent/Degoption";
import RegulationOption from "./Maincomponent/RegulationOption";
import SemesterOption from "./Maincomponent/SemesterOption";
import Semnum from "./Maincomponent/Semnum";
import Tables from "./Maincomponent/Tables";

const Main = () => {
  const [deg, setDeg] = useState([]);
  const [sem, setSem] = useState([]);
  const [sub, setSub] = useState([]);
  const [fac, setFac] = useState([]);

  const [firstsem, setFirstsem] = useState([]);
  const [secondsem, setSecondsem] = useState([]);
  const [thirdsem, setThirdsem] = useState([]);
  const [firstsub, setFirstsub] = useState([]);

  const API_DEG = "http://localhost:8000/api/deg/";
  const API_SEM = "http://localhost:8000/api/sem/";
  const API_SUB = "http://localhost:8000/api/sub/";
  const API_FAC = "http://localhost:8000/api/fac/";

  useEffect(() => {
    Axios.get(API_DEG).then((res) => setDeg(res.data));

    Axios.get(API_SEM).then((res) => setSem(res.data));

    Axios.get(API_SUB).then((res) => setSub(res.data));

    Axios.get(API_FAC).then((res) => setFac(res.data));
  }, []);

  const handlesubmit = (e) => {
    const data = sem.filter((d) => d.deg_name === e);
    console.log(data);
    setFirstsem(data);
  };

  const handlereq_year = (e) => {
    const data = firstsem.filter((d) => d.reg_year === e);
    console.log(data);
    setSecondsem(data);
  };

  const handlesemester = (e) => {
    const data = secondsem.filter((d) => d.sem_type === e);
    console.log(data);
    setThirdsem(data);
  };

  const handlesubject = (e) => {
    const a = Number(e.slice(3, 5));
    const data = sub.filter((d) => d.sem_id === a);
    console.log(data);
    setFirstsub(data);
  };

  // Faculty--Timetable

  // const fac_colunDefs = TimetablecolumnDefs;
  // const fac_rowData = TimetablerowData;

  return (
    <div className="first">
      <div className="main">
        <Degoption handlesubmit={handlesubmit} deg={deg} />

        <RegulationOption handlereq_year={handlereq_year} />

        <SemesterOption handlesemester={handlesemester} />

        <Semnum handlesubject={handlesubject} thirdsem={thirdsem} />

        <Tables fac={fac} firstsub={firstsub} setFirstsub={setFirstsub} />
      </div>
    </div>
  );
};

export default Main;
