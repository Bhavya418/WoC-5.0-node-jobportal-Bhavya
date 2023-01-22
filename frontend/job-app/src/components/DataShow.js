import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContextApp from "../context/ContextApp";

const DataShow = () => {
  const context = useContext(ContextApp);
  const Navigate = useNavigate();
  const { editData, getData ,studentData} = context;
  const [data, setData] = useState({
    ename: "",
    eStudentID: "",
    eaddress: "",
    ecpi: "",
    econtactDetails: "",
    eemail: "",
  });
  useEffect(()=>{
    if(localStorage.getItem("token")){
        getData();
        localStorage.Windows.reload();
    }
    else{
        Navigate("/login");
    }
  },[])
  return (
    <div >
      <h2>Your Data</h2>
      {studentData.map((data) => {
        return(
            <div>
            <h1>Name : {data.name}</h1>
            <h1>Student ID : {data.StudentID}</h1>
            <h1>Address : {data.address}</h1>
            <h1>CPI : {data.cpi}</h1>
            <h1>email : {data.email}</h1>
            <h1>Contact Details : {data.contactDetails}</h1>

</div>        )
        
      }
      )}
      </div>
  )
};

export default DataShow;
