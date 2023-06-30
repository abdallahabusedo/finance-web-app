import { Box, Button, Text } from "@mantine/core";
import React from "react";
import TableComponent from "./Partials/Table/TableComponent";
import HomeHeader from "./Partials/Header/HomeHeader";
import axios from "axios";

const HomeComponents = () => {
  const [tableData, setTableData] = React.useState([]);
  React.useEffect(() => {
    let token = localStorage.getItem("token");
    const configuration = {
      method: "get",
      url: "https://auth-backend-coral.vercel.app/deposits",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // make the API call
    axios(configuration)
      .then(async (res) => {
        await setTableData(res.data);
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
