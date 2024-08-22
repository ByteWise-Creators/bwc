import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import MeetUs from "./pages/MeetUs";
import Contact from "./pages/Contact";
import Footer from "./components/Footrer";
import byteWiseLogo from "./assets/mobile-logo/mobilebrand.svg";
import ByteWiseLoader from "./components/ByteWiseLoader";
import { useState } from "react";
import "./App.css";

function App() {
  const [service, setService] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 2000);

  const updateService = (e) => {
    typeof e === "string" ? setService(e) : setService(e.target.value);
  };

  return (
    <>
      {isLoading ? (
        <ByteWiseLoader />
      ) : (
        <>
          <div id="logo" className="px-[4%]">
            <div className="w-full h-10 pt-7 md:hidden sm:pb-10">
              <img src={byteWiseLogo} alt="ByteWiseCreators" />
            </div>
            <Home />
            <Navbar />
            <Service updateService={updateService} />
            <About />
            <MeetUs />
            <Contact service={service} updateService={updateService} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
