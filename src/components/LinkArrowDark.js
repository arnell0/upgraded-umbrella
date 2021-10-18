import React from 'react'
import { Link } from "react-router-dom";
import arrow from '../assets/svg/arrow-right.svg'
import './components.css'

export default function LinkArrowDark(props) {
  return (
    <Link className="LinkArrowDark__wrapper" to={props.to}>
      <div className="LinkArrow LinkArrowDark">
          <p><span>{props.text}</span></p>
          <img src={arrow} alt="" srcset=""/>
      </div>
    </Link>
  )
}
