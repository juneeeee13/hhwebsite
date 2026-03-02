import '../styles/Global.css';
import '../styles/HackathonEvent.css';

const HackathonSpring2026 = () => {
  return (
    <div>
      <Register />
    </div>
  );
};

const Register = () => {
    return (
        <section className="hackathon-event-section">
            <div>
                <h2 className="page-h2 color-purple">♡ Next Hackathon: April 18, 2026 and April 25, 2026 </h2>
                <div className="event-recap-button-group">
                    <a
                        href={"https://forms.cloud.microsoft/r/etvYNC2H7Y"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="event-recap-button">♡ High School Student Registration ♡</button>
                      </a>
                </div>
            </div>
        </section>
    );
};



export default HackathonSpring2026;