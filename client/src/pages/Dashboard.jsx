import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (user?.role === "owner") {
      fetchListings();
    }
  }, []);

  const fetchListings = async () => {
    try {
      const res = await API.get("/listings/my-listings");
      setListings(res.data.listings);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteListing = async (id) => {
    if (!window.confirm("Delete this listing?")) return;

    try {
      await API.delete(`/listings/${id}`);

      alert("Listing Deleted");

      fetchListings();
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container">

      <h1>Dashboard</h1>

      <h2>Welcome {user?.name}</h2>

      <p>Role: {user?.role}</p>

      {user?.role === "owner" ? (
        <>
          <h2>My Listings</h2>

          {listings.length === 0 ? (
            <p>No Listings Found</p>
          ) : (
            listings.map((listing) => (
              <div
                key={listing._id}
                style={{
                  border: "1px solid gray",
                  padding: "15px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                }}
              >
                <h3>{listing.title}</h3>

                <p>{listing.location}</p>

                <p>₹{listing.rent}</p>

                <button
                  onClick={() => deleteListing(listing._id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </>
      ) : (
        <>
          <h2>Tenant Dashboard</h2>

          <p>Browse rooms and check AI compatibility.</p>
        </>
      )}

    </div>
  );
}

export default Dashboard;