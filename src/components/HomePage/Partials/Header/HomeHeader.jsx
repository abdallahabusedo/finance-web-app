import { Box, Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import ModalComponent from "./ModalComponent";

const HomeHeader = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box>
      <img src="/logo.png" width={256} />
      <Box
        sx={{
          margin: "25px 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          sx={{
            fontSize: "25px",
            fontWeight: "700",
            color: "#086972",
            flex: "1",
          }}
        >
          Welcome
        </Text>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
          }}
        >
          <Button
            onClick={open}
            sx={{
              backgroundColor: "#086972",
              transition: "all 0.5s ease-in-out",
              ":hover": { backgroundColor: "#086972aa" },
            }}
          >
            Create new Deposit
          </Button>
          <Button
            onClick={open}
            sx={{
              backgroundColor: "#086972",
              transition: "all 0.5s ease-in-out",
              ":hover": { backgroundColor: "#086972aa" },
            }}
          >
            Log out
          </Button>
        </Box>
      </Box>
      <Modal opened={opened} onClose={close} centered>
        <ModalComponent close={close} />
      </Modal>
    </Box>
  );
};

export default HomeHeader;
