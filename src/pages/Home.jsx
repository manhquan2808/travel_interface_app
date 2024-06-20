import { Box } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Feature";
import Testimonials from "../components/Testimonials";
import Newletter from "../components/Newsletter";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <Features />
      <Testimonials />
      <Newletter />
    </Box>
  );
};

export default Home;
