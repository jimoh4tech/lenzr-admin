import { ProductTable } from "@/components/custom/products";
import { Button, Flex, Spacer, Stack, Text } from "@chakra-ui/react";

export const Products = () => {
  return (
    <Stack gap={4} p={5} bgColor={"gray.50"} borderRadius={"md"} minH={"87vh"}>
      <Flex justifyContent={"space-between"}>
        <Spacer />
        <Button colorPalette={"lemon"} variant={"outline"}>
          + Add New Product
        </Button>
      </Flex>
      <Stack gap={4} bgColor={"white"} p={5} borderRadius={"md"}>
        <Text fontSize="xl" fontWeight="bold">
          Product List
        </Text>
        <ProductTable />
      </Stack>
    </Stack>
  );
};
