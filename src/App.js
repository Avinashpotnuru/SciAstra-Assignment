import "./App.css";
import AdvisorCard from "./components/AdvisorCard";
import MentorsCard from "./components/MentorCard";
import UniversityCard from "./components/UniversityCard";
import { universityData, mentorData, AdvisorData } from "./data";
function App() {
  return (
    <div className="App">
      <h1>Team Page</h1>
      <p>
        Learn from scientists and research,scholars from the top institutes in
        the world university
      </p>
      <div className="university-block">
        {universityData.map((val, idx) => (
          <UniversityCard key={idx} id={idx} name={val} />
        ))}
      </div>

      <h1>Meet your Mentors</h1>
      <div className="mentors-block">
        {mentorData.map((val, idx) => (
          <MentorsCard key={idx} id={idx + 1} {...val} />
        ))}
      </div>

      <h4>Mentor & Advisor</h4>
      <div className="advisor-block">
        {AdvisorData.map((val, idx) => (
          <AdvisorCard key={idx} id={idx + 1} {...val} />
        ))}
      </div>
    </div>
  );
}

export default App;
