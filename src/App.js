import Header_box from "./components/basics/Header_box";
import Navbar from "./components/basics/Navbar";
import Containt from "./components/basics/Containt_box";
import { Footer } from "./components/basics/Footer_box";
const App = () => {
  return (
    <div className="h-screen text-[18px] text-black text-opacity-100">
      <div id="Header_box" className="fixed h-[17%] w-[100%] bg-[rgb(0,113,220)]">
        <Header_box />
        <hr />
        <Navbar />
      </div>
      <div id="Container" className=" h-[fit] w-[100%]">
        <div id="containt" className="h-[fit] ml-[20vh] mr-[19vh]">
          <Containt />
        </div>
      </div>
      <div id="Footer" className="h-[9%]">
        <Footer />
      </div>
    </div>
  );
};
export default App;
