import { OrdersTable } from "@/components/custom/orders-table";
import { Stack, Text } from "@chakra-ui/react";

export const Orders = () => {
  return (
    <Stack gap={4} p={5} bgColor={"gray.50"} borderRadius={"md"} minH={"87vh"}>
      <Stack gap={4} bgColor={"white"} p={5} borderRadius={"md"}>
        <Text fontSize="xl" fontWeight="bold">
          Orders
        </Text>
        <OrdersTable />
      </Stack>
    </Stack>
  );
};
