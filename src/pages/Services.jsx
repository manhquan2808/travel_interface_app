import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Service = ({ title, description, imageSrc }) => {
  return (
    <Box textAlign={'center'} p={5} borderWidth={'1px'} borderRadius={'lg'} overflow={'hidden'}>
      <Image src={imageSrc} alt={title} mb={4} borderRadius={'md'}/>
      <Heading as={'h3'} size={'md'} mb={2}>{title}</Heading>
      <Text>{description}</Text>
    </Box>
  );
};

const Services = () => {
  const services = [
    {
      title: "Đặt phòng khách sạn",
      description:
        "Đặt phòng ở những khách sạn tốt nhất với giá cả phải chăng nhất.",
      imageSrc: "/images/1.jpg",
    },
    {
      title: "Đặt vé máy bay",
      description:
        "Tìm và đặt vé máy bay đến những điểm đến yêu thích của bạn.",
      imageSrc: "/images/1.jpg",
    },
    {
      title: "Thuê xe",
      description: "Thuê xe dễ dàng và thuận tiện với mức giá cạnh tranh.",
      imageSrc: "/images/1.jpg",
    },
  ];
  return (
    <Box p={5}>
        <Heading as={'h1'} size={'xl'} textAlign={'center'} mb={10}>Dịch vụ</Heading>
        <SimpleGrid columns={{base:1, md: 3}} spacing={10}>
            {services.map((services,index)=>(
                <Service key={index} title={services.title} description={services.description} imageSrc={services.imageSrc}/>
            ))}
        </SimpleGrid>
    </Box>
  );
};

export default Services;
