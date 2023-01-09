import React from 'react'
import './card.css'

function Card({tab}) {
  return (
    <div className="cards">

      {tab.content.map(cont => (
        <div className="card">
          <div className="domain">
            <p>{cont.domain}</p>
          </div>
          <div className="price">
            <h4>${cont.price}/yr</h4>
            <p>Instead of ${cont.instead}/yr</p>
          </div>
          <div className="button">
            <button>Buy Now</button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Card