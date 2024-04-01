import React from 'react'
import './highlight.css'
import g from '../../../Assets/gift.jpg'
import i from '../../../Assets/inno.jpg'
import c from '../../../Assets/cms.jpg'
import a from '../../../Assets/arc.jpg'
import h from '../../../Assets/holi.jpg'
import b from '../../../Assets/build.jpg'
// import drama from '../../../Assets/fpaint.jpg'

const Highlight = () => {
  return (
    <div>
      
	<div class="main">
    <h1>Last Year Highlights</h1>
    <p>Here Are Our Some Glimpses:-</p>
    <div class="gallery">
        <div class="img">
            <img src={c} alt='c' loading="lazy" />
        </div>
        <div class="img">
            <img src={g} alt='g' loading="lazy"/>
        </div>
        <div class="img">
            <img src={i} alt='i' loading="lazy" />
        </div>
        <div class="img">
            <img src={a} alt='a' loading="lazy"/>
        </div>
        <div class="img">
            <img src={h} alt='h' loading="lazy"/>
        </div>
        <div class="img">
            <img src={b} alt='b' />
        </div>
       
        
    </div>
</div>
    </div>
  )
}

export default Highlight;