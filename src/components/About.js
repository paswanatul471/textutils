import React from 'react'


export default function About(props) {
    let myStyle = {
        color: props.mode === 'light' ? '#042743':'white',
        backgroundColor: props.mode === 'light' ? 'white':'#0a304e'
    }

        document.title = "TextUtils-About"
    
    
    return (
        <div className='container' style={{color: props.mode === 'light' ? '#042743':'white'}}>
            
            <h2>About us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle}  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        TextUtils give a way to Analyze your text quickly and efficiently, Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body " style={myStyle}>
                            TextUtils is a free character counter tool that provide instant character coutn & word count stastics for a given text. TextUtils reports the number of the words and characters. Thus it is suitable for writing text with word/character limit. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser compatible</strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software work in any web browser such as Chrome, Firefox, Opera.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-2">
            <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btnText}</button>

            </div> */}
        </div>
    )
}
