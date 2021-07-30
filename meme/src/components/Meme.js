import React, { useState, useEffect } from "react"


export default function Meme({ top, bot, url }) {

    return (

        <div className="something text-center" height="500px" width="60%" style={{backgroundColor: "black"}}>
            <img src={url} alt="" width="60%" height="500px" />
            <div className="upper">
                <h1>{top}</h1>
            </div>

            <div className="lower">
                <h1>{bot}</h1>
            </div>
        </div>
    )
}