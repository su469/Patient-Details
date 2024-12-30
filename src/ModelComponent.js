import React from "react";

const ModelComponent = ({ data, onClose }) => {
  const { top, left } = data?.position || { top: 0, left: 0 };
  return (
    <div
      class="modalfade"
      id="staticBackdrop"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: `${top}px`, 
        left: `${left}px`,
        zIndex: 1050,
      }}
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5>Patient Details</h5>
            <button
              type="button"
              class="btn-close"
              onClick={onClose}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="model-body">
           {data?.type === 'Patient Details'?(
            <>
          <h6>{data?.patientName}</h6>
          <p>{data.Contact}</p>
            <p><strong>Parent:</strong> {data.Parent}</p>
            <p><strong>Due Date:</strong> {data.dueDate}</p>
          </>
        
           ):(
            <>
           <h6>{data.type}</h6>
           <p>{data.patientName}</p>
           </>
           )}
           </div>
        </div>
      </div>
    </div>
  );
};
export default ModelComponent;
