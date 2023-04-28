import React from "react";

function About(props) {
  const {
    imageSrc = "https://via.placeholder.com/215",
    alt = "blog logo",
    text,
  } = props;

  return (
    <aside>
      <img src={imageSrc} alt={alt} />
      <p>{text}</p>
    </aside>
  );
}

export default About;
