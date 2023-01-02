import React, { useState } from "react"   
import './App.css'   
const dictionary = {
  "😇": "Smiling Face With Halo ",
  "😂": "Laugh",
  "😔": "sad",
  "😎": "cool",
  "😵": "confuse",
  "🥳": "celebration",
  "😁":"Happy",
    "😥":"Sad but Relieved",
    "😪":"Sleepy",
    "😓":"Downcast Face with Sweat"


}   


const emojis = Object.keys(dictionary)   
function App() {
  const [emoji, setemoji] = useState("")    
  const [meaning, setmeaning] = useState("translation will appear here.")   

  function changehandler(e) {
    const inputemoji = e.target.value   
    setemoji(inputemoji)   

    if (inputemoji in dictionary) {
      setmeaning(dictionary[inputemoji])   
    } else {
      setmeaning("fail to recognise this emoji")   
    }
  }

  function emojiclickhandler(inputemoji) {
    setmeaning(dictionary[inputemoji])   
  }
  return (
<div className="App">
      <h1>Emoticon Interpreter</h1>
      <input className="inputt"
        onChange={changehandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{ padding: "1rem",
  minWidth: "90%"}}
  
      />
      <h2> {emoji} </h2> 
      <h3> {meaning} </h3> 
      {

        emojis.map((emoji) => (
          <span key={emoji}
            onClick={() => emojiclickhandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            
            {emoji}
          </span>
        ))
      }
    </div>
  )   
}

export default App   
