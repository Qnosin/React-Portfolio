import React from 'react'
import html from '../image/w3_html5-icon.svg';
import reactPhoto from '../image/reactjs-icon.svg';
import scss from '../image/sass-lang-icon.svg';
import firebase from '../image/firebase-icon.svg';
import GitHubButton from 'react-github-btn';
import shoesStoreApp from '../image/shoes store apps.PNG';
function ProjectThird() {
    const handleClick = () =>{
        window.open('https://darling-buttercream-a92fbe.netlify.app/', '_blank');
      }
  return (
    <div className='third__Project'>
    <img className='shoes__store__picture' src={shoesStoreApp} alt='Shoes Store'></img>
        <div className='Project__desc'>
            <div className='project__title'>
            <p>Shoes Store</p>
            <p className='project__title__description'>Full-Stack App created with Firebase and React </p>
        </div>
            <div className='created__with__desc'>
                <p>Created with: <img alt='react' src={reactPhoto}></img><img alt='html' src={html}></img><img alt='sass' src={scss}></img><img src={firebase} alt='firebase'></img></p>
                <div className='buttons'>
                    <button onClick={handleClick}>🔴 Live</button>
                    <GitHubButton href="https://github.com/Qnosin/React-Calculator" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-eye" aria-label="Watch Qnosin/React-Calculator on GitHub">Github</GitHubButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectThird