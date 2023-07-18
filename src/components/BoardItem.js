import React from 'react'
import '../assets/css/BoardItem.css'
import { Link } from 'react-router-dom'
export default function Board(props) {
  return (
    <div className='hm-pb' key={props.data.id}>
    <div className='hm-pbf' 
    style={{backgroundColor:props.data.boardColor}}>
    </div>
    <div className='hm-pbs'>
  <Link to={`board/${props.data.id}`} >
    {props.data.boardName}
    </Link>
    </div>
    </div>  )
}
