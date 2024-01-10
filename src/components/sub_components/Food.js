
import React from "react";
const Food = () => {
    return (
        <div id="site_component">
            <article id="artical_containt">
                <section className="page_image">
                    <figure className="page_image_box ml-[5vh] h-[50vh] w-[70%]">
                        <img className="page_topic_image h-[100%] w-[100%]" src="https://www.heartandstroke.ca/-/media/images/blog/woman-chopping-vegetables.jpg?rev=f5bd0e1f01404c4e8402e737b7a0556c&la=en&h=273&w=410&hash=FCED6ABA4BC2102EB86FCF2ADB3F4CB7" alt="image"></img>
                    </figure>
                </section>
                <section className="page_containt">
                    <div className="page_containt_box">
                        <div id="page_introduction">
                            <p className="text-[20px]"><span className="font-bold text-[22px]">3.</span>Eating a healthy, balanced diet is one of the most important things you can do to protect your health. In fact, up to 80% of premature heart disease and stroke can be prevented through your life choices and habits, such as eating a healthy diet and being physically active.
                            </p><p className="text-[20px] text-black text-opacity-75 font-bold">A healthy diet can help lower your risk of heart disease and stroke by-</p>
                            <li className="ml-[20px] ml-[9vh]">improving your cholesterol levels</li>
                            <li className="ml-[20px] ml-[9vh]">helping you manage your body weight</li>
                            <li className="ml-[20px] ml-[9vh]">controlling your blood sugar.</li>
                            <li className="ml-[20px] ml-[9vh]">reducing your blood pressure</li>
                        </div><br />
                        <div id="containt">
                            <div>
                                <p className="text-[20px] text-black text-opacity-75 font-bold">A healthy diet includes:</p>
                            </div>
                            <div id="points">
                                <h4 id="point_heading" className="text-[16px] font-bold">Eating lots of vegetables and fruit:
                                </h4>
                                <li className="ml-[20px]">
                                    This is one of the most important diet habits. Vegetables and fruit are packed with nutrients (antioxidants, vitamins, minerals and fibre) and help you maintain a healthy weight by keeping you full longer,Fill half your plate with vegetables and fruit at every meal and snack.
                                </li>
                            </div>
                            <div id="points">
                                <h4 id="point_heading" className="text-[16px] font-bold">Whole Grains:
                                </h4>
                                <li className="ml-[20px]">Choose whole grains such as brown rice, quinoa, oats, and whole wheat over refined grains for a good source of fiber, vitamins, and minerals.</li>
                            </div>
                            <div id="points">
                                <h4 id="point_heading" className="text-[16px] font-bold">Protein Sources:
                                </h4>
                                <li className="ml-[20px]">Include lean protein sources like poultry, fish, beans,and nuts.</li>
                                <li className="ml-[20px]">Fish, particularly fatty fish like salmon, provides omega-3 fatty acids, which are beneficial for heart health.</li>
                            </div>
                            <div id="points">
                                <h4 id="point_heading" className="text-[16px] font-bold">Hydration:
                                </h4>
                                <li className="ml-[20px]">Drink plenty of water throughout the day to stay hydrated.
                                </li>
                                <li className="ml-[20px]">Limit sugary drinks and excessive caffeine intake.</li>
                            </div>
                            <div id="points">
                                <h4 id="point_heading" className="text-[16px] font-bold">Balanced Meals:
                                </h4>
                                <li className="ml-[20px]">Aim for balanced meals that include a combination of carbohydrates, proteins, and healthy fats.</li>
                                <li className="ml-[20px]">Include a variety of foods to ensure a diverse nutrient intake.</li>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
}
export default Food;