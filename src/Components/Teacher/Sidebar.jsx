import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>LMS</h2>
      <ul className="menu">
        <li>Dashboard</li>
        <li>Courses</li>
        <li>Assignments</li>
        <li>Messages</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    backgroundColor: "#1e293b",
    color: "white",
    padding: "20px",
  },
  logo: { fontSize: "22px", marginBottom: "30px", fontWeight: "bold" },
  menu: { listStyle: "none", padding: 0 },
  menuItem: { margin: "15px 0", cursor: "pointer" },
};

export default Sidebar;