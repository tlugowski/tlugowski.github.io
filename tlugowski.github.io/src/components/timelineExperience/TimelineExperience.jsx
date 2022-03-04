import "./timelineExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ThemeContext } from "../../context";
import { useContext, useMemo } from "react";
import { timelineExperienceCSSConfig } from "./timlineExpirience.helpes";

const TimelineExperience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const timelineColors = useMemo(
    () =>
      darkMode
        ? timelineExperienceCSSConfig.dark
        : timelineExperienceCSSConfig.light,
    [darkMode]
  );
  return (
    <div>
      <div className="myExperiance">
        <h1>My Experience:</h1>
      </div>
      <div className="timelineExperienceContent">
        <div className="timelineExperience">
          <VerticalTimeline
            className="nana"
            lineColor={timelineColors.lineColor}
          >
            <VerticalTimelineElement
              className={timelineColors.verticalTimelineElement.className}
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(33, 150, 243)",
              }}
              date="05/2021 - present"
              iconStyle={{
                background: "rgb(116, 25, 113)",
                color: "black",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                Junior Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Medicalgorithmics
              </h4>
              <p>
                Implementation of functionalities and features provided in
                business specification
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="01/2021 - 05/2021"
              contentStyle={timelineColors.verticalTimelineElement.contentStyle}
              contentArrowStyle={
                timelineColors.verticalTimelineElement.contentArrowStyle
              }
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Test Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Medicalgorithmics
              </h4>
              <p>
                Identify space for improvements and implement the change Develop
                quality standards and processes
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="09/2017 - 01/2021"
              contentStyle={timelineColors.verticalTimelineElement.contentStyle}
              contentArrowStyle={
                timelineColors.verticalTimelineElement.contentArrowStyle
              }
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Test Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Medicalgorithmics
              </h4>
              <p>
                Defining and maintaining a Test Automation Architecture
                Identifying the appropriate and creating supporting tools
                Specifying and verifying the required Test Environment
                Configurations
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="03/2017 - 09/2017"
              contentStyle={timelineColors.verticalTimelineElement.contentStyle}
              contentArrowStyle={
                timelineColors.verticalTimelineElement.contentArrowStyle
              }
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Test Team Leader
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Medicalgorithmics
              </h4>
              <p>
                Involvement in the planning, monitoring, and control of the
                testing activities and tasks. Estimate the test effort, create
                the test schedule Providing for the team all the necessary
                resources to execute the testing activities.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="03/2016 - 03/2017"
              contentStyle={timelineColors.verticalTimelineElement.contentStyle}
              contentArrowStyle={
                timelineColors.verticalTimelineElement.contentArrowStyle
              }
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Software Tester
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Medicalgorithmics
              </h4>
              <p>Inventing improvements for the current test process</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="01/2014 - 03/2016"
              contentStyle={timelineColors.verticalTimelineElement.contentStyle}
              contentArrowStyle={
                timelineColors.verticalTimelineElement.contentArrowStyle
              }
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Software Tester
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Medicalgorithmics
              </h4>
              <p>
                Preparing detailed test plans, accurately monitoring and
                recording results in test documentation, Executing functional
                and regression tests, Liaising with developers and programmers
                to swiftly resolve faults, Taking actions to optymalize the
                existing tests (creating scripts).
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="09/2012 - 01/2014"
              contentStyle={timelineColors.verticalTimelineElement.contentStyle}
              contentArrowStyle={
                timelineColors.verticalTimelineElement.contentArrowStyle
              }
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Junior Software Tester
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Medicalgorithmics
              </h4>
              <p>
                Testing medical software and devices for EKG examinations
                Identifying and resolving problems supported from clients
                Creating new test plans, raporting defects
              </p>
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

export default TimelineExperience;
