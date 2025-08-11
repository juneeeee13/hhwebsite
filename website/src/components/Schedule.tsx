import React from "react";
import '../styles/Schedule.css';

const Schedule: React.FC = () => {
  return (
    <section className="harmony-schedule-section" id="schedule">
      <div className="overflow-x-auto">
        <table className="harmony-schedule-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {/* First Saturday */}
            <tr>
              <td rowSpan={6}>First Saturday</td>
              <td>8:40 - 9:00 AM</td>
              <td>Check-in</td>
            </tr>
            <tr>
              <td>9:00 - 10:00 AM</td>
              <td>Breakfast and Opening Session</td>
            </tr>
            <tr>
              <td>10:00 - 11:00 AM</td>
              <td>Introduction Workshops</td>
            </tr>
            <tr>
              <td>11:00 - Noon</td>
              <td>Team Formation and Ideation</td>
            </tr>
            <tr>
              <td>12:00 - 12:30 PM</td>
              <td>Lunch</td>
            </tr>
            <tr>
              <td>12:30 - 3:00 PM</td>
              <td>Team Collaboration</td>
            </tr>

            {/* Second Saturday */}
            <tr>
              <td rowSpan={5}>Second Saturday</td>
              <td>1:40 - 2:00 PM</td>
              <td>Check-in</td>
            </tr>
            <tr>
              <td>2:00 - 5:00 PM</td>
              <td>Team Collaboration</td>
            </tr>
            <tr>
              <td>5:00 - 6:30 PM</td>
              <td>Group Presentations</td>
            </tr>
            <tr>
              <td>6:30 - 7:30 PM</td>
              <td>Dinner and Guest Speaker</td>
            </tr>
            <tr>
              <td>7:30 - 8:00 PM</td>
              <td>Awards</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;