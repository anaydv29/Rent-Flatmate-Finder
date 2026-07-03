import { Routes, Route } from "react-router-dom";
import ListingDetails from "./pages/ListingDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateListing from "./pages/CreateListing";
import TenantProfile from "./pages/TenantProfile";
import Chat from "./pages/Chat";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
     <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/create-listing" element={<CreateListing />} />

      <Route path="/tenant-profile" element={<TenantProfile />} />

      <Route path="/chat" element={<Chat />} />

      <Route path="/listing/:id" element={<ListingDetails />} />
    </Routes>
    </>
  );
}

export default App;