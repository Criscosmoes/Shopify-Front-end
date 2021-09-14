import React from "react";
import SnackBar from "../SnackBar/SnackBarv2";
import "./_settings.scss";

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>This will clear local storage data</h2>
      <SnackBar className="trash-icon">Clear Cache</SnackBar>
    </div>
  );
};

export default Settings;
