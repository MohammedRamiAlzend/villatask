import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Home";
import NavBar from "./components/NavBar/NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Properties from "./Properties";
import PropertyDetails from "./PropertyDetails";
import ContactUs from "./ContactUs";

function App() {
  return (
    <>
      {/* <BrowserRouter>
          <Header />
          <NavBar />
        <Routes>
         <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
          <Header />
          <NavBar />
        <Routes>
          <Route path="/villatask/" element={<Home />} />
          <Route path="/villatask/properties" element={<Properties />} />
          <Route path="/villatask/propertydetails" element={<PropertyDetails />} />
          <Route path="/villatask/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
