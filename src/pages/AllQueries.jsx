import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import http from "../configs/http";
import { Box, Heading, Text, VStack, Button, Input } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const AllQueries = () => {
  const [profileData, setProfileData] = useState([]);
  const [queries, setQueries] = useState([]);

  const userId = localStorage.getItem("userId") || null;
  const [query, setQuery] = useState("");

  const guideId = localStorage.getItem("guideId") || "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `https://sore-plum-rooster-belt.cyclic.app/users/students/${userId}/add-query`,
        {
          query,
          guideId,
        }
      );
      // Reset form fields after successful submission
      setQuery("");
      alert("Query added successfully!");
    } catch (error) {
      console.error(error.response.data);
      // Handle error, show error message to the user, etc.
      alert("Failed to add query. Please try again.");
    }
  };
  const getUserProfileData = async () => {
    try {
      const response = await axios.get(
        `https://sore-plum-rooster-belt.cyclic.app/users/profile/${userId}`
      );
      console.log("profile data", response);

      if (response.status == 201) {
        console.log("success", response.data);
        setProfileData(response.data);
        localStorage.setItem("guideId", response?.data?.guide);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get(
          "https://sore-plum-rooster-belt.cyclic.app/users/queries"
        );
        setQueries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQueries();
  }, []);

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
          <br />
          <br />
          <Box m="auto" bg={"white"} p="8" borderRadius={"6"}>
            <Heading textAlign="center">All Queries</Heading>
            <br />
            <br />
            <div>
              <ul>
                {queries.map((query) => (
                  <li key={query._id}>
                    <strong>Query:</strong> {query.query}
                    <br />
                    <strong>Guide:</strong> {query.guide}
                    <br />
                    {query.answer ? (
                      <>
                        <strong>Answer:</strong> {query.answer}
                      </>
                    ) : (
                      <em>Not Answered Yet</em>
                    )}
                    <hr />
                  </li>
                ))}
              </ul>
            </div>
          </Box>

          <br />
          <br />
        </Box>
      </Box>
    </div>
  );
};

export default AllQueries;
