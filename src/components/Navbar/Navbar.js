import React from 'react'
import './navbar.css'
export default function Navbar() {

  return (
    <>
    <div className='content1'>
    
       <div className='nav'>
           <div className='nav1'>
        <img src="/image/img1.svg" alt="" id="star1"></img>
        <h2 id='endft'>endft</h2>
        </div>
         <div className='nav2'>
          <h6 className='market'>marketplace</h6>
          <h6 className='collection'>collection</h6>
          <h6 className='community'>community</h6>
          <h6 className='create'>create</h6>
        <button class='wallet' >connect Wallet</button>
         </div>
       </div>
       </div>
    </>
  
  )

}
