import React from 'react'
import CollapseMini from '../CollapseMini/CollapseMini'
import { data } from '../../data.js'

function Collapse() {

  return (
    <div>
      {data.map((d) => {
        return <CollapseMini key={d.id} img={d.img} name={d.name} articles={d.articles} />
      })}
    </div>

  )
}

export default Collapse