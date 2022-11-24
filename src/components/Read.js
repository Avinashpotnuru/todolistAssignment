import React from "react";

const Read = ({ contact, handleEditClick, handleDeleteClick}) => {
    // const [check,setCheck]=useState(false)
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.date}</td>
      
      

      
      <td>
      {/* <input onClick={()=>setCheck(prev=>!prev)} type="checkbox"/> */}
        <button
        className="buttonClass"
          type="button button2"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button className="buttonClass2" type="button button3" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Read;