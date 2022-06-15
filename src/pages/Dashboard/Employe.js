import React, { useEffect, useState } from "react";
import axios from "axios";
import Sectiontille from "./../../components/Loading/Sectiontille";
import { toast } from "react-toastify";
import { GiCancel } from "react-icons/gi";
import { FiFilter } from "react-icons/fi";

const Employe = () => {
  const [allEmploye, setAllEmploye] = useState();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const apiUrl = "http://localhost:5000";
  const getAllEmploye = () => {
    axios.get(`${apiUrl}/all`).then((response) => {
      console.log("all", response);
      setAllEmploye(response.data);
    });
  };
  useEffect(() => {
    getAllEmploye();
  }, []);
  // ==========
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.gender.value === "Gender" ||
      e.target.department.value === "Department"
    ) {
      return toast.error("Please provide all data");
    }
    const employeeData = {
      name: e.target.name.value,
      salary: parseInt(e.target.salary.value),
      gender: e.target.gender.value,
      department: e.target.department.value,
    };

    axios.post(`${apiUrl}/create`, employeeData).then((response) => {
      console.log("all", response);
      if (response.status === 200) {
        getAllEmploye();
        toast.success(response.data);
      }
    });
    e.target.reset();
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
      <div class="divider"></div>

      <div className="md:flex items-center mb-8">
        <h1 className="my-5 flex-1">Total Employee {allEmploye?.length}</h1>
        {isFilterOpen ? (
          <div className="md:flex items-center gap-2 flex-2">
            <select
              name="gender"
              required
              class="select select-bordered w-full max-w-xs flex-1"
            >
              <option selected>Name</option>
              <option>Salary</option>
              <option>Gender</option>
              <option>Department</option>
            </select>
            <span className="flex items-center">
              <input
                name="search"
                type="text"
                placeholder="Search"
                class="input input-bordered w-full max-w-xs flex-1 mr-2"
                required
              />
              <h1
                className="text-xl cursor-pointer"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <GiCancel />
              </h1>
            </span>
          </div>
        ) : (
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="btn btn-xs btn-outline w-20"
          >
            Filter <FiFilter />
          </button>
        )}
      </div>

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
            {allEmploye?.map((e, index) => (
              <tr key={e.id}>
                <th>{index + 1}</th>
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
