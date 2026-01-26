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
                        href={"https://forms.office.com/pages/responsepage.aspx?id=q1OHEijLgk-XMyubkdKsqTClqO-K43NPqGQTTTk2jvlUN0JTVkVMRkVZWFVKSllEUENIVVNXVTM4MC4u&route=shorturl"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="event-recap-button">♡ Registration Opening Soon ♡</button>
                      </a>
                </div>
            </div>
        </section>
    );
};



export default HackathonSpring2026;