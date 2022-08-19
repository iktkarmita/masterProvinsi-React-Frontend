import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProvinsi = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const saveProvinsi = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://34.101.172.140:3005/api/propinsi/add", {
        id,
        name,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveProvinsi}>
          <div className="field">
            <label className="label">id</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="id"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
                required
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProvinsi;
