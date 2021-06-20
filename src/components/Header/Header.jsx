import React from 'react'
import './Header.css'
import HeaderImg from './Header.svg'

const Header = ({ headTitle, headerExpand }) => {
    return (
        <div className="head-container">
            <img src= {HeaderImg}  className={`head-image ${headerExpand? 'head-image-expand':'head-image-contract'}`} />
            
            <h1 className={`head-text ${headerExpand? 'head-text-expand':'head-text-contract'}`}>{headTitle}</h1>
            
        </div>
    )
}

export default Header
