import { Avatar, Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Testimonial = ({name, feedback, imgSrc}) => {
  return (
    <Box
      textAlign={"center"}
      p={5}
      borderWidth={"1px"}
      borderRadius={"lg"}
      overflow={"hidden"}
    >
      <Avatar src={imgSrc} alt={name} mb={4} />
      <Heading size={"md"} as={"h2"} mb={2}>
        {name}
      </Heading>
      <Text>{feedback}</Text>
    </Box>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Giả lập việc lấy dữ liệu từ API
  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = [
        {
          name: "John Doe",
          feedback: "Đây là kỳ nghỉ tuyệt vời nhất từng có!",
          imgSrc:
            "https://i.pinimg.com/736x/36/f0/c6/36f0c69fccfd2113b617c371f0969dfe.jpg",
        },
        {
          name: "Jane Smith",
          feedback: "Rất đề xuất Đặt vé du lịch tại đây!",
          imgSrc:
            "https://i.pinimg.com/564x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg",
        },
        {
          name: "Sam Wilson",
          feedback: "Trải nghiệm tuyệt vời và đội ngũ hỗ trợ rất tốt!",
          imgSrc:
            "https://i.pinimg.com/564x/7e/96/83/7e96833e2becc48ea62f41c1b63af465.jpg",
        },
      ];
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);
  return (
    <Box p={5}>
      <Heading as={"h2"} size={"xl"} textAlign={"center"} mb={"10"}>
        Đánh Giá
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            imgSrc={testimonial.imgSrc}
            feedback={testimonial.feedback}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Testimonials;
