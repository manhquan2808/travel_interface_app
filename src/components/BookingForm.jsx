import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

const BookingForm = ({onSearch}) => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      location,
      checkInDate,
      checkOutDate,
      guests,
    });
    onSearch({
      location,
      checkInDate,
      checkOutDate,
      guests,
    });
  };
  return (
    <Box p={4} bg={"grey.100"} borderRadius={"md"} boxShadow={"md"}>
      <Heading as={"h2"} size={"lg"} mb={4}>
        Đặt phòng
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} justifyContent={"center"}>
          <FormControl id="location" isRequired>
            <FormLabel>Vị trí</FormLabel>
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FormControl>
          <FormControl id="checkInDate" isRequired>
            <FormLabel>Ngày nhận phòng</FormLabel>
            <Input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </FormControl>
          <FormControl id="checkOutDate" isRequired>
            <FormLabel>Ngày trả phòng</FormLabel>
            <Input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </FormControl>
          <FormControl id="guest" isRequired>
            <FormLabel>Số người</FormLabel>
            <Select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
            </Select>
          </FormControl>
          <Button colorScheme="teal" type="submit">Tìm kiếm</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default BookingForm;
