export const timelineEducationCSSConfig = {
  dark: {
    lineColor: "black",
    verticalTimelineElement: {
      className: "vertical-timeline-element--work",
      contentStyle: {
        background: "rgb(34, 34, 34)",
        color: "white",
      },
      contentArrowStyle: {
        borderRight: "7px solid rgb(34, 34, 34)",
      },
    },
  },
  light: {
    lineColor: "white",
    verticalTimelineElement: {
      className: "",
      contentStyle: {
        background: "white",
        color: "black",
      },
      contentArrowStyle: {
        borderRight: "7px solid white",
      },
    },
  },
};
