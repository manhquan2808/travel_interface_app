import { Box, Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useCallback, useState } from "react";

const Newletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubcribed] = useState(false);

  const handleSubcribed = useCallback(() => {
    if (email) {
      setSubcribed(true);
      setEmail("");
    }
  }, [email]);
  return (
    <Box p={5} textAlign={"center"} bg={"grey.100"} py={10}>
      <Heading as="h2" size={"xl"} mb={4}>
        Đăng ký để nhận thông tin mới nhất
      </Heading>
      <Text mb={6}>Để có thể nhận những ưu đãi từ chúng tôi</Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={"center"}
      >
        <Input
          placeholder="Nhập email của bạn"
          size={"lg"}
          width={"auto"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button size={"lg"} colorScheme="teal" onClick={handleSubcribed}>
          {subscribed ? 'Subcribed!' : 'Subcribe'}
        </Button>
      </Stack>
    </Box>
  );
};

export default Newletter;
