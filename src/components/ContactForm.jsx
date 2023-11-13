"use client";

import { useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    const send = await fetch("http://localhost:3000/email/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "shifa.newversion@gmail.com", text: formData.message, subject: "Coming from website" }),
    });
    setFormData({});
    console.log(send);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="text" name="email" className="form-control" value={formData.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input type="text" name="phone_number" className="form-control" value={formData.phone_number} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea name="message" className="form-control" rows={4} value={formData.message} onChange={handleChange} />
      </div>
      <input type="submit" value="Submit" className="btn btn-sm btn-primary" />
    </form>
  );
};
export default ContactForm;
