import React from "react";

const Edit = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
        
          name="date"
          value={editFormData.date}
          onChange={handleEditFormChange}
        ></input>
      </td>
     
      
      <td>
        <button  className="buttonClass"  type="submit">Save</button>
        <button className="buttonClass2" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Edit;