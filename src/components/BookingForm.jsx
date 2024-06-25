import { AddIcon, CalendarIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { addDays, format } from "date-fns";
import { useEffect, useRef, useState } from "react";

const IncrementDecrementControl = ({
  label,
  value,
  onIncrement,
  onDecrement,
  min = 0,
}) => {
  return (
    <MenuGroup title={label}>
      <MenuItem
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton
          aria-label={`Decrease ${label}`}
          icon={<MinusIcon />}
          onClick={onDecrement}
          isDisabled={value <= min}
        />
        <Box mx={2}>{value}</Box>
        <IconButton
          aria-label={`Increase ${label}`}
          icon={<AddIcon />}
          onClick={onIncrement}
        />
      </MenuItem>
    </MenuGroup>
  );
};

const BookingForm = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numOfNights, setNumOfNights] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (checkInDate) {
      const checkOut = addDays(new Date(checkInDate), numOfNights);
      setCheckOutDate(format(checkOut, "yyyy-MM-dd"));
    }
  }, [checkInDate, numOfNights]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      location,
      checkInDate,
      checkOutDate,
      adults,
      children,
      rooms,
    });
  };

  const getCurrentDate = () => {
    const today = new Date();
    return format(today, "yyyy-MM-dd");
  };

  const minDate = getCurrentDate();

  const handleMenuOpen = () => {
    onOpen();
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    onClose();
    setIsMenuOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Box p={4} bg={"grey.700"} borderRadius={"md"} boxShadow={"md"}>
      <Heading as={"h2"} size={"lg"} mb={4}>
        Đặt phòng
      </Heading>
      <form onSubmit={handleSubmit}>
        <Grid templateColumns={"repeat(3, 1fr)"} gap={4}>
          <GridItem colSpan={3}>
            <FormControl id="location" isRequired>
              <FormLabel>Nhập điểm đến</FormLabel>
              <Input
                type="text"
                autoComplete="off"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl id="checkInDate" isRequired>
              <FormLabel>Ngày nhận phòng</FormLabel>
              <Input
                min={minDate}
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl id="numOfNights" isRequired>
              <FormLabel>Số đêm</FormLabel>
              <Select
                value={numOfNights}
                onChange={(e) => setNumOfNights(parseInt(e.target.value))}
              >
                {Array.from({ length: 30 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} đêm
                  </option>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl id="checkOutDate">
              <FormLabel>Ngày trả phòng</FormLabel>
              <Input
                type="date"
                disabled
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1} ref={menuRef}>
            <Menu isOpen={isMenuOpen}>
              <MenuButton
                as={Button}
                rightIcon={<CalendarIcon />}
                onClick={handleMenuOpen}
              >
                {`${adults} người lớn, ${children} trẻ em, ${rooms} phòng`}
              </MenuButton>
              <MenuList>
                <IncrementDecrementControl
                  label="Người lớn"
                  value={adults}
                  onIncrement={() => setAdults(adults + 1)}
                  onDecrement={() => setAdults(adults - 1)}
                  min={1}
                />
                <MenuDivider />
                <IncrementDecrementControl
                  label="Trẻ em"
                  value={children}
                  onIncrement={() => setChildren(children + 1)}
                  onDecrement={() => setChildren(children - 1)}
                />
                <MenuDivider />
                <IncrementDecrementControl
                  label="Phòng"
                  value={rooms}
                  onIncrement={() => setRooms(rooms + 1)}
                  onDecrement={() => setRooms(rooms - 1)}
                  min={1}
                />
                <Button onClick={handleMenuClose}>Đóng</Button>
              </MenuList>
            </Menu>
          </GridItem>
          <GridItem colSpan={2} alignItems={"center"}>
            <Button colorScheme="teal" type="submit">
              Tìm kiếm
            </Button>
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
};

export default BookingForm;
