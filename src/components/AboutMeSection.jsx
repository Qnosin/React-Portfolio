import React from 'react'
import Github from '../image/github-icon.svg';
import Linleding from '../image/linkedin-icon.svg';
import Picture from '../image/undraw_personal_info_re_ur1n.svg';
function AboutMeSection({className}) {
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
          <img src={Github} alt='Github'></img>
          <p>/Qnosin</p>
          </div>
          <img src={Linleding} alt="Linkedin" />
          <p>/jakub-putaj</p>
        </div>
        </section>
        </div>
    </section>
  )
}

export default AboutMeSection