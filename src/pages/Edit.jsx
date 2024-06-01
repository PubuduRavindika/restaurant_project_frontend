import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Edit = () => {
  // get id from url
  const param = useParams();
  const id = param.id;

  // store deatils of restaurent
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    telephone: "",
  });

  // fetch restaurant data
  useEffect(() => {
    const fetchedRestaurent = async () => {
      try {
        const response = await axios.get(
          `${assets.BASE_URL}/api/restaurants/${id}`
        );
        if (response.data.success) {
          setRestaurant(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching the restaurant data:", error);
      }
    };

    fetchedRestaurent();
  }, [id]);

  // handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  // handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `${assets.BASE_URL}/api/restaurants/${id}`,
        restaurant
      );
      if (response.data.success) {
        toast.success("Restaurant updated successfully!");
      }
    } catch (error) {
      console.error("Error updating the restaurant:", error);
      toast.error("Error updating the restaurant");
    }
  };

  return (
    <div className="w-[70%] ml-6 mt-12 text-[#6d6d6d] text-lg">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="max-w-[60%] flex flex-col gap-3 sm:max-w-[100%]">
          <p>Restaurant Name</p>
          <input
            className="p-1.5 border-2"
            type="text"
            name="name"
            onChange={handleChange}
            value={restaurant.name}
          />
        </div>

        <div className="max-w-[60%] flex flex-col gap-3 sm:max-w-[100%]">
          <p>Address</p>
          <input
            className="p-1.5 border-2"
            type="text"
            name="address"
            onChange={handleChange}
            value={restaurant.address}
          />
        </div>

        <div className="max-w-[60%] flex flex-col gap-3 sm:max-w-[100%]">
          <p>Telephone No</p>
          <input
            className="p-1.5 border-2"
            type="text"
            name="telephone"
            onChange={handleChange}
            value={restaurant.telephone}
          />
        </div>
        <button
          className="max-w-[150px] bg-[black] text-white p-1.5"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit;
