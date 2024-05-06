import React, { useState, useEffect, useRef } from "react";
import "./logout.css";

export default function Logout() {
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);

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

  return (
    <div className="dropdown">
      <div>
        <div className="dropdown-content">
          <p className="logut-title">log out </p>
          log out are you sure you want to logout?
          <div className="logout-btns">
          <button className="logout-btn" style={{backgroundColor:'white', color:'blue'}}>cancel</button>
          <button className="logout-btn" style={{backgroundColor:'blue', color:'black'}}>yes, logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
