import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const isAuth = localStorage.getItem("isAuth") || null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    if (payload) {
      console.log("payload", payload);
      handleSendLoginRequest(payload);
    }
  };

  const handleSendLoginRequest = async (payload) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:8000/users/login`,
        payload
      );
      console.log("Logging in", response);
      if (response.status == 201) {
        console.log("success", response);
        localStorage.setItem("access_token", response.data.token);
        localStorage.setItem("isAuth", true);
        toast({
          title: `Logged in Successfully`,
          status: "success",
          isClosable: true,
        });
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      localStorage.setItem("isAuth", false);
      toast({
        title: `Failed to Login`,
        status: "error",
        isClosable: true,
      });
      setLoading(false);
    }
  };

  if (isAuth === "true") {
    navigate("/dashboard");
  }

  return (
    <>
      <Flex
        minH={"90vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Login</Heading>
          </Stack>
          <form onSubmit={handleSubmit}>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    value={loading ? "Logging in..." : "Login"}
                    w="100%"
                    mt="5"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.700",
                    }}
                    type="submit"
                  />
                </FormControl>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Flex>
    </>
  );
}
