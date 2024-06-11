import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";

const Feature = ({ title, text, imageSrc }) => {
  return (
    <Box
      textAlign={"center"}
      p={5}
      borderWidth={"1px"}
      borderRadius={"lg"}
      overflow={"hidden"}
    >
      <Image src={imageSrc} alt={title} mb={4} borderRadius={"md"} />
      <Heading as={"h3"} size={"md"} mb={2}>
        {title}
      </Heading>
      <Text>{text}</Text>
    </Box>
  );
};

export const Features = () => {
  // useMemo: Ghi nhớ danh sách các tính năng để tránh tính toán lại không cần thiết trong mỗi lần render.
  const features = useMemo(
    () => [
      {
        title: "Điểm Đến Đẹp Mắt",
        text: "Khám phá những địa điểm đẹp nhất trên thế giới.",
        imageSrc:
          "https://i.pinimg.com/564x/46/d4/69/46d4694f915714cc69f1f3fb02031db8.jpg",
      },
      {
        title: "Giá Cả Hợp Lý",
        text: "Tìm kiếm những ưu đãi tốt nhất cho kỳ nghỉ tiếp theo của bạn.",
        imageSrc:
          "https://i.pinimg.com/564x/46/d4/69/46d4694f915714cc69f1f3fb02031db8.jpg",
      },
      {
        title: "Hỗ Trợ 24/7",
        text: "Chúng tôi ở đây để giúp bạn bất kỳ lúc nào.",
        imageSrc:
          "https://i.pinimg.com/564x/46/d4/69/46d4694f915714cc69f1f3fb02031db8.jpg",
      },
    ],
    []
  );
  return (
    <Box p={5}>
      <Heading as={"h2"} size={"xl"} textAlign={"center"} mb={10}>
        Giới Thiệu
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {features.map((features, index) => (
          <Feature
            key={index}
            title={features.title}
            text={features.text}
            imageSrc={features.imageSrc}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
