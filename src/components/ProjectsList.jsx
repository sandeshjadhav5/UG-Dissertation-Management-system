import React from "react";
import { Box, Grid, Heading } from "@chakra-ui/react";

const dummyProjects = [
  { id: 1, name: "Attendance Management System" },
  { id: 2, name: "Chat App" },
  { id: 3, name: "Task Manager" },
  { id: 4, name: "E-commerce Website" },
  { id: 5, name: "Project Management Tool" },
  { id: 6, name: "Event Booking System" },
  { id: 7, name: "Blog Platform" },
  { id: 8, name: "To-Do List Application" },
  { id: 9, name: "Inventory Management System" },
  { id: 10, name: "Recipe Sharing App" },
  { id: 11, name: "Social Media Dashboard" },
  { id: 12, name: "Budget Tracker" },
  { id: 13, name: "Weather App" },
  { id: 14, name: "Music Player" },
  { id: 15, name: "Fitness Tracker" },
  { id: 16, name: "Online Learning Platform" },
  { id: 17, name: "Travel Planner" },
  { id: 18, name: "Job Search Portal" },
  { id: 19, name: "Language Learning App" },
  { id: 20, name: "Appointment Scheduling System" },
];

const ProjectsList = () => {
  return (
    <Box
      p={4}
      w="90%"
      m="auto"
      alignContent={"center"}
      alignItems={"center"}
      justifyContent="center"
    >
      <Heading
        bgClip="text"
        bgGradient="linear(to-r, green.400,purple.600)"
        m="8"
        textAlign={"center"}
        as="h1"
        size="lg"
        mb={4}
      >
        Existing Projects List
      </Heading>
      <Grid
        mt="4"
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {dummyProjects.map((project) => (
          <Box
            bg="white"
            key={project.id}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            _hover={{
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Heading as="h2" size="md" mb={2}>
              {project.name}
            </Heading>
            {/* Additional project details can be added here */}
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsList;
