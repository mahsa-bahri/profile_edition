import React, { useState, useEffect, useRef } from "react";
import "./logout.css";

export default function Logout(props) {
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userData");
    props.IsOpenChanger(false)
  };
  
  return (
    <div className="dropdown">
      <div>
        <div className="dropdown-content">
          <div className="small-line"></div>
          <p className="logut-title">log out </p>
          log out are you sure you want to logout?
          <div className="logout-btns">
            <button
              className="logout-btn"
              style={{ backgroundColor: "white", color: "blue" }}
              onClick={()=>props.IsOpenChanger(false)}
            >
              cancel
            </button>
            <button
              className="logout-btn"
              style={{
                backgroundColor: "rgba(92, 135, 226, 0.856)",
                color: "black",
              }}
              onClick={handleLogout}
            >
              yes, logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
