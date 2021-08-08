import React from "react";
import { Route } from "react-router-dom";
import Posts from "./posts";
import Users from "./users";
import SideBar from "./sideBar";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Route path="/admin/users" Component={Users} />
      <Route path="/admin/posts" Component={Posts} />
    </div>
  );
};

export default Dashboard;
