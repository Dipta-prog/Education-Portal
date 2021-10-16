import React from "react";
import Sidebar from "../../../Shared/Sidebar/Sidebar";

const AdminDashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <Sidebar />
        </div>
        <div className="col-md-8">
          <h1>This is dashboard</h1>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
