import AnimatedCursor from "react-animated-cursor";

const AnimatedCursorComponent = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={20}
      color="255,255,255"
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={1.5}
    />
  );
};
export default AnimatedCursorComponent;
