import React, {useState, useEffect} from "react"


export default function Meme({top, bot, url}) {    

    return(
        


   <div className="something" height="500px" width="600px">
          <img src={url} alt="" width="600px" height="500px"/>
          <div className="upper">
            <h2>{top} </h2>
          </div>

          <div className="lower">
            <h2>{bot}</h2>
          </div>
        </div>
    )
}