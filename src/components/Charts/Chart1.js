import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart1 = () => {
  const data = [
    {
      name: "Facebook",
      sales: 4000,
      revenue: 2400,
      cost: 2400,
    },
    {
      name: "Instagram",
      sales: 3000,
      revenue: 1398,
      cost: 2210,
    },
    {
      name: "Linkedin",
      sales: 2000,
      revenue: 9800,
      cost: 2290,
    },
    {
      name: "Twitter",
      sales: 2780,
      revenue: 3908,
      cost: 2000,
    },
    {
      name: "Behance",
      sales: 1890,
      revenue: 4800,
      cost: 2181,
    },
  ];
  return (
    <>
      {" "}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          className="text-primary"
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sales"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="cost"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>{" "}
      <h1 className="text-center">sales in Different social media</h1>
    </>
  );
};

export default Chart1;
