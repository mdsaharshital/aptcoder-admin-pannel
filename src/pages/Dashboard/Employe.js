import React, { useEffect, useState } from "react";
import axios from "axios";
import Sectiontille from "./../../components/Loading/Sectiontille";

const Employe = () => {
  const [allEmploye, setAllEmploye] = useState();
  const apiUrl = "http://localhost:5000";

  useEffect(() => {
    const getAllEmploye = () => {
      axios.get(`${apiUrl}/all`).then((response) => {
        console.log("all", response);
        setAllEmploye(response.data);
      });
    };
    getAllEmploye();
  }, []);
  // ==========
  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeData = {
      name: e.target.name.value,
      salary: parseInt(e.target.salary.value),
      gender: e.target.gender.value,
      department: e.target.department.value,
    };
    console.log(employeeData);
  };
  return (
    <div className="pt-20 mb-10 p-5 md:px-10">
      <h1>
        <Sectiontille>Employee</Sectiontille>
      </h1>
      <h1 className="my-5">Add Employee</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            class="input input-bordered w-full max-w-xs"
            required
          />
          <input
            name="salary"
            type="number"
            placeholder="Salary"
            class="input input-bordered w-full max-w-xs"
            required
          />
          <select
            name="gender"
            required
            class="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Gender
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>other</option>
          </select>
          <select
            required
            name="department"
            class="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Department
            </option>
            <option>Sales</option>
            <option>Accounts</option>
            <option>Marketing</option>
            <option>Management</option>
          </select>
          <input
            type="submit"
            value="Add"
            class="input input-bordered cursor-pointer bg-primary text-accent  w-full max-w-xs"
          />
        </div>
      </form>
      <h1 className="my-5">Total Employee {allEmploye?.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Salary</th>
              <th>Gender</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {allEmploye?.map((e) => (
              <tr key={e.id}>
                <th>1</th>
                <td>{e?.name}</td>
                <td>{e?.salary}</td>
                <td>{e?.gender}</td>
                <td>{e?.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employe;
