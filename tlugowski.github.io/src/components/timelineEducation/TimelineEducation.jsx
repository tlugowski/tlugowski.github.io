import "./timelineEducation.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineEducation = () => {
  return (
    <div>
      <div className="myEducation">
        <h1>My Education:</h1>
      </div>
      <div className="timelineEducationContent">
        <div className="timelineEducation">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="10/2021 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Kozminski- University
              </h3>
              <p>
                Postgraduate Degree, Frontend development with React -
                programming application
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2014 - 2015"
              contentStyle={{
                background: "white)",
                color: "black",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Vistula - University
              </h3>

              <p>Postgraduate Study, Software Testers</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2014"
              contentStyle={{
                background: "white)",
                color: "black",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Warsaw Management University
              </h3>
              <p>IT Engineer</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default TimelineEducation;
