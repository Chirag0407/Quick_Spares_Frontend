import React from 'react'
import styled from 'styled-components'
import Footer_Col from './Footer_Col';
const ColStyle=styled.div`
    .container{
        margin-top:3rem;
        display:flex;
        justify-content: center;
        gap: 3rem;
        align-items: center;
        .main{
          .title{
            font-size: 3rem;
            font-style: italic;
            font-weight:bold;
          }
          .subscript{
            font-size: 1.5rem;
            font-style: italic;
            font-weight:bold;
          }
        }

    }
    
`;
const Footer = () => {
  return (
    <ColStyle>
    <div>
        <div className="container">
            <div className="main">
              <div className="title">
                  QuickSpares
              </div>
              <div className="subscript">
                  Here you can use QuikSpares to purchase your product
              </div>
            </div>
            <div className="Products">
                <Footer_Col
                   heading='Important Links'
                   links={[
                       {
                           title:"Home",
                           path:'/',
                           type:"Link",
                       },
                       {
                           title:"About",
                           path:'/About',
                           type:"Link",
                       },
                       {
                           title:"Project",
                           path:'/Project',
                           type:"Link",
                       },
                   ]}
                />
            </div>
            <div className='Contact'>
                  <Footer_Col
                      heading="Contact Info"
                      links={[
                          {
                              title:"+918855900269",
                              path:"+918855900269"
                          },
                          {
                              title:"chiragbamb@gmail.com",
                              path:"chiragbamb@gmail.com"
                          },
                          {
                              title:"Nagpur,India",
                              path:"+9188559"
                          }
                      ]}
                  />
            </div>
            <div className="social_links">
                <Footer_Col
                  heading="Social Links"
                  links={[
                      {
                          title:"Linked in",
                          path:"https://www.linkedin.com/in/chirag-bamb-64889521b/"
                      },
                      {
                          title:"Instagram",
                          path:"https://www.instagram.com/chirag.bamb/"
                      },
                      {
                          title:"Facebook",
                          path:"https://www.facebook.com/chirag.bamb"
                      }
                  ]}  
                />
            </div>
        </div>
    </div>
    </ColStyle>
  )
}

export default Footer
