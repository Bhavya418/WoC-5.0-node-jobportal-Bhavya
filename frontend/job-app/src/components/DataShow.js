import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContextApp from "../context/ContextApp";

const DataShow = () => {
  const context = useContext(ContextApp);
  const Navigate = useNavigate();
  const { editData, getData } = context;
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
    }
    else{
        Navigate("/login");
    }
  })
  return (
    <div className="container flex flex-row justify-content-center align-items-center">
      <h2>Your Data</h2>
    </div>
  );
};

export default DataShow;
