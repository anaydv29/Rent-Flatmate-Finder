import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function CreateListing() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    location: "",
    rent: "",
    availableFrom: "",
    roomType: "Shared",
    furnished: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/listings", form);

      alert("Listing Created Successfully");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Error creating listing");
    }
  };

  return (
    <div className="container">
      <h1>Create Listing</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
        />

        <input
          name="rent"
          type="number"
          placeholder="Rent"
          onChange={handleChange}
          required
        />

        <input
          name="availableFrom"
          type="date"
          onChange={handleChange}
          required
        />

        <select
          name="roomType"
          onChange={handleChange}
        >
          <option>Single</option>
          <option>Shared</option>
          <option>PG</option>
        </select>

        <br /><br />

        <label>
          <input
            type="checkbox"
            name="furnished"
            onChange={handleChange}
          />
          Furnished
        </label>

        <br /><br />

        <button type="submit">
          Create Listing
        </button>

      </form>
    </div>
  );
}

export default CreateListing;