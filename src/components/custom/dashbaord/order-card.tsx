import { Box, Flex, Text, IconButton, Progress } from "@chakra-ui/react";
import type { ReactElement } from "react";

interface StatCardProps {
  value: number | string;
  label: string;
  percentage: number;
  icon: ReactElement;
  colorPlette?: string;
}

export const OrderCard = ({
  value,
  label,
  percentage,
  icon,
  colorPlette = "blue",
}: StatCardProps) => {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="lg"
      boxShadow="sm"
      border="1px solid"
      borderColor={"gray.200"}
      w="full"
      maxW="sm"
    >
      <Flex justify="space-between" align="center" mb={2}>
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            {value}
          </Text>
          <Text fontSize="sm" color={"gray.600"}>
            {label}
          </Text>
        </Box>

        <IconButton
          aria-label="Action Icon"
          size="sm"
          variant="ghost"
          color={`${colorPlette}.500`}
        >
          {icon}
        </IconButton>
      </Flex>

      <Flex align="center" gap={2} mt={4}>
        {/* <Progress
          value={percentage}
          size="sm"
          flex={1}
          colorPlette={colorPlette}
          bg="gray.200"
          borderRadius="full"
        />
        <Text fontSize="sm" color={"gray.600"}>
          {percentage}%
        </Text> */}
        <Progress.Root
          value={percentage}
          size="xs"
          colorPalette={colorPlette}
          w={"full"}
        >
          <Progress.Track>
            <Progress.Range />
          </Progress.Track>
          <Progress.Label />
          <Progress.ValueText>{percentage}%</Progress.ValueText>
        </Progress.Root>
      </Flex>
    </Box>
  );
};
