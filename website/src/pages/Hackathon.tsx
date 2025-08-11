import '../styles/Global.css'; 
import '../styles/Hackathon.css';
import { Link } from 'react-router-dom';
import HarmonySchedule from "../components/Schedule";

const Hackathon = () => {
    return (
        <>
        <h1 className="page-h1 color-purple" style={{ marginLeft: "5rem" }}> Harmony Hackathons </h1>
        <Register />
        <HackathonHistory />
        <Who />
        <Benefits />
        <HackathonEvent />
        </>
    );
};

const Register = () => {
    return (
        <section className="hackathon-event-section">
            <div>
                <h2 className="page-h2 color-purple">♡ Next Hackathon: November 8, 2025 and November 15, 2025 </h2>
                <div className="event-recap-button-group">
                    <a
                        href={"https://forms.office.com/pages/responsepage.aspx?id=q1OHEijLgk-XMyubkdKsqTClqO-K43NPqGQTTTk2jvlUN0JTVkVMRkVZWFVKSllEUENIVVNXVTM4MC4u&route=shorturl"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="event-recap-button">♡ Register Here ♡</button>
                      </a>
                </div>
            </div>
        </section>
    );
};

const HackathonEvent = () => {
    return (
        <section className="hackathon-event-section">
            <div>
                <h2 className="page-h2 color-purple">♡ Event Recaps </h2>
                <div className="event-recap-button-group">
                    <Link to="/hackathonSpring2025">
                        <button className="event-recap-button">♡ Spring 2025 ♡</button>
                    </Link>
                    <Link to="/hackathonFall2025">
                        <button className="event-recap-button">♡ Fall 2025 ♡</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

const HackathonHistory = () => {
  return (
    <section className="benefits">
      <div className="benefits-container">
        <div className="story-column">
            <div className="benefits-content-div">
            <h2 className="page-h2 benefits-h2">♡ What is the Harmony Hackathon?</h2>
            <p className="page-p benefits-p">
                Founded by a team of faculty from both Computer Science and Music, this hackathon provides a unique opportunity for high school girls to combine computer programming and music in problem solving. The program activities are designed to help participants to
            </p>
            <p className="page-p benefits-p">
              <ul className="custom-bullet-list">
                    <li> perceive computing as engaging, relatable, and appealing. </li>
                    <li> appreciate the value of creativity in computing.</li>
                    <li> recognize the existence of supportive communities for women in computing fields.</li>
              </ul>
            </p>
            
            <p className="page-p benefits-p">
                On two consecutive Saturdays, participants will work in teams and under the guidance of college mentors to devise creative ways of hiding textual messages via music. They will build computer programs on TunePad to implement these creative ideas. Here’s an overview of the schedule for the two days:
            </p>
            <p className="page-p benefits-p">
              For more information on the planning and organization of the event,&nbsp;
              <Link to="/ourProcess" className="green-link">click here!</Link>
            </p>
            <div>
              <HarmonySchedule />
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};

const Who = () => {
  return (
    <section className="who">
      <div className="who-container">
        <div className="who-content-div">
            <h2 className="page-h2 who-h2">♡ Who Can Participate in This Event?</h2>
            <p className="page-p who-p">
                We are looking for high school girls who are imaginative, creative, and out-of-the-box thinkers. They just need to be excited about technology and/or music, regardless of their skill levels.
            </p>
            <p className="page-p who-p">
                Participants do not need prior experience to join! We welcome anyone with all different skill levels. This hackathon is an opportunity to grow that skillset and connect with other girls who are interested in technology.
            </p>
        </div>
        <div>
            <img className="who-img" src="/website/assets/pictures/firstHackathon/firstWomensHackathonShowcase10.jpg" />
            </div>
      </div>
    </section>
  );
};


const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits-container">
        <div>
          <img className="benefits-img" src="/website/assets/pictures/firstHackathon/firstWomensHackathonShowcase6.jpg" />
        </div>
        <div className="benefits-content-div">
            <h2 className="page-h2 benefits-h2">♡ Why Should I Participate in This Event?</h2>
            <p className="page-p benefits-p">
                <ul className="custom-bullet-list">
                    <li>Develop real-world coding and teamwork skills in a supportive environment</li>
                    <li>Gain hands-on experience by working on a full project from start to finish</li>
                    <li>Collaborate with peers and make new friends who share your interests</li>
                    <li>Network with mentors and industry professionals</li>
                    <li>Enhance your college applications and resumes with a tangible project</li>
                    <li>Win prizes and earn recognition for your creativity and innovation</li>
                    <li>Showcase your work to a real audience during the project expo</li>
                    <li>Receive free food, swag, and custom-made Harmony Hacks T-shirts!</li>
                    <li>Have fun in a safe, inclusive space where all skill levels are welcome</li>
                </ul>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;