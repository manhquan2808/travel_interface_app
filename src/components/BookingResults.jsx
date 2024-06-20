import {
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const BookingResults = ({ searchParams }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchParams) return;

    const fetchResult = async () => {
      setLoading(true);

      // Giả lập gọi API
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = [
        {
          id: 1,
          name: "Luxury Hotel",
          location: searchParams.location,
          imageSrc: "/images/1.jpg",
          price: "2.000.000/đêm",
          checkInDate: searchParams.checkInDate,
          checkOutDate: searchParams.checkOutDate,
          guests: searchParams.adults + searchParams.children,
          rooms: searchParams.rooms,
        },
        {
          id: 2,
          name: "Budget Hotel",
          location: searchParams.location,
          imageSrc: "/images/2.jpg",
          price: "500.000/đêm",
          checkInDate: searchParams.checkInDate,
          checkOutDate: searchParams.checkOutDate,
          guests: searchParams.adults + searchParams.children,
          rooms: searchParams.rooms,
        },
        {
          id: 3,
          name: "Mid-range Hotel",
          location: searchParams.location,
          imageSrc: "/images/3.jpg",
          price: "1.000.000/đêm",
          checkInDate: searchParams.checkInDate,
          checkOutDate: searchParams.checkOutDate,
          guests: searchParams.adults + searchParams.children,
          rooms: searchParams.rooms,
        },
      ];
      setResults(data);
      setLoading(false);
    };
    fetchResult();
  }, [searchParams]);

  return (
    <Box p={5}>
      <Heading as={"h2"} size={"xl"} textAlign={"center"} mb={10}>
        Kết Quả Tìm Kiếm
      </Heading>
      {loading ? (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} height={"300px"} />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {results.map((result) => (
            <Box
              key={result.id}
              p={5}
              borderWidth={"1px"}
              borderRadius={"lg"}
              overflow="hidden"
            >
              <Image
                src={result.imageSrc}
                alt={result.name}
                mb={4}
                borderRadius="md"
              />
              <Heading as="h3" size="md" mb={2}>
                {result.name}
              </Heading>
              <Text mb={2}>{result.location}</Text>
              <Text mb={2}>Nhận phòng: {result.checkInDate}</Text>
              <Text mb={2}>Trả phòng: {result.checkOutDate}</Text>
              <Text mb={2}>Số người: {result.guests}</Text>
              <Text mb={2}>Số phòng: {result.rooms}</Text>
              <Text fontWeight="bold">{result.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default BookingResults;
