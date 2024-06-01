import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Add = () => {
  // store data in state
  const [data, setData] = useState({
    name: "",
    address: "",
    telephone: "",
  });

  // handle form input changes
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // handle form submit
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${assets.BASE_URL}/api/restaurants/add`,
        data
      );

      if (response.data.success) {
        setData({
          name: "",
          address: "",
          telephone: "",
        });
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      toast.error(response.data.message);
    }
  };

  return (
    <div className="w-[70%] ml-6 mt-12 text-[#6d6d6d] text-lg">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
        <div className="max-w-[60%] flex flex-col gap-3 sm:max-w-[100%]">
          <p>Restaurant Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className="p-1.5 border-2"
            type="text"
            name="name"
            placeholder="Enter Restaurant Name"
          />
        </div>

        <div className="max-w-[60%] flex flex-col gap-3 sm:max-w-[100%]">
          <p>Address</p>
          <input
            onChange={onChangeHandler}
            value={data.address}
            className="p-1.5 border-2"
            type="text"
            name="address"
            placeholder="Enter Address"
          />
        </div>

        <div className="max-w-[60%] flex flex-col gap-3 sm:max-w-[100%]">
          <p>Telephone No</p>
          <input
            onChange={onChangeHandler}
            value={data.telephone}
            className="p-1.5 border-2"
            type="text"
            name="telephone"
            placeholder="Enter Telephone No"
          />
        </div>
        <button
          className="max-w-[120px] bg-[black] text-white p-1.5"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
