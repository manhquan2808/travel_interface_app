import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://i.pinimg.com/564x/4a/e1/5d/4ae15d4e54c11c3a1ed83c69ed874978.jpg"
  );

  useEffect(() => {
    const images = [
      "https://i.pinimg.com/564x/85/5d/a7/855da75316bc5435ed9e09d0625f347f.jpg",
      "https://i.pinimg.com/564x/48/44/46/4844463f0663335a5431f1161e22fcf5.jpg",
      "https://i.pinimg.com/564x/70/15/67/701567afbd752b56bd591797e7981435.jpg",
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setBackgroundImage(images[index]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position={"relative"} textAlign={"center"} color={"white"}>
      <Image
        src={backgroundImage}
        alt="Travel Img"
        objectFit={"cover"}
        width={"100%"}
        height={"65vh"}
        filter={"brightness(50%)"}
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
        <Button size={"lg"} colorScheme="teal">
          Bắt Đầu
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
