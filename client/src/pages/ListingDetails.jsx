import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function ListingDetails() {
  const { id } = useParams();

  const [listing, setListing] = useState(null);
  const [compatibility, setCompatibility] = useState(null);

  useEffect(() => {
    fetchListing();
  }, []);

  const fetchListing = async () => {
    try {
      const res = await API.get(`/listings/${id}`);
      setListing(res.data.listing);
    } catch (error) {
      console.log(error);
    }
  };

  const checkCompatibility = async () => {
    try {
      const res = await API.get(`/ai/compatibility/${id}`);
      setCompatibility(res.data.compatibility);
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  if (!listing) return <h2>Loading...</h2>;

  return (
    <div className="container">

      <h1>{listing.title}</h1>

      <p><b>Location:</b> {listing.location}</p>

      <p><b>Rent:</b> ₹{listing.rent}</p>

      <p><b>Room Type:</b> {listing.roomType}</p>

      <p><b>Owner:</b> {listing.owner.name}</p>

      <p><b>Phone:</b> {listing.owner.phone}</p>

      <button onClick={checkCompatibility}>
        Check AI Compatibility
      </button>

      {compatibility && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid gray",
            borderRadius: "10px",
          }}
        >
          <h2>Compatibility Score</h2>

          <h1>{compatibility.score}%</h1>

          <ul>
            {compatibility.reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default ListingDetails;