import {AppContainer} from './components/styles/Container.style';
import {GlobalStyles} from './components/styles/GlobalStyles';
import {HeaderStyled} from './components/styles/Header.style';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Projects from './pages/Projects';
function App() {
  return (
    <AppContainer>
      <GlobalStyles/>
      <Router>
      <HeaderStyled/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/aboutme' element={<AboutMe />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
