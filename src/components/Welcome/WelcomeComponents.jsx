import React from "react";
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  rem,
  Box,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    // paddingTop: rem(120),
    // paddingBottom: rem(80),
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    marginBottom: theme.spacing.xs,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color: "#086972",
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

const WelcomeComponents = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <img src="/logo.png" width={256} />
        </Box>
        <Title className={classes.title}>
          Personal{" "}
          <Text component="span" className={classes.highlight} inherit>
            Finance
          </Text>{" "}
          Web App
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            where users will enter a saving goal and monthly deposit will be
            calculated for them.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            onClick={() => window.location.replace("/signup")}
            className={classes.control}
            sx={{
              transition: "all 0.5s ease-in-out",
            }}
            size="lg"
            variant="default"
            color="gray"
          >
            Sign up
          </Button>
          <Button
            onClick={() => window.location.replace("/login")}
            className={classes.control}
            sx={{
              backgroundColor: "#086972",
              transition: "all 0.5s ease-in-out",
              ":hover": {
                backgroundColor: "#086972aa",
              },
            }}
            size="lg"
          >
            Login
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default WelcomeComponents;
