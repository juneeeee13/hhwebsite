import '../styles/Global.css';
import '../styles/HackathonEvent.css';
import spring2025 from "../data/HackathonEvents/Spring2025.json";
import { Link } from 'react-router-dom';

const HackathonSpring2025 = () => {
  return (
    <div>
      <EventOverview />
      <StudentProjects />
      <JudgeTestimonies />
      <MentorTestimonies />
    </div>
  );
};

const EventOverview = () => {
  return (
    <section className="event-overview">
      <div className="event-overview-container">
        <div>
          <img className="event-overview-img" src="/website/assets/pictures/firstHackathon/firstWomensHackathonShowcase4.jpg" />
          <Link to="/spring2025gallery">
            <button className="event-recap-button">♡ Gallery ♡</button>
        </Link>
        </div>
        <div className="event-overview-content-div">
          <h2 className="page-h2 event-overview-h2">♡ Event Overview - Spring 2025</h2>
          <p className="page-p event-overview-p">
            This was our first hackathon event, happening on Saturdays, April 12 & 19. Thirteen students from 6 local high schools participated in the event. The majority of participants were in 10th grade. Some students completed AP Computer Science A while some students had no prior coding experience. Some students played multiple musical instruments while some students simply enjoyed listening to music. They were put into four different teams based on their prior experience to ensure each team had members with coding and music expertise. The teams were asked to encrypt the following messages into music:
          </p>
          <p className="page-p event-overview-p">
            <ul className="custom-bullet-list">
                    <li> Girls who innovate, inspire the future. </li>
                    <li> Girls who connect, empower one another.</li>
                    <li> Girls who create, transform the world.</li>
                    <li> Girls who _________ (Each team was asked to creatively come up with their own way to complete this message.)</li>
              </ul>
            </p>
          <p className="page-p event-overview-p">
            Seven undergraduate computer science majors and two music majors served as mentors at the event to support high school participants. The teams presented their projects to a panel of 6 successful women. Their projects and related awards are showcased below.
          </p>
        </div>
      </div>
    </section>
  );
};

type Card = {
  id: number;
  groupname: string;
  awards: string;
  tunepadlink: string;
  grouppic: string;
  songname: string
};

const cards: Card[] = spring2025.map((project, index) => ({
  id: index + 1,
  groupname: project.groupname,
  awards: project.awards,
  tunepadlink: project.tunepadlink,
  grouppic: project.grouppic,
  songname: project.songname
}));

const StudentProjects = () => {
    return (
        <section className="student-projects">
            <div className="student-projects-container">
                <h2 className="page-h2 student-projects-h2">♡ Student Projects</h2>

            <div className="student-projects-div">
              {cards.map((card) => (
                <div key={card.id} className="student-projects-card">
                  <div className="student-projects-card-div">
                    <h3 className="student-projects-card-title">{card.groupname}</h3>
                    <p className="student-projects-card-description">{card.awards}</p>
                    <img
                      src={card.grouppic}
                      alt={`${card.groupname} group`}
                      className="student-projects-img"
                    />
                    <br></br>
                      <a
                        href={card.tunepadlink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="student-projects-button">{card.songname}</button>
                      </a>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
};


const MentorTestimonies = () => {
  return (
    <section className="mentor-testimonies">
      <div className="mentor-testimonies-container">
        <div className="mentor-testimonies-div">
          <h2 className="page-h2 mentor-testimonies-h2">₊˚✧ ━━━━⊱ Mentor Testimonials ⊰━━━━ ✧₊˚</h2>
          <p className="page-p mentor-testimonies-p">
            During the showcase, I was genuinely blown away with how much creativity and thoughtfulness the girls put into their projects. Each team persevered through challenges, supported each other, and left with a spark to keep learning and coding. That moment reminded me exactly why I joined in co-founding Harmony Hacks which was to inspire and empower women in STEM. - Kate Paduganao, Mentor, Spring 2025
          </p>
          <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7320283902625951744/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="mentor-testimonies-button"> view post here</button>
                      </a>
        </div>
      </div>
    </section>
  );
};

const JudgeTestimonies = () => {
  return (
    <section className="judge-testimonies">
      <div className="judge-testimonies-container">
        <div className="judge-testimonies-div">
          <h2 className="page-h2 judge-testimonies-h2">₊˚✧ ━━━━⊱ Judge Testimonials ⊰━━━━ ✧₊˚</h2>
          <p className="page-p judge-testimonies-p">
            Each of the four teams brought a completely unique approach. The creativity, confidence, and collaboration on display were nothing short of outstanding.
Being invited to share parting words and help embolden this next generation of talent was an honour. - Rema Lolas, Judge Spring 2025
          </p>
          <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7320914384141135874/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="judge-testimonies-button"> view post here</button>
                      </a>
                      <br></br><br></br>
          <p className="page-p judge-testimonies-p">⊹　 ︶︶　 ୨୧　 ︶︶　 ⊹　 ︶︶　 ୨୧　 ︶︶　 ⊹</p>
          <p className="page-p judge-testimonies-p">
            These young women are bright, fierce, and deeply thoughtful. They also voiced what many of us see—they want to see more women who look like them in tech. Representation matters. - Lori Mayer, Judge Spring 2025
          </p>
        <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7320196592731389953/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="judge-testimonies-button"> view post here</button>
                      </a>
        </div>
      </div>
    </section>
  );
};


export default HackathonSpring2025;