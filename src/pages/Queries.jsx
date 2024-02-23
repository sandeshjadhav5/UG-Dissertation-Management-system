import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import http from "../configs/http";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Queries = () => {
  const [profileData, setProfileData] = useState([]);
  const userId = localStorage.getItem("userId") || null;
  const getUserProfileData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/users/profile/${userId}`
      );
      console.log("profile data", response);

      if (response.status == 200) {
        console.log("success", response.data);
        setProfileData(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserProfileData();
  }, []);
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
          borderWidth="2px"
        >
          <Navbar />
        </Box>
      </Box>
    </div>
  );
};

export default Queries;
