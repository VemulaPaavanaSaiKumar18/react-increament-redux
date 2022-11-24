import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { newcontacts } from "../../store/contact";
export const Displaycontact = (props) => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contactList);
  const deletehanduler = (event) => {
    dispatch(newcontacts.deletecontact(event.target.id));
  };
  return (
    <div>
      {contact.map((item) => (
        <div id={item.id} key={item.name} onClick={deletehanduler}>
          <h3>{item.name}</h3>
          <p>{item.number}</p>
        </div>
      ))}
    </div>
  );
};
