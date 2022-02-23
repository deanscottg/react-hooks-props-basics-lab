import React from "react";
import Links from "./Links";

function About(props) {
  const isBioPassed =  props.user.bio ? <p>{props.user.bio}</p> : null; 
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{isBioPassed}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.github} linkedin = {props.linkedin} ></Links>
    </div>
  );
}

export default About;
