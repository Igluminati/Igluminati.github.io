import React from "react";

/**
 * A custom text component with customizable properties.
 *
 * @param {object} props - The component props.
 * @param {string} props.text - The text content.
 * @param {string} props.color - The text color.
 * @param {number} props.fontSize - The font size of the text.
 * @param {string} props.fontFamily - The font family of the text.
 * @param {string} props.fontStyle - The font style of the text.
 * @param {string} props.fontWeight - The font weight of the text.
 * @param {number} props.xPos - The x-position of the text.
 * @param {number} props.yPos - The y-position of the text.
 *
 * @returns {JSX.Element} The Text component.
 */
const Text = ({
  text,
  color,
  fontSize,
  fontFamily,
  fontStyle,
  fontWeight,
  xPos,
  yPos,
}) => {
  const style = {
    position: "absolute",
    color: color,
    fontSize: fontSize,
    fontFamily: fontFamily,
    fontStyle: fontStyle,
    fontWeight: fontWeight,
    left: xPos,
    top: yPos,
  };

  return <h1 style={style}>{text}</h1>;
};

export default Text;
