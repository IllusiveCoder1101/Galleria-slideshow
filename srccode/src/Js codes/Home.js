import React from 'react'
import {useState,useEffect} from 'react'
import pagestyle from './pagestyle';
const Home = () => {
  const [width,setWidth]=useState(window.innerWidth);
  const resize=()=>{
    setWidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize',resize);
    return()=>{
      window.removeEventListener('resize',resize);
    }
  })
  if(width<450){
    return(
      <div className="container">
        {pagestyle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],0)}
      </div>
    )
      }
    else if(width>=450 && width<1024){
      return(
        <div className='container1'>
          {pagestyle([0,2,4,6,8,11,13],1)}
          {pagestyle([1,3,5,7,9,10,12,14],1)}
        </div>
      )
    }
    else{
      return(
        <div className="container2">
          {pagestyle([0,4,8,11],3)}
          {pagestyle([1,5,9,12],3)}
          {pagestyle([2,6,13],3)}
          {pagestyle([3,7,10,14],3)}
        </div>
      )
    }
  }

export default Home