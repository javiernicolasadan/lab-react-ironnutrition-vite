// src/App.jsx
import { useState } from 'react';
import './App.css'
import foodsJson from './foods.json'
import FoodBox from '/components/FoodBox';
import AddFoodForm from '../components/AddFoodForm';
import Search from '../components/Search';
import { Button, Row } from 'antd';
 

function App() {
  const [foodsVar, setFoodsVar] = useState(foodsJson);
   console.log(foodsVar) 
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
 /*  console.log(clicked) */

    const handleClick = () => {
       setClicked(!clicked)
  }

   return (
    <div className='App'>
      {/* <h2>Food List</h2>
      {foodsVar.map((eachFood, i) => (
        <div key={i}>
        <h3>{eachFood.name}</h3>
        <img src={eachFood.image} style={{width:"200px"}} alt='eachFood'/>
        </div>
      ))} */}
      {clicked? 
      <Button onClick={handleClick}>Add New Food </Button> 
      : 
      <>
        <Button onClick={handleClick}> Hide Form  </Button>
        <AddFoodForm
        setFoodsVar={setFoodsVar}
        foodsVar={foodsVar}
      />
      </>}


      

      <Search search={search} setSearch={setSearch}/>
      <h2>Food List</h2>

      <Row gutter={[16, 16]}>

      {foodsVar.length > 0 ? 
        <FoodBox
          foodsVar={foodsVar}
          search={search} setSearch={setSearch}
          setFoodsVar={setFoodsVar}
        /> 
        : <p>Oops! There is no more content to show.</p>
      }

      </Row>
    
    </div>) 
  
    
}
export default App
