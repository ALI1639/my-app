import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('');
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase Letter", "success")
  }
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase Letter", "success")

  }
  const handleClearClick = () => {
    let newText = ""
    setText(newText)
    props.showAlert("Text Clear ho gya ha", "success")

  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert("Text copy!")
    props.showAlert("Text Copy ho gya ha", "success")

  }
  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ").trim();
    setText(newText);
    props.showAlert("Extra spaces remove ho gyi hain", "success");
  }


  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h1 className="my-4 " style={{ fontSize: '35px' }}> {props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#0b304b' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleloClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length === 0} className="btn btn-primary " onClick={handleCopyClick}>Copy text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text Summary</h1>
        <p>{text.trim().split(/\s+/).filter(word => word !== "").length} words and  {text.replace(/\s/g, "").length}characters</p>
        <p>{0.008 * text.trim().split("").filter(word => word !== "").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
