import React from 'react';
import '../App.css';

// Cuarto: paso la prop como parametro
// Quinto: para recorrer ese array uso el parametro.map
const Categories = ({categorias , filterItems}) => {
  return (
    <div className="btn-container">
      {categorias.map((category, index)=>{
        return (
          <button className="filter-btn " key={index} onClick={() =>
            filterItems(category)}>{category}
          </button>
        )
      })}
      
     
    </div>
  )
}

export default Categories
