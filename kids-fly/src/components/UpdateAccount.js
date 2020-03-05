import React, { useContext, useEffect, useState } from "react";

import { axiosWithAuth } from '../utils/axiosWithAuth';

import IdContext from '../context/IdContext';

import { Link } from "react-router-dom";

const initialInfo = {
  name: "",
  address: "",
  phone: "",
  username: ""
}

const UpdateAccount = props => {
  const {id} = useContext(IdContext);

  const [newInfo, setNewInfo] = useState(initialInfo);

  const handleChange = e => {
    setNewInfo({
      ...newInfo,
      [e.target.name]: e.target.value
    })
  };

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get(`https://kidsfly1.herokuapp.com/api/users/${id}`)
      .then(res => {
        console.log("res", res.data);
        setNewInfo({
          name: res.data.name,
          address: res.data.address,
          phone: res.data.phone,
          username: res.data.username
        })
      })
      .catch(err => {console.log(err)});
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("this is newInfo", newInfo);
    // this is where axios goes
    axiosWithAuth()
      .put(`https://kidsfly1.herokuapp.com/api/users/${id}`, newInfo)
      .then(res => {
        console.log("this is res", res);
        props.history.push("/account");
      })
      .catch(err => {console.log("Error: ", err);});
  };

  return (
    <div>
      <h2>Update Your Personal Information</h2>
      <form onSubmit={handleSubmit} className="form-styled">

      <div className="field-container">
          <label htmlFor="name">Name:
            <input className="field-styled"
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={newInfo.name}
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="address">Address: 
            <input className="field-styled"
              id="address"
              type="text"
              name="address"
              onChange={handleChange}
              value={newInfo.address}
              // placeholder=""
            />
          </label>
        </div>

        <div className="field-container">
          <label htmlFor="phone">Phone: 
            <input className="field-styled"
              id="phone"
              type="text"
              name="phone"
              onChange={handleChange}
              value={newInfo.phone}
            />
          </label>
        </div>

        <div className="btn-container">
          
          <button className="btn-Style" type="submit">Update</button>

          <Link to="/account">
            <button className="btn-Style">Return</button>
          </Link>
        </div>

      </form>
    </div>
  )
};

export default UpdateAccount;