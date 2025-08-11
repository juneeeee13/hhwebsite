import hackathonGuide from "../data/HackathonGuide.json";
import '../styles/Global.css'; 
import '../styles/Hackathon.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const OurProcess = () => {
    return (
        <>
        <Guide />
        </>
    );
};

type HackathonSteps = {
    "id": number,
    "hackathonStep_title": string,
    "hackathonStep_description": string,
    "hackathonStep_image": string
}

const Guide = () => {
    return (
      <section className= "hackathon-guide-section" >
        <div>
            <h2 className = "page-h2 color-purple">♡ Our Process </h2> 
            <h3 className = "page-h3 color-darkpurple"> Creating our Harmony Hackathons was no easy task, but thanks to the dedication of our mentors and faculty members, we were able to bring our vision to life. This guide shares the process we followed. From forming a club and building a community, to organizing outreach, preparing materials, and running the event itself. </h3>
            <br/>

            <VerticalTimeline lineColor = "#633160" layout ={'1-column-left'}>

            {hackathonGuide.map((member: HackathonSteps) => (

                <VerticalTimelineElement className = "vertical-timeline-element"
                
                contentStyle={{ background: "#fff2fe", color: '#633160' }}
                icon = {member.id}
                iconStyle={{background:"#633160", color:"#fff2fe", fontFamily: "Ubuntu", textAlign: "center", fontSize: "1.5rem"}}
                >
                <div className = "hackathon-guide-content-div">
                    <div>
                    <h3 className = "page-h3 color-darkpurple"> {member.hackathonStep_title} </h3>
                    <p className = "page-p color-purple">{member.hackathonStep_description}</p>
                    </div>
                    <div className="hackathon-guide-img-div">
                    <img className="hackathon-guide-img" src={member.hackathonStep_image || "/website/assets/temp.png"} alt={`${member.hackathonStep_title}`} />
                    </div>
                </div>
                </VerticalTimelineElement>
            ))}

            </VerticalTimeline>
            
        </div>
      </section>
    );
};

export default OurProcess;