import React, { useState } from 'react'
import Text from './Text'
import './collapseMini.css'

function CollapseMini({ img, name, articles }) {
 
    const [collapse, setCollapse] = useState(false);

    const [collapse1, setCollapse1] = useState(false);
    const [collapse2, setCollapse2] = useState(false);
    const [collapse3, setCollapse3] = useState(false);
    const [collapse4, setCollapse4] = useState(false);

    //when button is clicked to open or close the content
    const showText = () => setCollapse(!collapse);


    return (
        <div className='content-box'>
            
            {!img &&
                <div className='box'>
                    <div className="question">
                        <h4>{articles[0].question}</h4>
                        <i className={collapse ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={showText}></i>
                    </div>
                    {collapse ? <Text text={articles[0].answer} /> : null}
                </div>
            }
            {img &&
                <div className='box box-big'>
                    <div className='box-header'>
                        <div className="question">
                            <div className='header'>
                                <i className={img}></i>
                                <div className='description'>
                                    <h3>{name}</h3>
                                    <p>4 articles in this topic!</p>
                                </div>
                            </div>
                            <i className={collapse ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => setCollapse(!collapse)}></i>
                        </div>
                    </div>

                    
                    {collapse &&
                        <div className='collapsed-answer'>
                            <div className='box-answer' key={1}>
                                <div className="question">
                                    <h4>How does Parkname seperate itself from other domain parking companies?</h4>
                                    <i className={collapse1 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => { setCollapse1(!collapse1) }}></i>
                                </div>
                                {collapse1 && <Text text={"Your domains are a valuable property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio."} />}
                            </div>
                            <div className='box-answer' key={2}>
                                <div className="question">
                                    <h4>Is Parkname Parking actually free? </h4>
                                    <i className={collapse2 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => { setCollapse2(!collapse2) }}></i>
                                </div>
                                {collapse2 && <Text text={"No it's a cheap price."} />}
                            </div>
                            <div className='box-answer' key={3}>
                                <div className="question">
                                    <h4>What you do?</h4>
                                    <i className={collapse3 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => { setCollapse3(!collapse3) }}></i>
                                </div>
                                {collapse3 && <Text text={"Working on projects."} />}
                            </div>
                            <div className='box-answer' key={3}>
                                <div className="question">
                                    <h4>When was Parkname first founded?</h4>
                                    <i className={collapse4 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => { setCollapse4(!collapse4) }}></i>
                                </div>
                                {collapse4 && <Text text={"29th January 2020."} />}
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default CollapseMini