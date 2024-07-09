import React from 'react'

function Imageshowcase({data}) {
  return <>
  <div className="row g-0">
        <div className={data.class1} style={data.style}></div>
        <div className={data.class2}>
            <h2>{data.showtitle}</h2>
            <p className="lead mb-0">{data.showdesc}</p>
        </div>
    </div>
  </>
}

export default Imageshowcase
