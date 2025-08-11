import '../styles/Global.css';
import '../styles/HackathonEvent.css';

const HackathonFall2025 = () => {
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



export default HackathonFall2025;