import React from "react";
import Chart1 from "../../components/Charts/Chart1";
import Sectiontille from "./../../components/Loading/Sectiontille";
import Chart2 from "./../../components/Charts/Chart2";
import Chart3 from "./../../components/Charts/Chart3";

const Dashboard = () => {
  return (
    <div className="pt-20 mb-10 p-5 md:px-10">
      <h1>
        <Sectiontille>dashboard</Sectiontille>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div class="stats stats-vertical md:stats-horizontal shadow">
          <div class="stat">
            <div class="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Total Likes</div>
            <div class="stat-value text-primary">25.6K</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <div class="avatar online">
                <div class="w-16 rounded-full">
                  <img
                    src="https://api.lorem.space/image/face?w=128&h=128"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="stat-value">86%</div>
            <div class="stat-title">Tasks done</div>
            <div class="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
        <div class="stats bg-primary text-primary-content stats-vertical md:stats-horizontal">
          <div class="stat">
            <div class="stat-title">Account balance</div>
            <div class="stat-value">$89,400</div>
            <div class="stat-actions">
              <button class="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title">Current balance</div>
            <div class="stat-value">$89,400</div>
            <div class="stat-actions">
              <button class="btn btn-sm">Withdrawal</button>
              <button class="btn btn-sm">deposit</button>
            </div>
          </div>
        </div>
        <div class="stats stats-vertical md:stats-horizontal shadow">
          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Downloads</div>
            <div class="stat-value">31K</div>
            <div class="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div class="stat-title">New Registers</div>
            <div class="stat-value">1,200</div>
            <div class="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
        <div className="h-60">
          <Chart1 />
        </div>
        <div className="h-60">
          <Chart2 />
        </div>
        <div className="h-60">
          <Chart3 />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
