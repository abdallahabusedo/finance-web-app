import { Box } from "@mantine/core";
import React from "react";

const DateRow = (props) => {
  const date = new Date(props.date);
  const formattedDate = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <Box
      sx={{
        fontSize: "16px",
        fontWeight: "700",
        color: "#086972",
      }}
    >
      {formattedDate}
    </Box>
  );
};

export default DateRow;
