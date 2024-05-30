import { Link } from "react-router-dom";
import LogoImg from "../assets/logo.png";


export default function Navbar() {
  return (
    <div className="bg-[#850F8D] navv">
      <div className="flex justify-between items-center p-3 px-2 lg:px-0 container mx-auto">
        <div>
          <Link to="/"><img className="pl-5 w-48" src={LogoImg} alt="lofo" /></Link>
        </div>

        <input
          className="peer hidden"
          type="checkbox"
          name="hamburger"
          id="hamburger"
        />
        <label
          className="peer-checked:hamburger block relative cursor-pointer lg:hidden border-2 border-gray-300 peer-checked:border-2 peer-checked:border-white p-3 rounded-md transition-all"
          htmlFor="hamburger"
        >
          <div className="m-auto w-6 h-0.5 rounded bg-gray-300 transition-all duration-300"></div>
          <div className="m-auto mt-2 w-6 h-0.5 rounded bg-gray-300 transition-all duration-300"></div>
        </label>

        <div className="p-60px font-spartan text-xl -translate-y-full peer-checked:translate-y-0 lg:translate-y-0 inset-0 fixed lg:static pt-16 lg:pt-0 bg-white lg:bg-transparent -z-10 lg:z-10 lg:h-auto lg:w-auto transition-all duration-300 ease-in-out">
          <div className="bg-[#850f8d] shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col lg:items-center lg:flex-row px-6 space-y-4 lg:space-y-0 lg:space-x-12">
            <Link className="text-white" to="mailto:rishabhdas015.hitece2020@gmail.com">
              CONTACT
            </Link>
            <Link className="text-white" to="https://docs.google.com/forms/d/e/1FAIpQLSf1Gkkdz24xJ5bXp47Mm-5teYy5EhS6RTeQqyhk1PFeqDimcg/viewform?usp=sf_link">
              FEEDBACK
            </Link>
            <Link className="text-white" to="/login">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
