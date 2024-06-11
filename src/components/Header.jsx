import React from "react";
import { Box, Flex, Link, HStack, Image } from "@chakra-ui/react";
import { color } from "framer-motion";

const Header = () => {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"center"}
        maxW={"1200px"}
        mx={"auto"}
        px={4}
      >
        <Image src="https://mixivivu.com/_next/image?url=%2Fblack-logo.png&w=384&q=75" alt="Logo" boxSize="50px" width={"-moz-fit-content"} />

        <HStack as={"nav"} spacing={4}>
          <Link
            href="#home"
            px={2}
            py={1}
            rounded={"md"}
            _hover={{ textDecoration: "none", bg: "gray.700" }}
          >
            Trang chủ
          </Link>
          <Link
            href="#destination"
            px={2}
            py={1}
            rounded={"md"}
            _hover={{ textDecoration: "none", bg: "gray.700" }}
          >
            Điểm đến
          </Link>
          <Link
            href="#about"
            px={2}
            py={1}
            rounded={"md"}
            _hover={{ textDecoration: "none", bg: "gray.700" }}
          >
            Thông tin{" "}
          </Link>
          <Link
            href="#contact"
            px={2}
            py={1}
            rounded={"md"}
            _hover={{ textDecoration: "none", bg: "gray.700" }}
          >
            Liên hệ
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
