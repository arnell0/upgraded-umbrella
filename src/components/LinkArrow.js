import React from 'react'
import { Link } from "react-router-dom";
import arrow from '../assets/svg/arrow-right-light.svg'
import './components.css'

export default function LinkArrow (props) {
  return (
    <Link to={props.to}>
      <div className="LinkArrow LinkArrowBold">
          <h4>{props.text}</h4>
          <img src={arrow} alt="" srcset=""/>
      </div>
    </Link>
  )
}
