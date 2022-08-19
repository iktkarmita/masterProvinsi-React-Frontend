import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProvinsi = () => {
  const [name, setName] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProvinsiById();
  }, []);

  const updateProvinsi = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://34.101.172.140:3005/api/propinsi/update/?id_prov=${id}`,
        {
          name,
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getProvinsiById = async () => {
    const response = await axios.get(
      `http://34.101.172.140:3005/api/propinsi/viewedit/?id_prov=${id}`
    );
    setName(response.data.data[0].name);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateProvinsi}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProvinsi;
