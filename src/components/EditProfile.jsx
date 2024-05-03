import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: "mahsa ",
    familyName: "",
    email: "",
    birthdate: "",
    phoneNumber: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="profile-page" >
      <p className="profile-title"><Link to="/profile"><IoArrowBack color="white"/></Link> Edit Profile</p>
      <form onSubmit={handleSubmit} className="profile-edit-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={formData.name}
        />
        <br />
        <input
          type="text"
          name="familyname"
          value={formData.familyName}
          onChange={handleChange}
          placeholder={formData.familyName}
        />
        <br />
        <input
          type="date"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          placeholder={formData.birthdate}
        />
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={formData.email}
        />
        <br />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder={formData.phoneNumber}

        />
        <br />
        <select name="gender" value={formData.gender} onChange={handleChange} >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <button type="submit">update</button>
      </form>
    </div>
  );
}
