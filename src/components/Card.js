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
      padding={4}
      backgroundColor="white"
      borderRadius="md"
      boxShadow="md"
      width="100%"
      maxWidth="400px"
    >
      <Image src={imageSrc} />
      <Heading size="md">{title}</Heading>
      <Text color="black">{description}</Text>
      <HStack
        as="a"
        href="#"
        spacing={2}
        color="blue.500"
        _hover={{ color: "blue.600" }}
      >
        <Text>Learn more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
