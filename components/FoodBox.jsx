import { Button, Card, Col, Row } from "antd";

const FoodBox = ({foodsVar, search, setFoodsVar}) => {
    /* console.log(foodsVar) */
    const handleDelete = (theFood) => {
         /* console.log("the food", theFood.name) */ 
        const foodsVarFiltered = foodsVar.filter((eachFood) => {
            console.log(eachFood.name)
            return eachFood.name !== theFood.name
        })
        setFoodsVar(foodsVarFiltered)
    }
    return ( 
        <>
        <Row gutter={[16, 16]}>
            
            <Col>
                {foodsVar.filter((eachFood) => {
                    return eachFood.name.toLowerCase().includes(search.toLowerCase())
                })
                .map((eachFood, i)=> (
            <Card key={i}
                title={eachFood.name}
                style={{ width: 230, height: 300, margin: 10 }}
                >
                <img src={eachFood.image} height={60} alt="food" />
                <p>Calories: {eachFood.calories}</p>
                <p>Servings: {eachFood.servings}</p>
                <p>
                <b>Total Calories: {(eachFood.calories) * (eachFood.servings)} </b> kcal
                </p>
            <Button 
                type="primary" 
                onClick={() => {handleDelete(eachFood)}}> 
                Delete 
                </Button>
            </Card>
                ))}
            </Col>
        </Row>
        </>
     );
}
 
export default FoodBox;