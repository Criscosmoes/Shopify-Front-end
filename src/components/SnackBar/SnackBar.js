import React from "react";
import Button from "@material-ui/core/Button";
import { SnackbarProvider, useSnackbar } from "notistack";
import FileCopy from "@material-ui/icons/FileCopy";

function MyApp({ currentCard }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Image link copied to clipboard!", { variant });
    navigator.clipboard.writeText(currentCard.url);
  };

  return (
    <React.Fragment>
      <FileCopy onClick={handleClickVariant("success")}>
        Show success snackbar
      </FileCopy>
    </React.Fragment>
  );
}

export default function IntegrationNotistack({ currentCard }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp currentCard={currentCard} />
    </SnackbarProvider>
  );
}
