import React, { useState } from 'react'
import Text from './Text';

function CollapseNested({ articles }) {
    const [collapseMini, setCollapseMini] = useState(false);
    return (
        <div>
            <div className='box box-answer' >
                <div className="question">
                    <h4>fffff</h4>
                    <i className={collapseMini ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => { setCollapseMini(!collapseMini) }}></i>
                </div>
                {collapseMini && <Text text="ghhhh" />}
            </div>
            <div className='box box-answer' >
                <div className="question">
                    <h4>fffff</h4>
                    <i className={collapseMini ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => { setCollapseMini(!collapseMini) }}></i>
                </div>
                {collapseMini && <Text text="ghhhh" />}
            </div>
            <div className='box box-answer' >
                <div className="question">
                    <h4>fffff</h4>
                    <i className={collapseMini ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => { setCollapseMini(!collapseMini) }}></i>
                </div>
                {collapseMini && <Text text="ghhhh" />}
            </div>
        </div>
    )
}

export default CollapseNested