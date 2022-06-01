import React from 'react'
import gitFinder from '../image/Github Profile App.PNG';
import reactPhoto from '../image/reactjs-icon.svg';
import html from '../image/w3_html5-icon.svg';
import css from '../image/css3-plain.svg';
import GitHubButton from 'react-github-btn';
function ProjectFirst() {
  const handleClick = () =>{
    window.open('https://eloquent-raindrop-c31338.netlify.app', '_blank');
  }
  return (
    <div className='first__Project'>
          <img className='finder__project' src={gitFinder} alt='github finder app'></img>
          <div className='Project__desc'>
            <div className='project__title'>
                <p>Github Finder App</p>
                <p className='project__title__description'>Ahh finder, in this project i used fetch to display data</p>
            </div>
          <div className='created__with__desc'>
            <p>Created with: <img alt='react' src={reactPhoto}></img><img alt='html' src={html}></img><img alt='css' src={css}></img></p>
                <div className='buttons'>
                    <button onClick={handleClick}>🔴 Live</button>
                    <GitHubButton href="https://github.com/Qnosin/React-Github-Finder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-eye" aria-label="Watch Qnosin/React-Github-Finder on GitHub">Github</GitHubButton>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectFirst