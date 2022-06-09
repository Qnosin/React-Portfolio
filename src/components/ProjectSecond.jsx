import React from 'react'
import calculator from '../image/calculator app.PNG';
import html from '../image/w3_html5-icon.svg';
import reactPhoto from '../image/reactjs-icon.svg';
import css from '../image/css3-plain.svg';
import GitHubButton from 'react-github-btn';
import {motion} from 'framer-motion';

function ProjectSecond() {
  const handleClick = () =>{
    window.open('https://inquisitive-douhua-bb72ca.netlify.app', '_blank');
  }
  return (
    <motion.div animate={{scale:1}} initial={{scale:0}} transition={{type:'tween'}} className='Second__Project'>
    <img src={calculator} alt='Calculator App'></img>
    <div className='Project__desc'>
        <div className='project__title'>
        <p>Calculator App</p>
        <p className='project__title__description'>Calculator, but with react-router to made it more interesting</p>
        </div>
        <div className='created__with__desc'>
            <p>Created with: <img alt='react' src={reactPhoto}></img><img alt='html' src={html}></img><img alt='css' src={css}></img></p>
            <div className='buttons'>
            <button onClick={handleClick}>🔴 Live</button>
            <GitHubButton href="https://github.com/Qnosin/React-Calculator" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-eye" aria-label="Watch Qnosin/React-Calculator on GitHub">Github</GitHubButton>
        </div>
    </div>
</div>
</motion.div>
  )
}

export default ProjectSecond