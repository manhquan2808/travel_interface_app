import { useState } from "react";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"
import Features from './components/Feature'
import Testimonials from './components/Testimonials'
import Newletter from "./components/Newsletter";
import BookingForm from "./components/BookingForm"
import BookingResults from "./components/BookingResults"

function App() {
  const [searchParams, setSearchParams] = useState(null)

  const handleSearch = (params) => {
    setSearchParams(params)
  }
  return (
    <Box>
      <Header />
      <HeroSection/>
      {/* <BookingForm/> */}
      <Box p={5} maxW={'1200px'} mx={'auto'}>
        <BookingForm onSearch={handleSearch}/>
        {searchParams && <BookingResults searchParams={searchParams}/>}
      </Box>
      <Features/>
      <Testimonials/>
      <Newletter/>
      <Footer/>
    </Box>
  );
}

export default App;
