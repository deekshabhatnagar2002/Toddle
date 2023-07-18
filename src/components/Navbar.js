import React from 'react'
import "../assets/css/Navbar.css"
import { useSelector } from 'react-redux'
import {actionCreators} from '../state/index'
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import {Link} from "react-router-dom"
export default function Navbar() {
    
    const [search ,setSearch]=useState();
    const dispatch=useDispatch();
    const {tooglePop}=bindActionCreators(actionCreators,dispatch);
  return (   
    <div className="navbar">
    <div className="logo">
      <Link to="">
        <img src={require('../assets/img/logo.jpeg')} alt="Logo"/>
        </Link>
    </div>
    <form   action={`/search/${search}`}>
    <input type="search" className="search-bar" placeholder="Search" 

    onChange={(e)=>{setSearch(e.target.value)}}
    />
    </form>
    <button className="create-button"
    onClick={(e)=>{tooglePop(1)}}
    >+ Create Board</button>
  </div>
  )
}
