import React from 'react'
import hacker from '../image/me.svg';
import ReactPic from '../image/reactjs-icon.svg';
import Sass from '../image/sass-lang-icon.svg';
import Html from '../image/w3_html5-icon.svg';
import Git from '../image/git-scm-icon.svg';
import Webpack from '../image/js_webpack-icon.svg';
import Npm from '../image/npmjs-ar21.svg';
import Redux from '../image/redux.svg';
function MainSection({className}) {
  return (
    <main className={className}>
      <section>
         <h1>Hello I'm <span>Jakub</span> and I'm a <span>Front-End Web Developer</span></h1>
         <div>
          <img src={hacker} alt='programing person'></img>
          <img className='otherPic' src={ReactPic} alt="React" />
          <img className='otherPic Sass' src={Sass} alt="Sass" />
          <img className='otherPic Html' src={Html} alt="Html" />
          <img className='otherPic Git' src={Git} alt="Git" />
          <img className='otherPic webpack' src={Webpack} alt="webpack" />
          <img className='otherPic Npm' src={Npm} alt="npm" />
          <img className='otherPic redux ' src={Redux} alt="Redux" />
        </div>
        </section>
    </main>
  )
}

export default MainSection