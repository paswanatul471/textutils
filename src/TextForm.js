import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = () =>{
        // console.log("UpperCase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoclick = () =>{
        // console.log("UpperCase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowerrcase", "success");

    }
    const handleCopyclick = () =>{
        let allText = document.getElementById('myBox');
        allText.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(allText.value);
        props.showAlert("Copied to Clipboard ", "success");


    }
    const handleClrclick = () =>{
        // console.log("UpperCase was clicked"+ text);
        let newText = " ";
        setText(newText);
    }
    const handleOnChange =(event) =>{
        // console.log("Handle on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    
    
  return (
    <>
        <div className='container my-3 'style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2 className='mb-2'>{props.heading}</h2>
            <div className="mb-3">
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light' ? 'white' : '#153f61fc', color:props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpclick}>Convert To UpperCase</button>
                <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert To LowerCase</button>
                <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClrclick}>Clear</button>
                <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopyclick}>Copy Text</button>

            </div>
        </div>
        <div className="container my-3"style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text: "Nothing to preview"}</p>
        </div>
    </>
  )
}
