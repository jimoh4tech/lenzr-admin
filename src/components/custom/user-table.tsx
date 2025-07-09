import { Avatar } from "@/components/ui/avatar";
import { Flex, ProgressCircle, Stack, Table, Text } from "@chakra-ui/react";

export const UserTable = () => {
  return (
    <Table.Root size="sm" striped>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>No</Table.ColumnHeader>
          <Table.ColumnHeader>Customer</Table.ColumnHeader>
          <Table.ColumnHeader>Status</Table.ColumnHeader>
          <Table.ColumnHeader>Subscription Plan</Table.ColumnHeader>
          <Table.ColumnHeader>Customer Plan</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row key={1}>
          <Table.Cell>{1}</Table.Cell>
          <Table.Cell>
            <Flex gap={2} alignItems={"center"}>
              <Avatar src="https://bit.ly/sage-adebayo" />{" "}
              <Stack gap={0}>
                <Text fontSize={"sm"}>Mattew Bell</Text>
                <Text fontSize={"xs"} color={"gray.500"}>
                  $34,330
                </Text>
              </Stack>
            </Flex>
          </Table.Cell>
          <Table.Cell>Pending</Table.Cell>
          <Table.Cell>Premium</Table.Cell>
          <Table.Cell
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"row"}
          >
            <Flex gap={2} alignItems={"center"}>
              <ProgressCircle.Root value={100} size="xs">
                <ProgressCircle.Circle>
                  <ProgressCircle.Track />
                  <ProgressCircle.Range strokeLinecap="round" />
                </ProgressCircle.Circle>
              </ProgressCircle.Root>
              <Text fontSize={"sm"}>100%</Text>
            </Flex>
          </Table.Cell>
        </Table.Row>
        <Table.Row key={2}>
          <Table.Cell>{2}</Table.Cell>
          <Table.Cell>
            <Flex gap={2} alignItems={"center"}>
              <Avatar src="https://bit.ly/dan-abramov" />{" "}
              <Stack gap={0}>
                <Text fontSize={"sm"}>John Doe</Text>
                <Text fontSize={"xs"} color={"gray.500"}>
                  $17,652
                </Text>
              </Stack>
            </Flex>
          </Table.Cell>
          <Table.Cell>Pending</Table.Cell>
          <Table.Cell>Premium</Table.Cell>
          <Table.Cell
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"row"}
          >
            <Flex gap={2} alignItems={"center"}>
              <ProgressCircle.Root value={65} size="xs">
                <ProgressCircle.Circle>
                  <ProgressCircle.Track />
                  <ProgressCircle.Range strokeLinecap="round" />
                </ProgressCircle.Circle>
              </ProgressCircle.Root>
              <Text fontSize={"sm"}>65%</Text>
            </Flex>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};
