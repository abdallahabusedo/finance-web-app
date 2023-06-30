import { Box } from "@mantine/core";
import React from "react";

const StringRow = (props) => {
  return (
    <Box
      sx={{
        fontSize: "16px",
        fontWeight: "600",
      }}
    >
      {props.str}
    </Box>
  );
};

export default StringRow;
