import React, { useState, useEffect, useRef } from "react";
import "./logout.css";

export default function Logout(props) {
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userData");
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);
  function hancleClick(e) {
    props.onIsOpen({...props.isOpen})
  }
  return (
    <div className="dropdown">
      <div>
        <div className="dropdown-content">
          <p className="logut-title">log out </p>
          log out are you sure you want to logout?
          <div className="logout-btns">
            <button
              className="logout-btn"
              style={{ backgroundColor: "white", color: "blue" }}
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
