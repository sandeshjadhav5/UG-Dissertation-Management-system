import React from "react";
import {
  chakra,
  Flex,
  HStack,
  Button,
  Box,
  VStack,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  IconButton,
  CloseButton,
  Image,
} from "@chakra-ui/react";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <Image src="https://kbpcoes.edu.in/images/header/logo-wide.jpg" />
      <chakra.header
        bgColor="#E9D8FD"
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              {/* <Logo /> */}
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              UG Dissertation Management System
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Button variant="ghost">About us</Button>
              <Button variant="ghost">Sign up</Button>
              <Button variant="ghost">Sign in</Button>
            </HStack>

            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bgColor="#E9D8FD"
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Button variant="ghost">About us</Button>
                <Button variant="ghost">Sign up</Button>
                <Button variant="ghost">Sign in</Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
