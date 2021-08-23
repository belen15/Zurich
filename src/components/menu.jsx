import React from 'react'
import './menu.css'

const Menu = ({items}) => {
  
  return (
    <div className="row section-center d-flex m-0">
      {items.map((menuItem)=>(
        <article key={menuItem.id} className="col-12 col-xl-6 p-4 menu-item d-flex justify-content-start ">
          <img src={menuItem.image} alt={menuItem.title} className="photo"/>
          <div className="item-info w-100 px-3">
            <header className=" d-flex title justify-content-between pt-1  ">
              <h3 className="fw-bolder fs-6">{menuItem.title}</h3>
              <h5 className="price fs-6">${menuItem.price}</h5>
            </header>
            <p className="item-text fw-lighter text-start mt-2">{menuItem.desc}</p>

          </div>
         
         
        </article>)
)}
      
    </div>
  )
}

export default Menu
