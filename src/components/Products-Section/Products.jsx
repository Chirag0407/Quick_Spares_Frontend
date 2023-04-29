import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/parts/Body.png'
import img2 from '../../assets/parts/Engine.png'
import img3 from '../../assets/parts/Fasteners.png'
import img4 from '../../assets/parts/Filters.png'
import img5 from '../../assets/parts/Lubrication_Hydraulics.png'
import img6 from '../../assets/parts/Suspension.png'
import img7 from '../../assets/parts/Windshield.png'
import img8 from '../../assets/parts/car_accessory-icon-particular-12.png'
import img9 from '../../assets/parts/lights.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import {Navigation} from 'swiper'

const Product_css=styled.div`
    .product-container{
        
        margin-top: 3rem;
        display:flex;
        gap: 3rem;
        flex-wrap: wrap;
        justify-content:center;
        cursor: pointer;
            
        .swiper{
            /* width: 80%; */
            padding: 1rem 1rem ;
            .swiper-wrapper{
               .swiper-slide{
                 display: flex;
                 justify-content: center;
               }
            }
            .swiper-button-prev,
            .swiper-button-next{
                align-items: center;
                background-color: rgb(241, 72, 72);    
                border-radius: 8rem;
                position: absolute;
                width: 50px;
                height: 60px;
                color: black;
                align-self: center;
            }
            
        }
        
        .product-item{
            .item-image{
                width: 100px;
                padding-bottom: 1rem;
            }
            &:hover{
                transform: scale(1.1); 
            }
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-style: italic;
            font-weight:bold;
            height: 200px;
            width: 200px;
            border-radius: 20px;
            background-color: #f7efef;
        }
    }
    
`
const Products = () => {
  return (
    <>
    <Product_css>
      <div className="product-container">
        <Swiper
            slidesPerView={5}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
            <div className="product-item">
                <div className="item-image">
                    <img src={img1} alt="" />
                </div>
                Body
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="product-item">
                <div className="item-image">
                    <img src={img2} alt="" />
                </div>
                Engine
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="product-item">
                <div className="item-image">
                    <img src={img3} alt="" />
                </div>
                Fasteners
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="product-item">
                <div className="item-image">
                    <img src={img4} alt="" />
                </div>
                Filter
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="product-item">
                <div className="item-image">
                    <img src={img5} alt="" />
                </div>
                Lubricants
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="product-item">
                <div className="item-image">
                    <img src={img6} alt="" />
                </div>
                Suspention
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="product-item">
                <div className="item-image">
                    <img src={img7} alt="" />
                </div>
                WindShield
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="product-item">
                <div className="item-image">
                    <img src={img8} alt="" />
                </div>
                Accessory
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="product-item">
                <div className="item-image">
                    <img src={img9} alt="" />
                </div>
                Lights
            </div>
            </SwiperSlide>
        </Swiper>
      </div>
      </Product_css>
    </>
  )
}

export default Products
