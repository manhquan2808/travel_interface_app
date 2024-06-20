import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react"

const Contact = () => {
    return(
        <Box p={5} maxW={'600px'} mx={'auto'}>
            <Heading as={'h1'} size={'xl'} mb={5}>Liên Hệ Với Chúng Tôi</Heading>
            <form>
                <FormControl id="name" mb={4}>
                    <FormLabel>Họ và tên</FormLabel>
                    <Input type="text"/>
                </FormControl>
                <FormControl id="email" mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="text" autoComplete="off"/>
                </FormControl>
                <FormControl id="message" mb={4}>
                    <FormLabel>Nội dung</FormLabel>
                    <Textarea/>
                </FormControl>
                <Button colorScheme="teal" type="submit">Gửi</Button>
            </form>
        </Box>
    )
}

export default Contact