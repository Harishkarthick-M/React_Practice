import React, { useState } from "react";
import RegistrationTable from "../pages/Registration";

const Landing = ({ addEntry }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    food: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(formData);
    setFormData({ name: "", email: "", phone: "", city: "", food: "" });
  };

  return (
    <div>
      <h2>Hackathon Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required /><br />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required /><br />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required /><br />
        
        <label>Food Preference:</label>
        <select name="food" value={formData.food} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Veg">Veg</option>
          <option value="Non-veg">Non-Veg</option>
        </select><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Landing;
