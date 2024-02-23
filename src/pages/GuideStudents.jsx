import React, { useEffect, useState } from "react";
import axios from "axios";
import GuideSidebar from "../components/GuideSidebar";
import http from "../configs/http";
import {
  Box,
  Flex,
  chakra,
  Icon,
  Stack,
  Text,
  Spacer,
  Avatar,
  VStack,
  useToast,
  Heading,
  Container,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { FaAddressBook, FaEnvelope, FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "../components/Navbar";

const GuideStudents = () => {
  const [profileData, setProfileData] = useState([]);
  const guideId = localStorage.getItem("guideId") || null;
  const guideProfileData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/guide/profile/${guideId}`
      );
      console.log("profile data", response);

      if (response.status == 201) {
        setProfileData(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // Static student data
  const students = [
    { id: 1, name: "Somnath Chavan", email: "somnath@example.com" },
    { id: 2, name: "Dinesh Patil", email: "dinesh@example.com" },
    { id: 3, name: "Somnath Chavan", email: "somnath@example.com" },
    { id: 4, name: "Dinesh Patil", email: "dinesh@example.com" },
    { id: 5, name: "Somnath Chavan", email: "somnath@example.com" },
    { id: 6, name: "Dinesh Patil", email: "dinesh@example.com" },
  ];
  useEffect(() => {
    guideProfileData();
  }, []);
  return (
    <div>
      <Box>
        {/* ------------------------------------------ SIDEBAR DIV ------------------------------------------ */}
        <Box>
          {" "}
          <GuideSidebar />
        </Box>
        {/* --------------------------------------MAIN CONTENT GOES HERE------------------------------------- */}
        <Box
          minH="100vh"
          ml={{
            base: 0,
            md: 60,
          }}
          as="main"
          borderWidth="2px"
        >
          <Box bg="#EBDEF0">
            <Text fontSize="lg" p="4" textAlign={"left"}>
              Welcome to Guide Dashboard,{" "}
              <Text color="green.600" fontWeight="bold">
                {" "}
                {profileData?.name}
              </Text>
            </Text>
          </Box>
          <Box mt="12">
            {" "}
            {/* Render the student data */}
            {students.map((student) => (
              <Box key={student.id} p="4" bg="white" mb="4" borderWidth="1px">
                <Stack direction="row" spacing="4">
                  <Avatar name={student.name} />
                  <VStack align="flex-start" spacing="1">
                    <Text fontWeight="bold">{student.name}</Text>
                    <Text>{student.email}</Text>
                  </VStack>
                  <Spacer />
                  <Stack direction="row" spacing="4">
                    <IconButton
                      aria-label="Edit"
                      icon={<FaEdit />}
                      onClick={() => {
                        // Handle edit action
                      }}
                    />
                    <IconButton
                      aria-label="Delete"
                      icon={<FaTrash />}
                      onClick={() => {
                        // Handle delete action
                      }}
                    />
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default GuideStudents;
