import React from "react";

export const VisibilityControl = ({isChecked,setShowCompleted,handleDelete}) => {
    const Delete=()=>{
        if(window.confirm('Are you sure want to delete it? ')){
            handleDelete()
        }
    }

  return (
    <div className=" d-flex justify-content-between  bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
      <input
        type="checkbox"
        className="form-check-input"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label>Show Tasks Done</label>
      </div>
      <button onClick={Delete} className='btn btn-danger btn-sm'>Clear</button>
    </div>
  );
};
