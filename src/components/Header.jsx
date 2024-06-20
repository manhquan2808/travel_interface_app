import React from "react";
import { Box, Flex, Link, HStack, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW={"1200px"}
        mx={"auto"}
        px={4}
      >
        <Image
          src="https://mixivivu.com/_next/image?url=%2Fblack-logo.png&w=384&q=75"
          alt="Logo"
          boxSize="50px"
          width={"-moz-fit-content"}
        />

        <HStack as={"nav"} spacing={4}>
          <Link
            as={RouterLink}
            to={"/"}
            px={2}
            py={1}
            rounded={"md"}
            _hover={{ textDecoration: "none", bg: "gray.700" }}
          >
            Trang chủ
          </Link>
          <Link
            as={RouterLink}
            to={"/booking"}
            px={2}
            py={1}
            rounded={"md"}
            _hover={{ textDecoration: "none", bg: "gray.700" }}
          >
            Tìm kiếm
          </Link>
          <Link
            as={RouterLink}
            to={"/services"}
            px={2}
            py={1}
            rounded={"md"}
            _hover={{ textDecoration: "none", bg: "gray.700" }}
          >
            Dịch vụ
          </Link>
          <Link
            as={RouterLink}
            to={"/contact"}
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
