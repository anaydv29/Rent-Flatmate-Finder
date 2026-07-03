import { Link } from "react-router-dom";

function ListingCard({ listing }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        background: "#fff",
      }}
    >
      <h2>{listing.title}</h2>

      <p>📍 {listing.location}</p>

      <p>💰 ₹{listing.rent}</p>

      <p>🛏️ {listing.roomType}</p>

      <p>👤 {listing.owner?.name}</p>

      <Link to={`/listing/${listing._id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ListingCard;