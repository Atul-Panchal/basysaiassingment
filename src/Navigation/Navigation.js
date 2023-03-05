import React from "react";
import "./Navigation.css";
import "@fortawesome/fontawesome-free/css/all.css";
// import AddBoxIcon from "@mui/icons-material/AddBox";
import Card from "../ui/Card";
const Navigation = () => {
  return (
    <div className="nav-wrap">
      <Card height={"95%"} width={""}>
        <div className="logo-wrapper">
          <div className="logo-block">
            <div className="logo">
              <h1 color={`white`}>b</h1>
            </div>
            <div className="logo-name">basys.ai</div>
          </div>
        </div>
        <div className="nav-items">
          <div class="vertical-nav">
            <a href="xyz.com" class="nav-item">
              <i class="fas fa-file-medical"></i>
              Prior Authorization
            </a>
            <a href="xyz.com" class="nav-item">
              <i class="fa-solid fa-bars"></i>
              Claims
            </a>

            <a href="xyz.com" class="nav-item">
              <i class="fa-solid fa-square-plus"></i>
              Medical Records
            </a>
            <a href="xyz.com" class="nav-item">
              <i class="fa-solid fa-circle-user"></i>
              My Profile
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Navigation;
