import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import BicycleTable from "./BicycleTable";
import StationTable from "./StationTable";
import SuggestionTable from "./SuggestionTable";

// components
import PageTitle from "../../components/PageTitle";
// import Widget from "../../components/Widget";
// import Table from "../dashboard/components/Table/Table";

// data
// import mock from "../dashboard/mock";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function Tables() {
  const classes = useStyles();
  const [Stations, SetStations] = useState([]);
  var stationTable = Stations.map(function (obj) {
    return Object.keys(obj)
      .sort()
      .map(function (key) {
        return obj[key];
      });
  });
  const getAllStations = () => {
    axios
      .get(`http://localhost:3002/allstations`)
      .then((response) => {
        SetStations(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getAllStations();
  }, []);

  return (
    <>
      <SuggestionTable></SuggestionTable>
      <StationTable></StationTable>
      <BicycleTable></BicycleTable>
    </>
  );
}

/* 
          {
          <Grid item xs={12}>

          <Widget
            title="Incoming Stats By station"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableOverflow}
          >
            <Table data={mock.table} />
          </Widget>
         </Grid>
        }
        */
