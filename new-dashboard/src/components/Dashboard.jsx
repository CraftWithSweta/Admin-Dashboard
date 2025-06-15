import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const barData = {
    labels: ['Users', 'Sales', 'Revenue', 'Growth'],
    datasets: [
      {
        label: 'This Month',
        data: [30, 70, 60, 90],
        backgroundColor: '#3b82f6',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };

  return (
    <main className="ml-64 p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm text-gray-500">Total Users</p>
          <h2 className="text-xl font-bold text-blue-600">1,024</h2>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm text-gray-500">Sales</p>
          <h2 className="text-xl font-bold text-green-600">$7,600</h2>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm text-gray-500">Revenue</p>
          <h2 className="text-xl font-bold text-purple-600">$12,430</h2>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-sm text-gray-500">Growth</p>
          <h2 className="text-xl font-bold text-yellow-600">+18%</h2>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Performance Chart</h3>
        <Bar data={barData} options={barOptions} />
      </div>
    </main>
  );
};

export default Dashboard;
