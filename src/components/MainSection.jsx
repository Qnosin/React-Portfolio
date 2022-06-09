import React from 'react'
import hacker from '../image/me.svg';
import ReactPic from '../image/reactjs-icon.svg';
import Sass from '../image/sass-lang-icon.svg';
import Html from '../image/w3_html5-icon.svg';
import Git from '../image/git-scm-icon.svg';
import Webpack from '../image/js_webpack-icon.svg';
import Npm from '../image/npmjs-ar21.svg';
import Redux from '../image/redux.svg';
import {motion} from 'framer-motion';
function MainSection({className}) {
  return (
    <main className={className}>
      <section>
         <h1>Hello I'm <span>Jakub</span> and I'm a <span>Front-End Web Developer</span></h1>
         <div>
          <motion.img animate={{scale:1}} initial={{scale:0}} src={hacker} transition={{type:'spring'}} alt='programing person'></motion.img>
          <motion.img animate={{y:0}} initial={{y:50}} transition={{type:'spring'}} className='otherPic' src={ReactPic} alt="React" />
          <motion.img animate={{y:0}} initial={{y:200}} transition={{type:'spring'}} className='otherPic Sass' src={Sass} alt="Sass" />
          <motion.img animate={{y:0,opacity:1}} initial={{y:200,opacity:0}} transition={{type:'spring'}}  className='otherPic Html' src={Html} alt="Html" />
          <motion.img animate={{y:0}} initial={{y:50}} transition={{type:'spring'}} className='otherPic Git' src={Git} alt="Git" />
          <motion.img animate={{y:0}} initial={{y:50}} transition={{type:'spring'}} className='otherPic webpack' src={Webpack} alt="webpack" />
          <motion.img animate={{y:0,opacity:1}} initial={{y:200,opacity:0}} transition={{type:'spring'}} className='otherPic Npm' src={Npm} alt="npm" />
          <motion.img animate={{y:0}} initial={{y:50}} transition={{type:'spring'}} className='otherPic redux ' src={Redux} alt="Redux" />
        </div>
        </section>
    </main>
  )
}

export default MainSection