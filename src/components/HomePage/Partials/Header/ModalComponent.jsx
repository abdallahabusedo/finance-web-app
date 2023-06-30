import { Box, Button, Group, NumberInput, Text } from "@mantine/core";
import { MonthPicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import axios from "axios";
import React from "react";

const ModalComponent = (props) => {
  const [value, setValue] = React.useState(null);
  const [numOfMonths, setNumOfMonths] = React.useState(0);
  const [perMonth, setPerMonth] = React.useState(0);
  const form = useForm({
    initialValues: {
      totalAmount: "",
      goalDate: new Date(),
    },
  });
  const handleSubmit = (values) => {
    let token = localStorage.getItem("token");
    const configuration = {
      method: "post",
      url: "https://auth-backend-coral.vercel.app/deposits",
      data: {
        totalAmount: values.totalAmount,
        currentDate: new Date().toISOString(),
        goalDate: new Date(values.goalDate).toISOString(),
        monthlyPayment: perMonth,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // make the API call
    axios(configuration)
      .then(async () => {
        await props.close();
        await window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        props.close();
        window.location.reload();
      });
  };
  React.useEffect(() => {
    form.values.goalDate = new Date(value).toISOString();

    const todayDate = new Date();
    const months =
      (new Date(value).getFullYear() - todayDate.getFullYear()) * 12;
    const monthDiff = new Date(value).getMonth() - todayDate.getMonth();
    const totalMonths = months + monthDiff;
    setNumOfMonths(totalMonths);
    setPerMonth(Math.ceil(form.values.totalAmount / totalMonths));
    // console.log(totalMonths, Math.ceil(form.values.totalAmount / totalMonths));
  }, [value, form.values]);
  return (
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
        <Text
          sx={{
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          Create new Deposit
        </Text>
        <NumberInput
          withAsterisk
          min={0}
          label="Total amount to be saved"
          placeholder="1000"
          sx={{
            width: "300px !important",
          }}
          {...form.getInputProps("totalAmount")}
        />
        <Box sx={{ width: "73%" }}>
          <Text
            sx={{
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            Date to reach the goal <span style={{ color: "red" }}>*</span>
          </Text>
          <Group position="center">
            <MonthPicker value={value} onChange={setValue} />
          </Group>
        </Box>

        <Box>
          <Text>
            So you will pay {perMonth}$ every month for {numOfMonths} months
          </Text>
        </Box>
        <Group position="right" mt="md" mb="md">
          <Button type="submit">Create</Button>
        </Group>
      </Box>
    </form>
  );
};

export default ModalComponent;
