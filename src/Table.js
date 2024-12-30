import React, { useState } from "react";
import ModelComponent from './ModelComponent'
const Table = (props) => {
  const [model,setModel] = useState(false);
  const [modelData,setModelData] = useState(null)

  const handlePatientClick = (data,e)=>{
    e.preventDefault(); 
    const { top, left } = e.target.getBoundingClientRect();
    setModelData({...data,type:'Patient Details', position: { top: top + window.scrollY, left: left }});
    setModel(true);
  }
  const handleActionButtonClick =(action,item,e)=>{
    const { top, left } = e.target.getBoundingClientRect();
   setModelData({type:action,...item, position: { top: top + window.scrollY, left: left }});
   setModel(true);
  }
  return (
    <div className="Container">
      <table className="table table-bordered">
        <thead className="thead">
          <tr>
            <th scope="col">Patient Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Parent</th>
            <th scope="col" className="immediateActionText">immediate Actions</th>
            <th scope="col">Due Date</th>
            <th scope="col" >Actions</th>
          </tr>
        </thead>
        <tbody className="tableDetails">
          {props.data.map((item) => (
            <tr key={item.id}>
              <td >
                <a href="#" onClick={(e)=>handlePatientClick(item,e)}>{item?.patientName}</a>
                </td>
              <td>{item?.Contact}</td>
              <td>{item?.Parent}</td>
              <td>{item?.immediateActions}</td>
              <td>{item?.dueDate}</td>
              <td className="multiButton">
                <button className="btn btn-info" name='vaccines' onClick={(e)=>handleActionButtonClick("Vaccines",item,e)}>Vaccines</button>
                <button  className="btn btn-warning ml-2"  onClick={(e)=>handleActionButtonClick("Fallowup",item,e)}>Followup</button>
                <button  className="btn btn-danger ml-2"  onClick={(e)=>handleActionButtonClick("Lab Test",item,e)}>Lab Test</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {model &&<ModelComponent  data={modelData} onClose={()=>setModel(false)}/>}
    </div>
  );
};

export default Table;
