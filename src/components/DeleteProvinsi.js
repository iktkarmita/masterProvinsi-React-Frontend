import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteProvinsi = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const id_prov = new URLSearchParams();
  id_prov.append("id_prov", id);

  const deleteProvinsi = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://34.101.172.140:3005/api/propinsi/delete",
        id_prov
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={deleteProvinsi}>
          <div className="field">
            <label className="label">ID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={id}
                onChange={(e) => id(e.target.value)}
                placeholder="id"
                required
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteProvinsi;
