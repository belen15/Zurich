import React, {useState} from 'react';
import './App.css';
import Menu from './components/menu';
import items from './components/items.jsx';
import Categories from './components/categories';

const allCategories = ['all' , ...new Set (items.map((item)=>item.category))];
//Para hacer el menu dinamico, primero tengo que armar una variable que me traiga todos los valores UNA SOLA VEZ.
//Si hago **const allCategories = items.map((item)=>item.category))**, me va a traer todos los valores de categorias en la mimsma cantidad de veces que esta en el archivo, es decir que si tengo 3 elementos con la categoria breakfast se va a repetir 3 veces.
//Entonces defino la variable como un array, el primer valor es el 'all' que no es una categoria, y el segundo va a ser el map con new set ( que trae los valores solo una vez)

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categorias, setCategorias] = useState(allCategories);
  //Segundo: la variable creada anteriormente la pongo en un state
  //Tercero: paso esta const como prop para usarla en el archivo de categories(fila 32)
  //Cuarto: ver archivo categories
  const filterItems = (category) => {
    if (category === 'all'){
      setMenuItems(items);
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  };

  return (
    <main className="App">
      <section>
        <h2>Our menu</h2>
        <div className="linea"/>
      </section>
      <Categories filterItems={filterItems} categorias={categorias}/>
      <Menu items={menuItems}/>
    </main>
  ); 
}

export default App;
