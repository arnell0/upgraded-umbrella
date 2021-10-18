import React from 'react'
import { Link } from "react-router-dom";
import Restart from '../assets/svg/restart.svg'
import './components.css'

export default function RefreshButton(props) {
  return (
    <Link to={props.to} className="RefreshButton">
      <h2>{props.text}</h2>
      <img src={Restart} alt="" srcset=""/>
    </Link>
  )
}
