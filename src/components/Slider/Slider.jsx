import React from 'react'
import img1 from '../../assets/oem/1200px-Hella_logo.svg.png'
import img2 from '../../assets/oem/Asset 5.png'
import img3 from '../../assets/oem/Denso-Logo.wine.png'
import img4 from '../../assets/oem/Valeo_Logo.svg (1).png'
import img6 from '../../assets/oem/asmnki5rn4uma1vzc0dg.png'
import img7 from '../../assets/oem/bosch.png'
import img8 from '../../assets/oem/download.jpeg'
import img9 from '../../assets/oem/images-1.png'
import img10 from '../../assets/oem/roots.jpg'
import img11 from '../../assets/oem/skf-logo-white.jpg'
import img12 from '../../assets/oem/spark minda.png'
import img13 from '../../assets/oem/unnamed.jpg'
import img14 from '../../assets/oem/uno minda.png'

import styled from 'styled-components'
const Slider_styles=styled.div`
    margin-top: 5rem;
    .container{
        padding: 2rem 2rem 2rem 2rem;
        display:flex;
        overflow-x:scroll;
        gap:5rem;
        background-color: white;
    
    }
    img{
            width:600px;
            height:100px;
        }
`

const Slider = () => {
  return (
    <Slider_styles>
    <div>
      <div className="container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        <img src={img11} alt="" />
        <img src={img12} alt="" />
        <img src={img13} alt="" />
        <img src={img14} alt="" />

      </div>
    </div>
    </Slider_styles>
  )
}

export default Slider
