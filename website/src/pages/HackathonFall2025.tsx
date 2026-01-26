import '../styles/Global.css';
import '../styles/HackathonEvent.css';
import fall2025 from "../data/HackathonEvents/Fall2025.json";
import { Link } from 'react-router-dom';

const HackathonFall2025 = () => {
  return (
    <div>
      <EventOverview />
      <StudentProjects />
      <MentorTestimonies />
    </div>
  );
};

const EventOverview = () => {
  return (
    <section className="event-overview">
      <div className="event-overview-container">
        <div>
          <img className="event-overview-img" src="/assets/pictures/firstHackathon/firstWomensHackathonShowcase4.jpg" />
          <Link to="/fall2025gallery">
            <button className="event-recap-button">♡ Gallery ♡</button>
        </Link>
        </div>
        <div className="event-overview-content-div">
          <h2 className="page-h2 event-overview-h2">♡ Event Overview - Fall 2025</h2>
          <p className="page-p event-overview-p">
            This was our second bi-annual Harmony Hackathon. It occured on Saturdays, November 15 & 22. Thirteen students from 6 local high schools participated in the event. The majority of participants were in 10th grade. Some students completed AP Computer Science A while some students had no prior coding experience. Some students played multiple musical instruments while some students simply enjoyed listening to music. They were put into four different teams based on their prior experience to ensure each team had members with coding and music expertise. The teams were asked to encrypt the following messages into music:
          </p>
          <p className="page-p event-overview-p">
            <ul className="custom-bullet-list">
                    <li> Hash it before you trash it </li>
                    <li> Protect your rhythm, protect your world</li>
                    <li> Every lock needs the right key</li>
                    <li> Creativity thrives when privacy survives</li>
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

const cards: Card[] = fall2025.map((project, index) => ({
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
            It was a wonderful experience mentoring at the Harmony Hackathon! This was my second semester being a mentor and I truly enjoyed it! The students are so talented and truly have so much creativity. Seeing all the different songs come together at the showcase was super cool. The Harmony Hackathon greatly benefits students who are just starting out in STEM and music! I'd definitely recommend anyone to participate, regardless of experience level. - June Phillips, Fall 2025, Mentor
          </p>
        </div>
      </div>
    </section>
  );
};


export default HackathonFall2025;