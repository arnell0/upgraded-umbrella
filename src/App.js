import './App.css';
import pdi__light from './assets/svg/pdi__light.svg'
import pdi__dark from './assets/svg/pdi__dark.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import LinkButton from './components/LinkButton'
import LinkArrowLight from './components/LinkArrowLight'
import LinkArrowDark from './components/LinkArrowDark'
import LinkArrow from './components/LinkArrow'
import Question from './components/Question'
import ScrollDown from './components/ScrollDown'
import RefreshButton from './components/RefreshButton'


import { questions } from './assets/data/questions'
import { ha } from './assets/data/results'

import { useState, useEffect } from 'react'


function Start() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="component__wrapper">
      <div className="component__background">
        <div className="component__inner">
          <div className="component__inner__header">
            <h1>VILKEN TYP AV INGENJÖR ÄR DU?</h1>
            <span className="component__spacer" />
            <LinkButton text="starta test" to="/questions" />
            <span className="component__spacer" />
            <LinkArrowLight text="läs mer om utbildningarna" to="/" />
            <span className="component__spacer" />
          </div>
        </div>
      </div>
      <div className="component__footer">
      </div>
    </div>
  );
}

function Questions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const history = useHistory();

  const [score, setScore] = useState({
    en: 0,
    ha: 0,
    it: 0,
    bi: 0,
    ma: 0,
    sa: 0,
    pr: 0,
  });
  const [qid, setQid] = useState(0);

  const incrementQid = () => setQid(qid + 1)

  const updateScore = addScore => {
    var newScore = {...score};
    var newScoreKeys = Object.keys(newScore);
    var newScoreValues = Object.values(newScore);
    var addScoreValues = Object.values(addScore);
    
    newScoreValues.map((num, i) => (
      newScore[newScoreKeys[i]] = num += addScoreValues[i]
    ));

    setScore(newScore);

    if(qid === questions.length - 1) history.push("/results");
    incrementQid();
  }

  return (
    <div className="component__wrapper">
      <div className="component__background">
        <Question question={questions[qid]} questionsLang={questions.length} updateScore={updateScore} />
      </div>
      <div className="component__footer">
      </div>
    </div>
  );
}

function Results() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="component__wrapper">
      <div className="component__background">
        <div className="component__inner">
          <div className="component__title">
            <h2>Ditt område:</h2>
          </div>
          <div className="component__inner__header">
            <h1>{ ha.title }</h1>
            <span className="component__spacer--small" />
            <div className="component__text">
              { ha.text }
            </div>
            <span className="component__spacer--small" />
            <div className="component__text component__text--end">
              Dessa program passar kanske dig:
            </div>
          </div>

          <span className="component__spacer" />
          <ScrollDown />
          <span className="component__spacer" />
          <div className="component__answers">
            {
              ha.links.map((link, i) => (
                <div className="component__answer" key={i}>
                  <div className="component__answer--inner">
                    <LinkArrow text={link.title} to={link.link} />
                  </div>
                </div>
              ))
            }
            <RefreshButton to="/" text="Gör testet igen" />
          </div>
        </div>
      </div>

      <span className="component__spacer" />
      <div className="component__footer">
        <div className="component__endtext">
          <div className="component__endtext--title">
            Psst! Känner du inte igen dig? 
          </div>
          <p>
          Testet är bara ett inspirerande och kul sätt att
          se vilken ingenjörsutbildning som skulle kunna
          passa dig.
          </p>          
          <LinkArrowDark text="läs mer om alla våra ingenjörsutbildningarna" to="/" />
        </div>
      </div>
    </div>
  );
}


export default function App() {

  return (
    <Router>
      <div className="wrapper__switch">
        <div className="wrapper__pillar">
          <div className="pillar">
            <Link to="/">
              <img className="pillar__logo" src={pdi__light} alt="pillar-logo" />
            </Link>
          </div>
        </div>

        <Switch>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>

        <footer>
          <img className="footer__logo" src={pdi__dark} alt="footer-logo" />
        </footer>
      </div>
    </Router>
  );
}
