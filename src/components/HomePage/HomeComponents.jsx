import { Box, Button, Text } from "@mantine/core";
import React from "react";
import TableComponent from "./Partials/Table/TableComponent";
import HomeHeader from "./Partials/Header/HomeHeader";

const HomeComponents = () => {
  return (
    <Box
      sx={{
        margin: "50px",
      }}
    >
      <HomeHeader />
      <Box>
        <TableComponent />
      </Box>
    </Box>
  );
};

export default HomeComponents;
