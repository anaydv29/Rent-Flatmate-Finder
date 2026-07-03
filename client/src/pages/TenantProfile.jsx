import { useState } from "react";
import API from "../services/api";

function TenantProfile() {
  const [form, setForm] = useState({
    preferredLocation: "",
    budgetMin: "",
    budgetMax: "",
    moveInDate: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tenant/profile", form);

      alert("Profile Saved Successfully");

    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container">
      <h1>Tenant Profile</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="preferredLocation"
          placeholder="Preferred Location"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="budgetMin"
          placeholder="Minimum Budget"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="budgetMax"
          placeholder="Maximum Budget"
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="moveInDate"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default TenantProfile;