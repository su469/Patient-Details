
import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";
import data from './jsonData'

function App() {
  const [patientData,setPatientData] = useState(data);
  
 
  

  return (
    <div className="mainDiv">
      <h1>Pediatrics Department Screen</h1>
      <Table data={patientData}/>
    </div>
  );
}

export default App;
