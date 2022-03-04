import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">My Software Testing background..</p>
        <p className="about-desc">
          I was in software testing for 10 years. I have rich experience in this
          subject. I was a senior manual tester, senior automation tester, test
          designer as well as a test team leader, that's why I am familiar with
          testing and I pay attention to this aspect in my current job. I also
          have ISTQB certificate. After so long time I decided to do something
          different something more something that will bring me result before my
          eyes. I have always loved designing, creating and painting, for a
          while I was dealing with computer graphics - that is why I decided to
          start everything from the beginning and deal with frontend development
          - which brings me the most pleasure
        </p>
        <div className="about-award">
          <img src={Award} alt="" className="about-award-img" />
          <div className="about-award-texts">
            <h4 className="about-award-title">ISTQB 2014</h4>
            <p className="about-award-desc">
              International Software Testing Qualifications Board
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
