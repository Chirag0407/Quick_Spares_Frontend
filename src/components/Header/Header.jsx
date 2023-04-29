import React from 'react'
import {GiAutoRepair} from 'react-icons/gi'
import { NavLink } from "react-router-dom";
import './Header_Styles.css'

const Header = () => {
  return (
        <div className="container">
          <div className="name-icon-details">
            <div className="icon">
              <GiAutoRepair/>
            </div>
            <div className="customer_name">
              QuickSpares 
            </div>
          </div>
            <div className="links_container">
              <li>
                <NavLink
                  to="/Category"
                  className="NavLink"
                  role='button'
                >
                  Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Category"
                  className="NavLink"
                  role='button'
                >
                  Deals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Category"
                  role='button'
                >
                  Info
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Category"
                  role='button'
                >
                  Rating
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Category"
                  role='button'
                >
                  Contact
                </NavLink>
              </li>
              

            </div>
          
        </div>
  )
}

export default Header
