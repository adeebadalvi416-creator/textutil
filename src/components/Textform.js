import React,{useState}from 'react'

export default function Textform(props) {
    const[text,setText] = useState('enter you text here2')
    const handleUpClick =() =>{
        console.log("converted to upper case");
        setText("you have clicked on upper case")
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =() =>{
        console.log("converted to lower case");
        setText("you have clicked on lower case")
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnChange =(event) =>{
        console.log("converted to upper case");
        setText(event.target.value)
    }

  return (
    <>
    <div>   
    <div className="container">
        <h1>{props.heading}</h1>
<div className="mb-3">
<label htmlFor="myBox" className="form-label">Example textarea</label>
<textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2"onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary"onClick={handleLoClick}>Convert to lowerCase</button>
    </div>
    <div className="cntainer"my="3">
        <h1>Your text area</h1>
        <p>3424 words and {text.length}</p>
        <p>{text.split("  ").length}</p>
        <p>{0.008 * text.split("  ").length}minutes to read</p>
        <h2>Priview</h2>
        <p>{text}</p>
    </div>
    </div>
    </>
  )
}
