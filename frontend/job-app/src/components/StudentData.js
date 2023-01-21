import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContextApp from "../context/ContextApp";
const StudentData = () => {
  const Navigate = useNavigate();
  const context = useContext(ContextApp);
  const { addData } = context;
  const [data, setData] = useState({
    name: "",
    StudentID: "",
    address: "",
    cpi: "",
    contactDetails: "",
    email: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addData(
      data.name,
      data.StudentID,
      data.address,
      data.cpi,
      data.contactDetails,
      data.email
    );
    setData({
      name: "",
      StudentID: "",
      address: "",
      cpi: "",
      contactDetails: "",
      email: "",
    });
    Navigate("/dataShow");
  };
  const onChange = (e) => {
    setData({...data,[e.target.name]:e.target.value});
  };
  return (
    <div>
      <form >
        <div className="container">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="name"
            name="name"
            value={data.name}
            onChange={onChange}
            placeholder="Name"
          />
        </div>
        <div className="container">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="StudentID"
            name="StudentID"
            value={data.StudentID}
            onChange={onChange}
            placeholder="Student ID"
          />
        </div>
        <div className="container">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="address"
            name="address"
            value={data.address}
            onChange={onChange}
            placeholder="address"
          />
        </div>
        <div className="container">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="Contact Number"
            name="contactDetails"
            value={data.contactDetails}
            onChange={onChange}
            placeholder="Contact Number"
          />
        </div>
        <div className="container">
          <input
            type="email"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="email"
            name="email"
            value={data.email}
            onChange={onChange}
            placeholder="Email address"
          />
        </div>
        <div className="container">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="CPI"
            name="cpi"
            value={data.cpi}
            onChange={onChange}
            placeholder="CPI"
          />
        </div>
        <button type="submit" onClick={handleClick}>
        add Data
        </button>
      </form>
    </div>
  );
};

export default StudentData;
