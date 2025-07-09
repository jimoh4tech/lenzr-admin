import { OrderCard } from "@/components/custom/dashbaord/order-card";
import { RecentOrderTable } from "@/components/custom/dashbaord/order-table";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";

export const Dashboard = () => {
  return (
    <Stack gap={4} p={5} bgColor={"gray.50"} borderRadius={"md"} minH={"87vh"}>
      <Text fontSize="2xl" fontWeight="bold">
        Hi Anna Pen
      </Text>{" "}
      <Text color={"gray.500"} fontSize="sm">
        Welcome to lenzr dashboard!
      </Text>
      {/* Add more dashboard content here */}
      <Text>Order Summary</Text>
      <Flex gap={2}>
        <OrderCard
          value="2,000"
          label="Pending Orders"
          percentage={48}
          icon={<HiOutlineDotsCircleHorizontal />}
          colorPlette="blue"
        />
        <OrderCard
          value="1,000"
          label="Processing Orders"
          percentage={48}
          icon={<GrPowerCycle />}
          colorPlette="yellow"
        />
        <OrderCard
          value="2,000"
          label="Completed Orders"
          percentage={48}
          icon={<FaRegCircleCheck />}
          colorPlette="green"
        />
        <OrderCard
          value="2,000"
          label="Cancelled Orders"
          percentage={48}
          icon={<ImCancelCircle />}
          colorPlette="red"
        />
      </Flex>
      <Stack p={5} bgColor={"white"} borderRadius={"md"}>
        <Text fontWeight={"bold"} fontSize={"lg"}>
          Recent Orders
        </Text>
        <RecentOrderTable />
      </Stack>
    </Stack>
  );
};
