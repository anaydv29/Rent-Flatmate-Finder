import { useEffect, useState } from "react";
import API from "../services/api";
import ListingCard from "../components/ListingCard";

function Home() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  const [location, setLocation] = useState("");
  const [roomType, setRoomType] = useState("");

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const res = await API.get("/listings");
      setListings(res.data.listings);
      setFilteredListings(res.data.listings);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let data = [...listings];

    if (location) {
      data = data.filter((item) =>
        item.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (roomType) {
      data = data.filter((item) => item.roomType === roomType);
    }

    setFilteredListings(data);
  }, [location, roomType, listings]);

  return (
    <div className="container">
      <h1>Available Rooms</h1>

      <br />

      <input
        placeholder="Search by Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <br />

      <select
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
      >
        <option value="">All Room Types</option>
        <option value="Single">Single</option>
        <option value="Shared">Shared</option>
        <option value="PG">PG</option>
      </select>

      <br />
      <br />

      {filteredListings.length === 0 ? (
        <h3>No Listings Found</h3>
      ) : (
        filteredListings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))
      )}
    </div>
  );
}

export default Home;