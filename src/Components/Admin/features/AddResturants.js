import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Gif from "../../Main/Loaders/success.gif";
import "react-toastify/dist/ReactToastify.css";
import BackButton from "../../Accounts/BackButton";

const RestaurantComponent = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/restaurants/");
      setRestaurants(response.data);
    } catch (error) {
      toast.error("Failed to fetch restaurants");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    if (photo) {
      formData.append("photo", photo);
    } else if (photoUrl) {
      formData.append("photo_url", photoUrl);
    }

    try {
      await axios.post("https://usermanagement-kbe1.onrender.com/restaurants", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setName("");
      setAddress("");
      setPhoto(null);
      setPhotoUrl("");
      fetchRestaurants();
      toast.success("Restaurant added successfully!");
      setShowSuccessModal(true); // Show the success modal
      setTimeout(() => setShowSuccessModal(false), 3000); // Hide the modal after 3 seconds
    } catch (error) {
      toast.error("Failed to add restaurant");
    }
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleAddItem = (restaurantId) => {
    console.log("Add item for restaurant ID:", restaurantId);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-orange-50 rounded-lg shadow-lg space-y-6">
      <h2 className="text-3xl font-extrabold text-orange-700 mb-4">
        Add Restaurant
      </h2>
      <BackButton/>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <div>
          <label className="block text-orange-600 font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full border-orange-300 rounded-md shadow-sm h-12 px-4 py-2 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-orange-600 font-medium">Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="mt-1 block w-full border-orange-300 rounded-md shadow-sm h-12 px-4 py-2 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-orange-600 font-medium">
            Photo Upload:
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 block w-full border-orange-300 rounded-md shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-orange-600 font-medium">
            Or Enter Photo URL:
          </label>
          <input
            type="text"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            placeholder="http://example.com/photo.jpg"
            className="mt-1 block w-full border-orange-300 rounded-md shadow-sm h-12 px-4 py-2 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-orange-700 transition duration-300"
        >
          Add Restaurant
        </button>
      </form>

      <h3 className="text-2xl font-semibold text-orange-800">
        Restaurants List
      </h3>
      <ul className="space-y-4">
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            className="p-4 border border-orange-200 rounded-lg shadow-sm bg-white hover:bg-orange-50 transition duration-300 flex flex-col items-start"
          >
            <h4 className="text-xl font-semibold text-orange-700">
              {restaurant.name}
            </h4>
            <p className="text-gray-600">{restaurant.address}</p>

            <img
              src={restaurant.photo_url || null}
              alt={restaurant.name}
              className="mt-2 w-48 h-48 object-cover rounded-md border border-orange-300"
            />

            <button
              onClick={() => handleAddItem(restaurant.id)}
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-orange-600 transition duration-300"
            >
              <Link to="/resturantitems">Add Restaurant Item</Link>
            </button>
          </li>
        ))}
      </ul>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <img src={Gif} alt="Success" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-600">Success!</h3>
            <p className="text-gray-700">Restaurant added successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantComponent;