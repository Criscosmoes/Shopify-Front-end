import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPictureByDate } from "./../../store/actions/index";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

function MaterialUIPickers({ fetchPictureByDate }) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  let history = useHistory();

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day || "32"].join("-");
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);

    // here is where we redirect the user
    fetchPictureByDate(formatDate(date));

    setTimeout(() => {
      history.push("/searchbydate");
    }, 1500);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Search for a date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          disableFuture="true"
          animateYearScrolling="true"
          minDate="01/01/2000"
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { fetchPictureByDate })(
  MaterialUIPickers
);
