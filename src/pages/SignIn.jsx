import React, { useState, useEffect } from "react";
// Chakra imports
import {
  Box,
  SimpleGrid,
  Button,
  GridItem,
  Stack,
  chakra,
  FormControl,
  HStack,
  Divider,
  RadioGroup,
  Input,
  FormLabel,
  Text,
  InputGroup,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react";

const SignIn = () => {
  return (
    <div>
      <Heading textAlign="center" mt="4" mb="2">
        Sign in{" "}
      </Heading>
      <Box
        w="30%"
        m="auto"
        shadow="base"
        rounded={[null, "md"]}
        overflow={{
          sm: "hidden",
        }}
      >
        <Stack
          px={4}
          py={5}
          bg="white"
          _dark={{
            bg: "#2D3748",
          }}
          spacing={6}
          p={{
            sm: 6,
          }}
        >
          <SimpleGrid columns={3} spacing={6}>
            <Box as={GridItem} colSpan={[3, 2]} m="2">
              <FormLabel m="2" fontSize="md" fontWeight="bold" isRequired>
                Email id <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <InputGroup m="2">
                <Input
                  m="2"
                  required
                  type="text"
                  placeholder="abc"
                  focusBorderColor="brand.400"
                  rounded="md"
                />
              </InputGroup>
              <FormLabel m="2" fontSize="md" fontWeight="bold" isRequired>
                Password<span style={{ color: "red" }}>*</span>
              </FormLabel>
              <InputGroup m="2">
                <Input
                  m="2"
                  required
                  type="text"
                  placeholder="abc"
                  focusBorderColor="brand.400"
                  rounded="md"
                />
              </InputGroup>
            </Box>
          </SimpleGrid>
        </Stack>
      </Box>
    </div>
  );
};

export default SignIn;
