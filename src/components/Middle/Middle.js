import React from 'react'
import './middle.css'
export default function Middle() {
  return (
    <>
    <div className='content2'>
      <div className='middle_left'>
        <div className='collect'>
        <p className='discover'>Discover<br/>Collect,& Sell<br/><span className='extra'>Extraordinary</span><br/>NFTs</p>
     </div>
     <div className='leading'>
      <p className='para'>the leading nFT marketplace on ethereum<br/>home to the next geeneration of digital creators.<br/>discover the best nFT collections.</p>
     </div>
     <div className='dabba'>
      <button className='explore'>explore</button>
      <button className='create_m'>create</button>
     </div>
     
      <div className='subscriber'>
        <div className='subs'>
        <div className='name_1'><img src="/image/image3.svg" alt="" id="k1"></img><h2 id='collections'>Collections</h2></div>
        <div className='name_2'><img src="/image/image4.svg" alt="" id="k2"></img><h2 id='artist'>Artist</h2></div>
        <div className='name_3'><img src="/image/image5.svg" alt="" id="k3"></img><h2 id='community'>Community</h2></div>
        </div>
      </div>
      </div>

      <div className='middle_right'>
        <div className='monkey_image'>
        {/* <img src="/image/image2.png" alt="" id="monkey"></img> */}
        </div>
      </div>
    </div>
    </>
  )
}
