import React, { useState } from "react";

export default function PatientFormModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    contact: "",
    gender: "Other",
    address: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.firstName || !form.lastName) {
      alert("First name and last name are required.");
      return;
    }
    onSave(form);
  }

  return (
    <div className="flex flex-col gap-2 mt-5">
      <div className="modal-card animate-slide">
        <h2 className="modal-title">➕ Add New Patient</h2>

        <form onSubmit={handleSubmit} className="modal-form bg-white">
          <div className="form-group">
            <label>First Name : </label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name : </label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Age : </label>
              <input
                name="age"
                type="number"
                value={form.age}
                onChange={handleChange}
                placeholder="e.g. 32"
              />
            </div>

            <div className="form-group">
              <label>Gender : </label>
              <select name="gender" value={form.gender} onChange={handleChange}>
                <option selected>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Contact : </label>
            <input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
            />
          </div>

          <br />

          <div className="form-group">
            <label>Address : </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter address"
              rows="2"
              className="border outline-0"
            />
          </div>

          <div>
            <label htmlFor="">Note : </label>
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Enter Your illness"
              rows="2"
              className="border outline-0"
            />
          </div>

          <div className="flex gap-3">
            <button type="button" className="bg-red-500 text-white p-3 rounded-lg" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg">
              Save Patient
            </button>
          </div>

          
        </form>
      </div>
    </div>
  );
}
