import React from 'react'
import { Link } from "react-router-dom";
import arrow from '../assets/svg/arrow-right-light.svg'
import './components.css'

export default function LinkArrowLight(props) {
  return (
    <Link to={props.to}>
      <div className="LinkArrow LinkArrowLight">
          <h4>{props.text}</h4>
          <img src={arrow} alt="" srcset=""/>
      </div>
    </Link>
  )
}
