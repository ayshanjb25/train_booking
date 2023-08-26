import React from 'react';
import AdminDashboard from './AdminDashboard'; // Adjust the path to match your file structure

const data = [
  {
    title: 'Book 1',
    author: 'Author 1',
    year: 2022,
    reviews: { positive: 10, negative: 2 },
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    year: 2021,
    reviews: { positive: 8, negative: 4 },
  },
  // ... add more objects as needed
];

function DashboardPage() {
  return (
    <div>
      {/* Pass the data array as the data prop */}
      <AdminDashboard data={data} />
    </div>
  );
}

export default DashboardPage;
