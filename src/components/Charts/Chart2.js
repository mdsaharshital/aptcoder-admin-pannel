import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart2 = () => {
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
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" stackId="a" fill="#8884d8" />
        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        <Bar dataKey="cost" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart2;
