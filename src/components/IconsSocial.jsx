import React from "react";
import "./IconsSocial.scss";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function IconsSocial() {
  return (
    <div className="iconContainer">
      <div className="iconWrap">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-linkedin"
            width="4rem"
            height="4rem"
            viewBox="0 0 22 22"
            strokeWidth="1.5"
            stroke="rgb(0,143,84)"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >

<filter id="myfilters">
              <feOffset
    dx='0'
    dy='0'
  />

  <feGaussianBlur
    stdDeviation='1'
    result='offset-blur'
  />


  <feComposite
    operator='out'
    in='SourceGraphic'
    in2='offset-blur'
    result='inverse'
  />
  

  <feFlood
    flood-color='black'
    flood-opacity='.95'
    result='color'
  />
  <feComposite
    operator='in'
    in='color'
    in2='inverse'
    result='shadow'
  />


  <feComposite
    operator='over'
    in='shadow'
    in2='SourceGraphic'
  /> </filter>
            <g filter="url(#myfilters)">
            <motion.path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            /> 
            <motion.rect
              x="4"
              y="4"
              width="16"
              height="16"
              rx="2"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.line
              x1="8"
              y1="11"
              x2="8"
              y2="16"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.line
              x1="8"
              y1="8"
              x2="8"
              y2="8.01"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.line
              x1="12"
              y1="16"
              x2="12"
              y2="11"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M16 16v-3a2 2 0 0 0 -4 0"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            </g>
          </svg>
        </a>
      </div>
      <div className="iconWrap">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-github"
            width="4rem"
            height="4rem"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g filter="url(#myfilters)">
            <motion.path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            /></g>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default IconsSocial;
