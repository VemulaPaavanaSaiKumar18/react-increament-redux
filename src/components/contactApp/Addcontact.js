import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newcontacts } from "../../store/contact";
let count = 0;
export const Addcontact = () => {
  // const contact = useSelector((state) => state.contact.contactList);
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      id: count++,
      name: name,
      number: number,
    };
    dispatch(newcontacts.newcontact(data));
    setname("");
    setnumber("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(event) => setname(event.target.value)}
        />
        <input
          type="number"
          value={number}
          onChange={(event) => setnumber(event.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};
