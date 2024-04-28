import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  chakra,
  Button,
  Box,
  Text,
  Stack,
  Icon,
  Image,
  SimpleGrid,
  Flex,
  Badge,
  Heading,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [updates, setUpdates] = useState([]);
  const property = {
    title: "Examination Schedule for Winter 2023 exam",
  };

  const getAllUpdates = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/updates/allupdates`
      );
      console.log("updates data", response);

      if (response.status == 200) {
        setUpdates(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllUpdates();
  }, []);
  return (
    <>
      <Navbar />
      <Box>
        <SimpleGrid
          p="4"
          mt={{ sm: 0, base: 4 }}
          columns={{
            base: 1,
            md: 2,
          }}
          spacing={0}
          _after={{
            bg: "brand.500",
            opacity: 0.25,
            pos: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
            content: '" "',
          }}
        >
          <Flex direction="column" alignItems="start" justifyContent="center">
            <Box mt="4" mx="auto">
              <Box
                w={{
                  base: "full",
                  md: 11 / 12,
                  xl: 9 / 12,
                }}
                mx="auto"
                textAlign={{
                  base: "left",
                  md: "center",
                }}
              >
                <chakra.h1
                  mb={6}
                  fontSize={{
                    base: "4xl",
                    md: "6xl",
                  }}
                  fontWeight="bold"
                  lineHeight="none"
                  letterSpacing={{
                    base: "normal",
                    md: "tight",
                  }}
                  color="gray.900"
                  _dark={{
                    color: "gray.100",
                  }}
                >
                  UG{" "}
                  <Text
                    display={{
                      base: "block",
                      lg: "inline",
                    }}
                    w="full"
                    bgClip="text"
                    bgGradient="linear(to-r, green.400,purple.500)"
                    fontWeight="extrabold"
                  >
                    Dissertation
                  </Text>{" "}
                  Management System
                </chakra.h1>
                <chakra.p
                  color="gray.600"
                  _dark={{
                    color: "gray.300",
                  }}
                >
                  UG Dissertation Management System is a webapp to manage final
                  year projects at one place for Project Head,Project Guide and
                  Students
                </chakra.p>
              </Box>
            </Box>
          </Flex>
          <Box>
            <Flex
              _dark={{
                bg: "#3e3e3e",
              }}
              p={50}
              w="full"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
              >
                <Heading
                  textAlign="center"
                  w="full"
                  bgClip="text"
                  bgGradient="linear(to-r, red.400,blue.500)"
                  fontWeight="extrabold"
                >
                  Updates
                </Heading>
                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge rounded="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                  </Box>
                  {updates &&
                    updates.map(() => (
                      <>
                        <Text
                          mt="1"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          noOfLines={1}
                        >
                          {updates.name}
                        </Text>
                      </>
                    ))}
                </Box>
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
        <Features />
      </Box>
    </>
  );
};

export default HomePage;
