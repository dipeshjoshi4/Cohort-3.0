import React from "react";

const About = ({width,children}) => {
    console.log(width)
    console.log(children)
  return (
    <div>
      <h1>Hey i am from About</h1>
      {children}
    </div>
  );
};

export default About;
