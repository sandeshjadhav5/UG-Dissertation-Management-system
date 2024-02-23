import React, { useState, useEffect } from "react";

// Chakra imports
import {
  Box,
  Heading,
  SimpleGrid,
  Button,
  Flex,
  InputLeftAddon,
  Textarea,
  FormHelperText,
  Avatar,
  Icon,
  VisuallyHidden,
  Checkbox,
  Radio,
  GridItem,
  Stack,
  useToast,
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
  Select,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const EditData = () => {
  const [guideName, setGuideName] = useState("");
  const [mobile, setMobile] = useState("");
  const [teamLeadName, setTeamLeadName] = useState("");

  return (
    <div>
      <Box>
        {/* ------------------------------------------ SIDEBAR DIV ------------------------------------------ */}
        <Box>
          {" "}
          <Sidebar />
        </Box>
        {/* --------------------------------------MAIN CONTENT GOES HERE------------------------------------- */}
        <Box
          ml={{
            base: 0,
            md: 60,
          }}
          as="main"
          p="4"
          borderWidth="4px"
        >
          {/* ----------------------------FORM UI STARTS HERE----------------------- */}
          <form>
            <Box pt={4}>
              {/* ----------------------- Information form starts here------------------------------ */}
              <Box bg="#add8e6" p={4} rounded={4}>
                <SimpleGrid
                  display={{
                    base: "initial",
                    md: "grid",
                  }}
                  columns={{
                    md: 3,
                  }}
                  spacing={{
                    md: 6,
                  }}
                >
                  <GridItem
                    colSpan={{
                      md: 1,
                    }}
                  >
                    <Box px={[4, 1]}>
                      <Heading fontSize="2xl" fontWeight="lg" lineHeight="6">
                        Guide Information
                      </Heading>
                      <Text mt={1} fontSize="sm">
                        Provide guide details
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem
                    mt={{ base: "10px", md: "10px", xl: "0px" }}
                    colSpan={{
                      md: 2,
                    }}
                  >
                    <Box
                      shadow="base"
                      rounded={[null, "md"]}
                      overflow={{
                        sm: "hidden",
                      }}
                    >
                      <Stack
                        px={4}
                        py={5}
                        bg="beige"
                        _dark={{
                          bg: "#2D3748",
                        }}
                        spacing={6}
                        p={{
                          sm: 6,
                        }}
                      >
                        <SimpleGrid columns={3} spacing={6}>
                          <Box as={GridItem} colSpan={[3, 2]}>
                            <FormLabel>
                              Guide Name <span style={{ color: "red" }}>*</span>
                            </FormLabel>
                            <InputGroup>
                              <Input
                                color="#322659"
                                _dark={{ color: "white" }}
                                onChange={(e) => setGuideName(e.target.value)}
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
                  </GridItem>
                </SimpleGrid>
              </Box>
              {/* -----------------------Guide Information form ends here------------------------------ */}
              {/* -----------------------Project Information form starts here------------------------------ */}
              <Box bg="#add8e6" mt={4} p={4} rounded={4}>
                <SimpleGrid
                  display={{
                    base: "initial",
                    md: "grid",
                  }}
                  columns={{
                    md: 3,
                  }}
                  spacing={{
                    md: 6,
                  }}
                >
                  <GridItem
                    colSpan={{
                      md: 1,
                    }}
                  >
                    <Box px={[4, 1]}>
                      <Heading fontSize="2xl" fontWeight="lg" lineHeight="6">
                        Project Information
                      </Heading>
                      <Text mt={1} fontSize="sm">
                        Provide Project details
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem
                    mt={{ base: "10px", md: "10px", xl: "0px" }}
                    colSpan={{
                      md: 2,
                    }}
                  >
                    <Box
                      shadow="base"
                      rounded={[null, "md"]}
                      overflow={{
                        sm: "hidden",
                      }}
                    >
                      <Stack
                        px={4}
                        py={5}
                        bg="beige"
                        _dark={{
                          bg: "#2D3748",
                        }}
                        spacing={6}
                        p={{
                          sm: 6,
                        }}
                      >
                        <SimpleGrid columns={3} spacing={6}>
                          <Box as={GridItem} colSpan={[3, 2]}>
                            <InputGroup>
                              <FormLabel>
                                Project Description
                                <span style={{ color: "red" }}>*</span>
                              </FormLabel>
                              <Textarea
                                color="#322659"
                                _dark={{ color: "white" }}
                                onChange={(e) => setGuideName(e.target.value)}
                                required
                                type="text"
                                placeholder="abc"
                                focusBorderColor="brand.400"
                                rounded="md"
                              ></Textarea>
                            </InputGroup>
                          </Box>
                        </SimpleGrid>

                        <div>
                          <HStack>
                            <Box w="50%">
                              <FormLabel>
                                Team Lead
                                <span style={{ color: "red" }}>*</span>
                              </FormLabel>
                              <Input
                                color="#322659"
                                _dark={{ color: "white" }}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                                type="number"
                                placeholder="Enter team lead name"
                              />
                            </Box>
                            <Box w="50%">
                              <FormLabel>
                                <span style={{ color: "red" }}>*</span>
                              </FormLabel>
                              <Input
                                required
                                color="#322659"
                                _dark={{ color: "white" }}
                                onChange={(e) =>
                                  setTeamLeadName(e.target.value)
                                }
                                type="text"
                                placeholder="team lead mobile number"
                              />
                            </Box>
                          </HStack>
                        </div>
                      </Stack>
                    </Box>
                  </GridItem>
                </SimpleGrid>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default EditData;
