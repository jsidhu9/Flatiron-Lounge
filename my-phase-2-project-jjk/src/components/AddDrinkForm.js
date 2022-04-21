import React,{useState} from 'react'

function AddDrinkForm({onAddDrinkForm}) {
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
    .then((drink) => {
        onAddDrinkForm(drink);
        setformData({
            strDrink: "",
            strCategory: "",
            strInstructions: "", 
            strDrinkThumb: "",
            strIngredients: [],
            strMeasure: [],
        });
    });
    console.log(formData)
};

return (
<section>
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h2>Add Your Own Concoction</h2>

        <label htmlFor="name">Name</label>
        <input
        className="search"
        type="text"
        id="name"
        name="strDrink"
        onChange={handleChange}
        value={formData.strDrink}
        />

        <label htmlFor="category">Category</label>
        <select
        className="search"
        name="strCategory"
        id="category"
        onChange={handleChange}
        value={formData.strCategory}
        >
        <option value="Ordinart Drink">Ordinary Drink</option>
        <option value="Cocktail">Cocktail</option>
        <option value="Shot">Shot</option>
        <option value="Coffee / Tea">Coffee / Tea</option>
        <option value="Punch / Party Drink">Punch / Party Drink</option>
        </select>

        <label htmlFor="ingredients">Ingredients</label>
        <input
        className="search"
        type="text"
        id="ingredients"
        name="strIngredients"
        onChange={handleChange}
        value={formData.strIngredients}
        />

        <label htmlFor="measurements">Measurements</label>
        <input
        className="search"
        type="text"
        id="measurements"
        name="strMeasure"
        onChange={handleChange}
        value={formData.strMeasure}
        />
 
        <label htmlFor="instructions">Instructions</label>
        <input
        className="search"
        type="text"
        id="instructions"
        name="strInstructions"
        onChange={handleChange}
        value={formData.strInstructions}
        />

        <label htmlFor="image">Image</label>
        <input
        className="search"
        type="text"
        id="image"
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