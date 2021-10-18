import React from 'react'
import { Link } from "react-router-dom";
import './components.css'

export default function LinkButton(props) {
  return (
    <Link className="LinkButton__wrapper" to={props.to}>
      <div className="LinkButton">
          <h2>{props.text}</h2>
      </div>
    </Link>
  )
}
