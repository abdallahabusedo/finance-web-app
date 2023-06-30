import { Box, Button, Group, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
const LoginComponent = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 786);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        parseInt(value) < 8 ? "Password must be at least 8 letters" : null,
    },
  });

  const handleResize = () => {
    setIsMobile(window.innerWidth < 786);
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
    window.location.replace("/home");
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
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
              Login with Femto
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
              <Button type="submit">Login</Button>
            </Group>
            <Text
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              I don't have an account so{" "}
              <Text
                sx={{
                  fontWeight: "500",
                  cursor: "pointer",
                  color: "#086972",
                }}
                onClick={() => window.location.replace("/signup")}
              >
                Sign up
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
};

export default LoginComponent;
