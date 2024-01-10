import {Information} from "../sub_components/Information"
const Containt = () => {
    return (
        <div className="flex h-[100%] w-[100%]">
            <div id="right_box" className="h-[100%]">
                <div className="r-route_box h-[99%]">
                   <Information/>
                </div>
            </div>
        </div>
    );
}
export default Containt;