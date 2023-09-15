import { Divider, Input } from "antd";
import { useState } from "react";

const AddFoodForm = ({setFoodsVar, foodsVar}) => {

    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [calories, setCalories] = useState();
    const [servings, setServings] = useState();

    const handleSubmit = event => {
        event.preventDefault()
        setFoodsVar([...foodsVar, {name, image, calories, servings}])
        setName("")
        setImage("")
        setCalories(null)
        setServings(null)
        console.log(foodsVar)
        
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={name} type="text" onChange={event => {setName(event.target.value)}} />

            <label>Image</label>
            <Input value={image} type="text" onChange={event => {setImage(event.target.value)}} />

            <label>Calories</label>
            <Input value={calories} type="number" onChange={event => {setCalories(event.target.value)}}/>

            <label>Servings</label>
            <Input value={servings} type="number" onChange={event => {setServings(event.target.value)}}/>
            <br></br>
            <button type="submit">Create</button>
        </form>
     );
}
 
export default AddFoodForm;