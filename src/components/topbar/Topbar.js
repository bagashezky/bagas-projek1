import React from "react";
import "./topbar.css";
import { NotificationsNone, Settings, Language } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Bagas</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "purple",
                },
              }}
              badgeContent={4}
            ></Badge>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          {/* <img src="https://images.pexels.com/photos/12640459/pexels-photo-12640459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="topAvatar" /> */}
          <Avatar
            sx={{ width: 40, height: 40 }}
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/12640459/pexels-photo-12640459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </div>
  );
}
