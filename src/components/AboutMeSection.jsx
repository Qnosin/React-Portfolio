import React from 'react'
import Github from '../image/github-icon.svg';
import Linleding from '../image/linkedin-icon.svg';
import Picture from '../image/undraw_personal_info_re_ur1n.svg';
import {motion} from 'framer-motion';
function AboutMeSection({className}) {
  const handleGit = () =>{
    window.open('https://github.com/Qnosin', '_blank');
  }
  const handleLin = () =>{
    window.open('https://www.linkedin.com/in/jakub-putaj-531094216/', '_blank');
  }
  return (
    <section className={className}>
      <div className='wrapper'>
      <div>
        <h2>I'M Jakub and Technology is my passion, programming started to interest me when I was in first class of my It technical high school but until it, I was a passionate gamer who thinks computer is his future job. You can contact me on this social media platform:</h2>
      </div>
      <section className='images'>
      <div>
      <img className='Picture' src={Picture} alt="info" />
      </div>
        <div>
          <div className='github'>
          <motion.img animate={{rotate:360}}   transition={{type:'tween'}} onClick={handleGit} src={Github} alt='Github'></motion.img>
          <p>/Qnosin</p>
          </div>
          <motion.img animate={{rotate:360}}   transition={{type:'tween'}} onClick={handleLin} src={Linleding} alt="Linkedin" />
          <p>/jakub-putaj</p>
        </div>
        </section>
        </div>
    </section>
  )
}

export default AboutMeSection