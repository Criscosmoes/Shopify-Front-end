import React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();
  let history = useHistory();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Cache was cleared!", { variant });
    localStorage.clear();
    history.push("/");
    window.location.reload();
    return false;
  };

  return (
    <React.Fragment>
      <DeleteIcon onClick={handleClickVariant("success")}></DeleteIcon>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
