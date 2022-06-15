import React from "react";
import Sectiontille from "./../../components/Loading/Sectiontille";

const Employe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      e.target.name.value,
      e.target.salary.value,
      e.target.gender.value,
      e.target.department.value
    );
  };
  return (
    <div className="pt-20 mb-10 p-5 md:px-10">
      <h1>
        <Sectiontille>Employee</Sectiontille>
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
      </h1>
    </div>
  );
};

export default Employe;
