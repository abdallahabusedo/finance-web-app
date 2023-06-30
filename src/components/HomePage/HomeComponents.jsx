import { Box, Button, Text } from "@mantine/core";
import React from "react";
import TableComponent from "./Partials/Table/TableComponent";
import HomeHeader from "./Partials/Header/HomeHeader";
import axios from "axios";

const HomeComponents = () => {
  const [tableData, setTableData] = React.useState([]);
  React.useEffect(() => {
    const configuration = {
      method: "get",
      url: "http://localhost:3001/deposits",
    };
    // make the API call
    axios(configuration)
      .then((res) => {
        console.log(res);
        setTableData(res.data);
      })
      .catch((error) => {
        // setErrorMessage(error.response.data.message);
        console.log(error);
      });
  }, []);
  return (
    <Box
      sx={{
        margin: "50px",
      }}
    >
      <HomeHeader />
      <Box>
        <TableComponent tableData={tableData} />
      </Box>
    </Box>
  );
};

export default HomeComponents;
