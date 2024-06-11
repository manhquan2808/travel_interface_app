import { useState } from "react";
import "./App.css";
import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"
import Features from './components/Feature'
import Testimonials from './components/Testimonials'
import Newletter from "./components/Newsletter";

function App() {
  return (
    <Box>
      <Header />
      <HeroSection/>
      <Features/>
      <Testimonials/>
      <Newletter/>
      <Footer/>
    </Box>
  );
}

export default App;
