import React from 'react';
import Record from './data.json';
const pagestyle =(steps,ctr)=>{
    return(
        <div className={`paintings${ctr}`}>
            {
              steps.map((index)=>{
                return(
                  <div className={`painting${ctr}`}>
                    <img src={Record[index].images.thumbnail} alt="" />
                    <div className="desc">
                      <h2 className="name">{Record[index].name}</h2>
                      <p className="artistnm1">{Record[index].artist.name}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
    )
    

}
export default pagestyle