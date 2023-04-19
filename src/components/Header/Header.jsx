import React from 'react'
import {GiAutoRepair} from 'react-icons/gi'
import './Header_Styles.css'

const Header = () => {
  return (
        <div className="container">
            <div className="icon">
              <GiAutoRepair/>
            </div>
            <div className="customer_name">
              Deliver to Naman
            </div>
        </div>
  )
}

export default Header
