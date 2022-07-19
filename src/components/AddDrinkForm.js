import React,{useState} from 'react'

function AddDrinkForm({onAddDrinkForm}) {
// const [ingredients, setingredients] = useState([])
const [formData, setformData] = useState({
    strDrink: "",
    strCategory: "",
    strInstructions: "", 
    strDrinkThumb: "",
    strIngredients: [],
    strMeasure: []
})

const handleChange = (e) => {
    const { name,  value} = e.target
    setformData((formData) => ({...formData, [name]: value}))
}



const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData),
    };
    fetch("http://localhost:4000/drinks", configObj)
    .then((resp) => resp.json())
    .then((data) => {
        onAddDrinkForm(data);
        setformData({
            strDrink: "",
            strCategory: "",
            strInstructions: "", 
            strDrinkThumb: "",
            strIngredients: [],
            strMeasure: [],
        });
    });
};

return (
<section>
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h2>Add Your Own Concoction</h2>

        <label htmlFor="strDrink">Name</label>
        <input
            className="search"
            type="text"
            id="strDrink"
            name="strDrink"
            onChange={handleChange}
            value={formData.strDrink}
        />

        <label htmlFor="strCategory">Category</label>
        <select
            className="search"
            name="strCategory"
            id="strCategory"
            onChange={handleChange}
            value={formData.strCategory}
        >
            <option value="Ordinart Drink">Ordinary Drink</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Shot">Shot</option>
            <option value="Coffee / Tea">Coffee / Tea</option>
            <option value="Punch / Party Drink">Punch / Party Drink</option>
        </select>
        
        <label htmlFor="strIngredients">Ingredients</label>
        <input
            className="search"
            type="text"
            id="strIngredients"
            name="strIngredients"
            onChange={handleChange}
            value={formData.strIngredients}
        />

        <label htmlFor="strMeasure">Measurements</label>
        <input
            className="search"
            type="text"
            id="strMeasure"
            name="strMeasure"
            onChange={handleChange}
            value={formData.strMeasure}
        />
 
        <label htmlFor="strInstructions">Instructions</label>
        <input
            className="search"
            type="text"
            id="strInstructions"
            name="strInstructions"
            onChange={handleChange}
            value={formData.strInstructions}
        />

        <label htmlFor="strDrinkThumb">Image</label>
        <input
            className="search"
            type="text"
            id="strDrinkThumb"
            name="strDrinkThumb"
            onChange={handleChange}
            value={formData.strDrinkThumb}
        />

        <button className="search" type="submit" >Add Drink</button>
    </form>
</section>
)
}

export default AddDrinkForm