import { useState } from "react";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

function App() {
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (params) => {
    setSearchParams(params);
  };
  return (
    <Box>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
