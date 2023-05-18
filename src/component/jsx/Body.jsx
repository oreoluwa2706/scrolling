import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/body.css";
import { useState, useEffect } from "react";

const Body = () => {
  {
    /** 
  const elementspan = document.querySelectorAll("span");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };
  const callbacks = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  };
  let observer = new IntersectionObserver(callbacks, options);
  elementspan.forEach((elementspan) => {
    observer.observe(elementspan);
  });
*/
  }
  return (
    <div className="myspan">
      <span num={1}>In </span>
      <span num2={2}>Chronicle </span>everything <span>is </span>
      <span>made </span>
      <br />
      <span>with </span>
      <span>Blocks </span>
      <span>that </span>
      <span>come </span>
      <span>with </span>
      <span>pixel </span>
      <br />
      <span>perfect </span>
      <span>design, </span>
      <span>interactivity </span>
      <span>and </span>
      <br />
      <span>motion </span>
      <span>out </span>
      <span>of </span>
      <span>the </span>
      <span>box. </span>
      <span>Instead </span>
      <span>of </span>
      <br />
      <span>designing </span>
      <span>from </span>
      <span>scratch, </span>
      <span>simply </span>
      <br />
      <span>choose </span>
      <span>the </span>
      <span>right </span>
      <span>one </span>
      <span>from </span>
      <span>our </span>
      <br />
      <span>library </span>
      <span>of </span>
      <span>blocks </span>
      <span>and </span>
      <span>see </span>
      <span>the </span>
      <br />
      <span>magic </span>
      <span>unfold. </span>
      <div>
        <p>learn java</p>
      </div>
    </div>
  );
};

export default Body;
