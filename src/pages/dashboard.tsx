import { Stack, Text } from "@chakra-ui/react";

export const Dashboard = () => {
  return (
    <Stack gap={4} p={5} bgColor={"gray.50"} borderRadius={"md"}>
      <Text fontSize="2xl" fontWeight="bold">
        Hi Anna Pen
      </Text>{" "}
      ;
      <Text>
        Welcome to the dashboard! Here you can manage your application.
      </Text>
      {/* Add more dashboard content here */}
    </Stack>
  );
};
