import React from "react";
import { useSelector } from "react-redux";
import { Displaycontact } from "./Displaycontact";

export const Deletecontact = () => {
  const contact = useSelector((state) => state.contact.contactList);
  const deletehanduler = (itemID) => {
    contact.filter((item) => item.id !== itemID);
  };
  return (
    <div>
      <Displaycontact ondeletehanduler={deletehanduler} />
    </div>
  );
};
