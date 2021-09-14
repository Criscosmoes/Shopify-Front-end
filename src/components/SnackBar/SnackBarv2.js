import React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import "./_snackbarv2.scss";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();
  let history = useHistory();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Cache was cleared!", { variant });
    localStorage.clear();
    history.push("/");
    history.go(0);
  };

  return (
    <button className="cache-button" onClick={handleClickVariant("success")}>
      <DeleteIcon className="delete-icon" />
      <h2>Clear cache</h2>
    </button>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
