import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function SlidingText() {

    const infiniteSlide = {
        hidden: {
          x: -80,
        },
        visible: {
          x: 2000,
          transition: {
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          },
        },
      };
      

  return (
    <div>
        <motion.span className="slidingText" variants={infiniteSlide}  initial="hidden" animate="visible">
        <button>Experience</button>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
            <li>Skills</li>
          </Link>
          <Link to="future" spy={true} smooth={true} offset={-50} duration={500}>
            <li>Hobbys</li>
          </Link>
        </motion.span>
    </div>
  )
}

export default SlidingText