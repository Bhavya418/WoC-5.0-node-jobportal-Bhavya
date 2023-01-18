import contextApp from "./contextApp";
import { useState } from "react";

const stateApp = () => {
  const host = "http://localhost:5000";
  const initialData = [];
  const [studentData, setStudentData] = useState(initialData);
  const addData = async (
    name,
    StudentID,
    address,
    cpi,
    contactDetails,
    email
  ) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name,
        StudentID,
        address,
        cpi,
        contactDetails,
        email,
      }),
    });
    const newData= await response.json();
    setStudentData(newData);
  };
  return <contextApp.Provider value={{addData}}>{props.children}</contextApp.Provider>;
};

export default stateApp;
