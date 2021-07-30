import React, {useEffect, useState} from "react"

export default function Formf({top, bot, setTop, setBot, setUrl}) {

    
  const apiUrl =  "https://api.imgflip.com/get_memes"
  const [arr, setArr] = useState([])

    useEffect(()=>{

        fetch(apiUrl)
    .then((res)=>res.json())
    .then(data=>setArr(data.data.memes))

    }, [])

    const genNum = (e) => {

        e.preventDefault()
        const num = Math.floor(Math.random() * arr.length)
        setUrl(arr[num].url)
        console.log(arr[num].url)
    }

    return(
        <div className="wrapper">
        <form onSubmit={genNum}>
          <input
            placeholder="Enter Top Line"
            name="top"
            value={top}
            onChange={e => setTop(e.target.value)}

          />
          <input
            placeholder="Enter Bottom Line"
            name="bot"
            value={bot}
            onChange={e=> setBot(e.target.value)}
            
          />
          <button type="submit" className="gen">Generate</button>
        </form>
        
        </div>
    )
}