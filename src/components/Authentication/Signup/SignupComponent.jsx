import {
  Box,
  Button,
  Group,
  Notification,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import axios from "axios";
import { IconX } from "@tabler/icons-react";
function SignupComponent() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 786);
  const [errorMessage, setErrorMessage] = React.useState("");
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value < 8 ? "Password must be at least 8 letters" : null,
    },
  });

  const handleResize = () => {
    setIsMobile(window.innerWidth < 786);
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleSubmit = (values) => {
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:3001/register",
      data: {
        email: values.email,
        password: values.password,
      },
    };
    // make the API call
    axios(configuration)
      .then(() => {
        window.location.replace("/login");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        console.log(error);
      });
  };
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "10px",
        }}
      >
        {errorMessage && (
          <Notification
            icon={<IconX size="1.1rem" />}
            color="red"
            onClose={() => setErrorMessage("")}
          >
            {errorMessage}
          </Notification>
        )}
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
          gap: "20px",
          minWidth: isMobile ? "100%" : "50%",
          width: isMobile ? "100%" : "50%",
        }}
      >
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img src="/logo.png" width={256} />
            <Text
              sx={{
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Sign up with Femto
            </Text>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              sx={{
                width: isMobile ? "300px !important" : "100%",
              }}
              {...form.getInputProps("email")}
            />
            <TextInput
              withAsterisk
              label="Password"
              placeholder="password"
              sx={{
                width: isMobile ? "300px !important" : "100%",
              }}
              {...form.getInputProps("password")}
            />

            <Group position="right" mt="md">
              <Button type="submit">Sign up</Button>
            </Group>
            <Text
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              I already have an account so{" "}
              <Text
                sx={{
                  fontWeight: "500",
                  cursor: "pointer",
                  color: "#086972",
                }}
                onClick={() => window.location.replace("/login")}
              >
                login
              </Text>
            </Text>
          </Box>
        </form>
      </Box>

      {!isMobile ? (
        <Box
          sx={{
            width: "50%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <img src="/loginSide.png" />
        </Box>
      ) : null}
    </Box>
  );
}

export default SignupComponent;
