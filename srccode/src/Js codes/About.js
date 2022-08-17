import React, {useState} from 'react'

import Record from '../data.json';
import {IoPlaySkipBackOutline,IoPlaySkipForwardOutline} from 'react-icons/io5'

const About = () => {
  const [ctr,setCtr]=useState(0);
  const [visible,setVisible]=useState(false)

  return (
    <div>
      <div className="slides">

        <button type="button" className="view" 
          onClick={()=>setVisible(true)}>
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fill-rule="nonzero">
          <path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/>
          </g></svg> 
           VIEW IMAGE
        </button>

        {(visible)?
        <div className="zoomedcont">
          <button type="button" onClick={()=>setVisible(false)} className="close">CLOSE</button>
          <img src={Record[ctr].images.thumbnail} alt="" className="vwimg" />
        </div>:<></>
        }
        <div className="hero">

          <img src={Record[ctr].images.hero.small} alt="" className="paints" />

          <div className="brief">

            <div className="abtpaint">
              <h2 className="nmofpaint">{Record[ctr].name}</h2>
              <p className="artistnm">{Record[ctr].artist.name}</p>
            </div>

            <img src={Record[ctr].artist.image} alt="" className="artistimg"/>

          </div>
          
        </div>
   
       
        
        <div className="description">

          <h1 className="year">{Record[ctr].year}</h1>
          <p className="bio">{Record[ctr].description}</p>
          <a href={Record[ctr].source} className="link3">GO TO SOURCE</a>

        </div>

      </div>

      <footer>

        <div className="progress" style={{height:"1rem",textAlign:"left"}}>

          <h2 style={{backgroundColor:"black",width:`${(ctr+1)*7.1}%`,height:"0.2rem",marginLeft:"-2rem"}}>-</h2>

        </div>


        <div className="bottom">

          <div className="text">

            <h3>{Record[ctr].name}</h3>
            <p>{Record[ctr].artist.name}</p>

          </div>

          <div className="buttons">

            <button disabled={(ctr===0)?true:false} 
              type="button" onClick={()=>setCtr(ctr-1)} className={(ctr===0)?"btn1 inactive":"btn1"}>
              <IoPlaySkipBackOutline/>
            </button>

            <button disabled={(ctr===Record.length-1)?true:false} 
              type="button" onClick={()=>setCtr(ctr+1)} className={(ctr===Record.length-1)?"btn2 inactive":"btn2"}>
              <IoPlaySkipForwardOutline/>
            </button>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default About