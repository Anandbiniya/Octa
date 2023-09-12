
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-gray-800 text-white p-4">
        <button className="my-2">Home</button>
        <button className="my-2">Courses</button>
      </div>

      <div className="w-5/6 p-4">
      corses
        <div className="grid grid-cols-2 gap-4">
  
          <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
          Total
          </div>

     
          <div className="bg-white p-4 rounded-lg shadow-md">
  best
          </div>

       
          <div className="bg-white p-4 rounded-lg shadow-md">
     bestes
          </div>

        
          <div className="bg-white p-4 rounded-lg shadow-md">
       Nothing
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
