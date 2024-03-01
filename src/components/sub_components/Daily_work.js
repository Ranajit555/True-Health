const Daily_work = () => {
    return (
        <div id="site_component">
            <article id="artical_containt">
                <section className="page_image">
                    <figure className="page_image_box h-[57vh] w-[70%]">
                        <img className="page_topic_image h-[100%] w-[100%]" src="image/cycling_inwork.avif" alt="image"></img>
                    </figure>
                </section><br/>
                <section className="page_containt">
                    <div className="page_containt_box">
                        <div id="page_introduction">
                            <p className="text-[30px]"><span className="font-bold text-[30px]">1. </span>Incorporating physical activity into your daily work routine is important for maintaining overall health and well-being. Here are some practical tips to incorporate physical activity into your daily work:</p>
                        </div><br/>
                        <div id="containt">
                            <div id="points">
                                <h4 id="point_heading" className="text-[20px] font-bold">Walk or Cycle to Work:
                                </h4>
                                <li className="ml-[30px]">
                                If possible, consider walking or biking to work. This is an excellent way to include physical activity in your daily routine
                                </li>
                            </div>
                            <div id="points">
                                <h4 id="point_heading" className="text-[20px] font-bold">Use Stairs:
                                </h4>
                                <li className="ml-[30px]">Opt for stairs instead of elevators whenever possible. Climbing stairs is a great way to get your heart rate up.</li>
                            </div>
                            <div id="points">
                                <h4 id="point_heading" className="text-[20px] font-bold">Walking Meetings:
                                </h4>
                                <li className="ml-[30px]">Instead of sitting in a conference room, have walking meetings. This can stimulate creativity and boost energy.</li>
                            </div>
                            <div id="points">
                                <h4 id="point_heading" className="text-[20px] font-bold">Active Commuting:
                                </h4>
                                <li className="ml-[30px]">If possible, consider alternative forms of commuting, such as walking, cycling, or using public transportation combined with walking.</li>
                            </div>
                            <div id="points">
                                <h4 id="point_heading" className="text-[20px] font-bold">Team Building Activities:
                                </h4>
                                <li className="ml-[30px]">Encourage team activities that involve physical exercise, such as group walks or sports events.</li>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
}
export default Daily_work;