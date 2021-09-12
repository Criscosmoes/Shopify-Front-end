import React from "react";
import SnackBar from "../SnackBar/SnackBarv2";
import "./_settings.scss";

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>This will clear local storage data</h2>
      <button className="clear-btn">
        <SnackBar className="trash-icon" />
        <h2>Clear Cache</h2>
      </button>
    </div>
  );
};

export default Settings;
