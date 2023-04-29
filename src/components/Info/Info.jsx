import React from 'react'
import styled from 'styled-components'
const Info_Css=styled.div`
    .title{
        font-size: 4rem;
        color: #60fec9;
        font-weight: Bold;
        font-style: italic;
        padding: 1rem 1rem 1rem 1rem;
        text-align: center;
    }
    .content{
        padding: 2rem 2rem 3rem 3rem;
        font-size: 2rem;
        color: #fcffff;
        justify-content: center;
        display: flex;
        flex-direction: column;
        p{
            display: flex;
            justify-content: center;
        }
        
    }
`
const Info = () => {
  return (
    <Info_Css>
    <div>
      <div className="title">
        QuikSpares #No.1
      </div>
      <div className="content">
        <p>
      At QuikSpares, we pride ourselves on being the number one destination for all your spare parts needs. 
      Our extensive inventory of high-quality spare parts, combined with our expert customer service,
        makes us the go-to choice for businesses and individuals alike. Whether you need a replacement part for your car,
        truck, or industrial equipment, we have you covered with our wide selection of products and unbeatable prices.
         QuikSpares is the industry leader when it comes to providing high-quality spare parts at affordable prices.
      Our team of experienced professionals is committed to delivering exceptional customer service and ensuring that you 
      find exactly what you need for your equipment or machinery. We understand that downtime can be costly, 
      which is why we offer fast and reliable shipping options to get you the parts you need, when you need them.
       When it comes to spare parts, there is no one better than QuikSpares. Our commitment to quality, affordability, and customer satisfaction sets us apart from the competition. 
       We have built our reputation as the number one choice for businesses and individuals by providing a vast selection of top-quality parts, unbeatable prices, and exceptional customer service. 
       So why trust anyone else? Choose QuikSpare for all your spare parts needs and experience the difference that sets us apart.
    </p>
    <p>
    QuikSpares is more than just a spare parts supplier. We are your trusted partner in keeping your equipment running smoothly and efficiently.
     Our team of experts has decades of experience in the industry, and we understand the importance of quality, 
     reliability, and affordability. That's why we work tirelessly to source only the best spare parts from reputable manufacturers and offer them at unbeatable prices. 
     When you choose QuikSpares, you are choosing a company that puts its customers first. 
     We know that downtime can be costly, which is why we offer fast and efficient shipping options to ensure that you get your parts as quickly as possible.
      Our friendly and knowledgeable customer service team is always available to answer any questions you may have and help you find the parts you need.
       At QuikSpare, we are committed to providing a seamless and stress-free shopping experience. 
       At QuikSpares, we are constantly striving to improve our services and products to better serve our customers.
        We invest in the latest technology and training to ensure that we stay ahead of the curve in the ever-changing world of spare parts. Our goal is to make it easy and affordable for you to get the spare parts you need, when you need them. With QuikSpare, you can trust that you are getting the best value for your money and the highest quality spare parts available.
      </p>
      </div>
    </div>
    </Info_Css>
  )
}

export default Info
