import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProvinsiList = () => {
  const [provinsi, setProvinsi] = useState([]);

  useEffect(() => {
    getProvinsi();
  }, []);

  const getProvinsi = async () => {
    const response = await axios.get(
      "http://34.101.172.140:3005/api/propinsi/list"
    );
    setProvinsi(response.data.data);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {provinsi.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>
                  <Link
                    to={`edit/${data.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`deletes/${data.id}`}
                    className="button is-small is-danger"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProvinsiList;
