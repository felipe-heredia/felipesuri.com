import ReactGA from "react-ga";

export const gitHubClickTrack = () => {
  ReactGA.event({
    category: "gitHub",
    action: "click",
    label: "gitHub na Bottom Bar",
  });
};

export const labClickTrack = () => {
  ReactGA.event({
    category: "lab",
    action: "click",
    label: "Link Lab na Bottom Bar",
  });
};
