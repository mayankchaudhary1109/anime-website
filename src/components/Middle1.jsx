import React from 'react'
import Image from './image/gok.jpg'
import Image1 from './image/onne.jpg'
import Image2 from './image/nar.jpg'

export default function Middle1() {
  return (
<div className="col-sm-12 mt-4 mb-4">
  <div className="col-sm-11 mx-auto mt-4 mb-4">
<h1 className="text-center">Famouse Series</h1>
  </div>
   <div className="col-sm-12 mx-auto">
   <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start ">
          <div class="ms-2 me-auto">
            <div className=" headl fw-bold">One Piece</div>
            One Piece is written by Oda Sensei under Toei animation.
          </div>
          <span class="badge bg-primary rounded-pill">1065 sub</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div className=" headl fw-bold">Demon Slayer</div>
            Demon Slayer is written by Koyoharu Gotouge under studio Ufotable.
          </div>
          <span class="badge bg-primary rounded-pill">50 sub</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div className="headl fw-bold">Hell Paradise</div>
            Hell Paradise is written by Yuji Kaku in January 2018.
          </div>
          <span class="badge bg-primary rounded-pill"> 9 sub</span>
        </li>
      </ol>
   </div>
   <div className="col-sm-12 mt-4 mb-4"><h1 className='text-center'  style={{ fontSize: '55px', color: 'Black' }}>Best Series</h1></div>
    <div className="col-sm-11 mx-auto d-flex justify-content-between mt-4 mb-4">
      <div className="col-sm-4">
       
        <div className="col-sm-11 mx-auto">
          
          <img    style={{ width: '100%', height: '350px' }} src={Image}/>
          <div className="col-sm-12 border"> <h1 style={{ fontSize: '30px', color: 'Black' }}>One Piece</h1></div>
          </div></div>
      <div className="col-sm-4">
        <div className="col-sm-11 mx-auto">
       
        <img  src={Image1}   style={{ width: '100%', height: '350px' }}/>
        <div className="col-sm-12 border"> <h1 style={{ fontSize: '30px', color: 'Black' }}>Dragon Ball Z</h1></div>
       
          </div></div>
      <div className="col-sm-4 ">
        <div className="col-sm-11 mx-auto">
          
          <img src={Image2}   style={{ width: '100%', height: '350px' }}/>
          <div className="col-sm-12 border"> <h1 style={{ fontSize: '30px', color: 'Black' }}>Naruto</h1></div>
          </div></div>
    </div>
</div>
      
   
  )
}
