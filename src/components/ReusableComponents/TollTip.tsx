import * as React from "react";

type IAnchorElTooltips = {
  title: string;
};
const AnchorElTooltips: React.FC<IAnchorElTooltips> = ({ title }) => {
  return (
    <div className="module">
      <div className="module--container">{title}</div>
    </div>
  );
};
export default AnchorElTooltips;
