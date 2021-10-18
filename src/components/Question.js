import React, {useState, useEffect} from 'react'
import ScrollDown from './ScrollDown'


export default function Question(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="component__inner">
      <div className="component__inner__header">
      <div className="component__title">
        <h2>Fråga {props.question.id} av {props.questionsLang}</h2>
        <hr />
      </div>
      <h1> {props.question.title} </h1>
      </div>
      <span className="component__spacer" />
      <ScrollDown />
      <span className="component__spacer" />
      <div className="component__answers">
        {
          props.question && props.question.options.map((option, i) => (
            <RadioButton key={i} option={option} {...props} />
          ))
        }
      </div>
    </div>
  )
}


function RadioButton(props) {
  const [hover, setHover] = useState(false)

  const handleClick = score => {
    props.updateScore(score)
    window.scrollTo(0, 0)
  }

  return (
    <div className="RadioButton">
      <div className="RadioButton__outer" 
        onClick={() => handleClick(props.option.score)} 
        onTouchStart={() => setHover(true)}
        onTouchEnd={() => setHover(false)}
      >
        <div className={`RadioButton__inner ${hover ? "RadioButton__inner__hover--active":""}`}></div>
      </div>
      <div className="RadioButton__text">
        {props.option.option}
      </div>

      <span className="component__spacer" />
    </div>
  )
}
