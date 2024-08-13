import React from 'react';
import AdminNavbar from './Admin_Navbar'
import {Link} from 'react-router-dom';
// import BackButton from '../Accounts/BackButton'


function Admin_dashboard() {
  return (
    <div>
        <AdminNavbar/>
        
        <div className="ml-72  bg-gray-100 p-8">
      <header className="bg-orange-600 text-white py-4 px-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>
      
      <main className="mt-6">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
            <p className="text-gray-700 mb-4">
              View and manage users of the application.
            </p>
            <Link
              to="/manage-users"
              className="text-orange-500 hover:underline"
            >
              Go to User Management
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">View Reports</h2>
            <p className="text-gray-700 mb-4">
              Access various reports and analytics.
            </p>
            <Link
              to="/view-reports"
              className="text-orange-500 hover:underline"
            >
              View Reports
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <p className="text-gray-700 mb-4">
              Configure application settings.
            </p>
            <Link to="/settings" className="text-orange-500 hover:underline">
              Go to Settings
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Resturants</h2>
            <p className="text-gray-700 mb-4">Add the Resturants</p>
            <Link to="/addresturants" className="text-orange-500 hover:underline">
              ADD RESTURANTS
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">View Resturants</h2>
            <p className="text-gray-700 mb-4">
              Till the Resturant count is 100
            </p>
            <Link to="/resturantDatatable" className="text-orange-500 hover:underline">
              Check the Resturants  
            </Link>
          </div>
        </div>
      </main>
      </div>
    </div>
  )
}

export default Admin_dashboard
