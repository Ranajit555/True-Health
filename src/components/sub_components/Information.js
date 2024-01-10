import Home from "./Home";
import Daily_work from "./Daily_work";
import Excercise from "./Excercise";
import Food from "./Food";
import Sleep from "./Sleep";
import Tricks from "./Tricks";

import { useRef,useEffect} from "react";
import { useDispatch } from "react-redux"
import { set_HomeRef,set_DailyWorkRef,set_ExcerciseRef,
set_FoodRef,set_SleepRef,set_TricksRef } from "../../state/slices";

const ScrollToSection = (elementRef) => {
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  
const Information = () => {
  const send_func=useDispatch(); 

  const Home_ref=useRef(null);
  const Daily_work_ref = useRef(null);
  const Excercise_ref = useRef(null);
  const Food_ref = useRef(null);
  const Sleep_ref = useRef(null);
  const Tricks_ref = useRef(null);

  useEffect(()=>{
    send_func(set_HomeRef(Home_ref));
    send_func(set_DailyWorkRef(Daily_work_ref));
    send_func(set_ExcerciseRef(Excercise_ref));
    send_func(set_FoodRef(Food_ref));
    send_func(set_SleepRef(Sleep_ref));
    send_func(set_TricksRef(Tricks_ref));
  },[send_func]);
  
  return (
    <div ref={Home_ref} className="">
      <div className="h-[100%] pt-[10%]">
        <Home/>
      </div><br/>
      <div ref={Daily_work_ref} className="h-[100%]">
        <Daily_work />
      </div><br/>
      <div ref={Excercise_ref} className="h-[100%]">
        <Excercise />
      </div><br/>
      <div ref={Food_ref} className="h-[100%]">
        <Food />
      </div><br/>
      <div ref={Sleep_ref} className="h-[100%]">
        <Sleep />
      </div><br/>
      <div ref={Tricks_ref} className="h-[100%]">
        <Tricks />
      </div><br/>
    </div>
  );
}
export {ScrollToSection,Information};





