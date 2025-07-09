import { Button, Flex, ProgressCircle, Table, Text } from "@chakra-ui/react";

export const ProductTable = () => {
  return (
    <Table.Root size="sm" striped>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>No</Table.ColumnHeader>
          <Table.ColumnHeader>Product Name</Table.ColumnHeader>
          <Table.ColumnHeader>Price</Table.ColumnHeader>
          <Table.ColumnHeader>Actions</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row key={1}>
          <Table.Cell>{1}</Table.Cell>

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

          <Table.Cell>Pending</Table.Cell>
          <Table.Cell>Premium</Table.Cell>
          <Table.Cell
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"row"}
          >
            <Flex gap={2} alignItems={"center"}>
              <Button size={"xs"} colorPalette={"gray"}>
                Edit
              </Button>
              <Button size={"xs"} colorPalette={"red"}>
                Delete
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};
