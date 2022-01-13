import React, {useState} from 'react'

export default function Textform(props) {
    const[text,setText] = useState('enter your text here man');
    const handleOnChange = (event)=>{
            setText(event.target.value);
    }
    

    const handleUpClick = ()=>{
      let newtext = text.toUpperCase();
      setText(newtext);
    }

    const handleReverse = ()=>{
        let newtext = text.split(" ");
        console.log(newtext);
        let fnal = newtext.reverse();
        setText(fnal);
    }
    console.log("printing the value of " + text);
    return (
        <>
        <div>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="input_area" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1"  onClick = {handleUpClick}>click here to convert into uppercase</button>
            <button className="btn btn-primary mx-1 " onClick = {handleReverse} >click here to reverse</button>
        </div>

        {/* <div className="container">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.0008*text.split(" ").length} Minutes read</p>
            <p>{text}</p>
        </div> */}
        </>

    )
}

