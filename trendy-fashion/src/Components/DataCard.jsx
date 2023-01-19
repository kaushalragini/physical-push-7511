
import * as React from "react";
import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
export default function DataCard({ brandName, imageUrl, product_name, prev_price, discount, current_price }) {
  return (
    <Center h="70vh">
      <Box p="5" maxW="320px" borderWidth="1px">
        <Image borderRadius="md" src={imageUrl} />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="#bfac8e">{brandName}</Badge>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {product_name}
        </Text>
        <Flex mt={2} align="center">
          <Text ml={1} fontSize="sm" style={{ textDecoration: "line-through" }}>
            {prev_price.formattedValue}
          </Text>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="#bfac8e"
          >
            {discount} &bull; {current_price.displayformattedValue}
          </Text>
        </Flex>
      </Box>
    </Center>
  );
}