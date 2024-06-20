import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  useEffect(() => {
    const images = [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1482015527294-7c8203fc9828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setBackgroundImage(images[index]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position={"relative"} textAlign={"center"} color={"white"} >
      <Image
        src={backgroundImage}
        alt="Travel Img"
        objectFit={"cover"}
        width={"100%"}
        height={"75vh"}
        filter={"brightness(50%)"}
        borderRadius={15}
      />
      <Box
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50% -50%)"}
      >
        <Heading as={"h1"} size={"2x1"} mb={4}>
          Khám Phá Chuyến Du Lịch Của Bạn
        </Heading>
        <Text fontSize={"lg"} mb={8}>
          Đặt kỳ nghỉ mơ ước của bạn ngay hôm nay!
        </Text>
        <Button as={Link} to={'/booking'} size={"lg"} colorScheme="teal">
          Bắt Đầu
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
