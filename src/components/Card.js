import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      spacing={4}
      padding={0}
      backgroundColor="white"
      boxShadow="md"
      width="100%"
      maxWidth="400px"
      borderRadius="lg"
    >
      <Image src={imageSrc} borderRadius="lg" />

      <VStack padding={4} align="start" spacing={4}>
        <Heading size="md" color="black">
          {title}
        </Heading>
        <Text color="black">{description}</Text>
        <HStack
          as="a"
          href="#"
          spacing={2}
          color="black"
          _hover={{ color: "blue.600" }}
          fontSize="14"
          fontWeight="600"
          align="center"
        >
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
