import { Box } from "@chakra-ui/react";
import BookingForm from "../components/BookingForm";
import BookingResults from "../components/BookingResults";
import { useState } from "react";

const Booking = () => {
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (params) => {
    setSearchParams(params);
  };
  return (
    <Box>
      <BookingForm onSearch={handleSearch} />
      {searchParams && <BookingResults searchParams={searchParams} />}
    </Box>
  );
};

export default Booking;
