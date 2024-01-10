import { ScrollToSection } from "../sub_components/Information";
import {useSelector} from "react-redux" 


const Navbar = () => {
  const {Home_ref,Daily_work_ref,Excercise_ref,Food_ref,Sleep_ref,Tricks_ref,Footer_ref}=useSelector((state)=>state.components);
  return (
    <div className="flex items-center h-[35%] space-x-8 bg-sky-100">
      <a onClick={() => ScrollToSection(Home_ref)} className="ml-[7vh]">
        <button className="border rounded bg-blue-50 hover:bg-blue-300">Home</button>
      </a>
      <a onClick={() => ScrollToSection(Daily_work_ref)} className="">
        <button className="border rounded bg-blue-50 hover:bg-blue-300 ">Connected with work</button>
      </a>
      <a onClick={() => ScrollToSection(Excercise_ref)} className="">
        <button className="border rounded bg-blue-50 hover:bg-blue-300 ">Do Excercise</button>
      </a>
      <a onClick={() => ScrollToSection(Food_ref)} className="">
        <button className="border rounded bg-blue-50 hover:bg-blue-300 ">Eat Good Food</button>
      </a>
      <a onClick={() => ScrollToSection(Sleep_ref)} className="">
        <button className="border rounded bg-blue-50 hover:bg-blue-300 ">Take Proper sleep</button>
      </a>
      <a onClick={() => ScrollToSection(Tricks_ref)} className="">
        <button className="border rounded bg-blue-50 hover:bg-blue-300 ">some Spacial Tricks</button>
      </a>
      <a onClick={() => ScrollToSection(Footer_ref)} className="">
        <button className="border rounded bg-blue-50 hover:bg-blue-300 ">Contact Us</button>
      </a>
    </div>
  );
}
export default Navbar;




