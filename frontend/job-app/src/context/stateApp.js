import ContextApp from "./ContextApp";
import { useState } from "react";

const StateApp = (props) => {
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
    const response = await fetch(
      "http://localhost:5000/api/studentData/addData",
      {
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
      }
    );
    const newData = await response.json();
     setStudentData(studentData.push(newData));
  };
  const editData = () => {};
  const getData = async () => {
    const response = await fetch(
      "http://localhost:5000/api/studentData/fetchData",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    console.log(json)
    setStudentData(json);
    console.log(studentData)
    
  };
  return (
    <ContextApp.Provider value={{ studentData,addData, editData, getData }}>
      {props.children}
    </ContextApp.Provider>
  );
};

export default StateApp;
