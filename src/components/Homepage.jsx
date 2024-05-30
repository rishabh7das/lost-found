import { Link } from "react-router-dom";
import Button from "./Button.jsx";
// import NavBar from "./components/Navbar";
import LostItems from "../assets/lost-items.png";
import HandshakeImg from "../assets/handshake.png";
// import Footer from "./components/Footer.jsx";

export default function Homepage() {
  return (
    <>
    <div className="min-h-screen flex flex-col overflow-y-scroll">
    <div className="bg-[#e0e5ec] flex text-6xl text-wrap font-light">
        <div className="w-1/2 p-20 font-anton text-[#850F8D]">
          THE DESTINATION FOR ALL YOUR LOST ITEMS AND GOOD DEEDS.
        </div>
        <div className="pt-20 w-44 mx-20">
          <img src={LostItems} alt="Search" />
        </div>
        <div className="pt-20 w-44 mx-20">
          <img src={HandshakeImg} alt="Search" />
        </div>
      </div>
      <div className="bg-[#e0e5ec] flex place-content-center pt-14 ">
        <div className="px-10 ">
          <Link to="/lost"><Button>LOST</Button></Link>
        </div>
        <div className="px-5">
          <Link to="/found"><Button>FOUND</Button></Link>
        </div>
        <div className="px-10">
          <Link to="/feed"><Button>FEED</Button></Link>
        </div>
      </div>
    </div>
    
      

      
    </>
  );
}
