import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import MeatUs from "./pages/MeatUs";
import Contact from "./pages/Contact";
import Footer from "./components/Footrer";
import { useState } from "react";
import byteWiseLogo from "./assets/mobile-logo/bytewise-creators-m1.svg";
import "./App.css"

function App() {
  const [service, setService] = useState("");

  const updateService = (e) => {
    typeof e === "string" ? setService(e) : setService(e.target.value);
  };

  return (
    <>
      <div className="px-[4%]">
        <div className="w-full h-10 pt-7 md:hidden sm:pb-10">
          <img src={byteWiseLogo} alt="" />
        </div>
        <Home />
        <Navbar />
        <About />
        <Service updateService={updateService} />
        <MeatUs />
        <Contact service={service} updateService={updateService} />
      </div>
      <Footer />
    </>
  );
}

export default App;
