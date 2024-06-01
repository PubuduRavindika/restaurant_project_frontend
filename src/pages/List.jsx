import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const List = () => {
  // store list of restaurents
  const [list, setList] = useState([]);

  // fetch list of restaurents
  const fetchList = async () => {
    const response = await axios.get(`${assets.BASE_URL}/api/restaurants/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error in fetching list");
    }
  };

  // remove restaurent
  const removeRestaurent = async (restaurantId) => {
    const response = await axios.delete(
      `${assets.BASE_URL}/api/restaurants/${restaurantId}`
    );
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error in removing restaurant");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-[70%] ml-6 mt-12 text-[#6d6d6d] text-lg flex flex-col gap-5 sm:w-[80%] sm:ml-2">
      <p>All Restaurent List</p>
      <div>
        <div className="bg-[#f9f9f9] grid grid-cols-5 items-center gap-4 px-4 py-3 text-sm border-2 border-[#cacaca]">
          <b>Name</b>
          <b>Address</b>
          <b>Telephone No</b>
          <b>Remove</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-5 items-center gap-4 px-4 py-3 text-sm border-2 border-[#cacaca]"
            >
              <p>{item.name}</p>
              <p>{item.address}</p>
              <p>{item.telephone}</p>
              <img
                src={assets.remove_icon_red}
                onClick={() => removeRestaurent(item._id)}
                className="cursor-pointer w-6"
                alt=""
              />
              <Link to={`/edit/${item._id}`}>
                <p className="cursor-pointer text-[tomato]">Edit</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
