import React,{useState} from 'react'

function AddDrinkForm({onAddDrinkForm}) {
const [formData, setformData] = useState({
    strDrink: "",
    strCategory: "",
    strInstructions: "", 
    strDrinkThumb: "",
    strIngredients: "",
    strMeasure: ""
})

const handleChange = (e) => {
    const { name,  value} = e.target
    console.log(value)
    // setformData((formData) => ({...formData, [name]: value}))
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
    .then((project) => {
        onAddDrinkForm(project);
        setformData({
            strDrink: "",
            strCategory: "",
            strInstructions: "", 
            strDrinkThumb: "",
            strIngredients: [''],
            strMeasure: ['']
        });
    });
};

return (

        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add Your Own Concoction</h3>

        <label htmlFor="name">Name</label>
        <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={formData.strDrink}
        />

        <label htmlFor="instructions">Instructions</label>
        <input
        type="text"
        id="instructions"
        name="instructions"
        onChange={handleChange}
        value={formData.strInstructions}
        />

        <label htmlFor="category">Category</label>
        <select
        name="category"
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
        type="text"
        id="ingredients"
        name="ingredients"
        onChange={handleChange}
        value={formData.strIngredients}
        />

        <label htmlFor="measurements">Measurements</label>
        <input
        type="text"
        id="measurements"
        name="measurements"
        onChange={handleChange}
        value={formData.strMeasure}
        />

        <label htmlFor="image">Image</label>
        <input
        type="text"
        id="image"
        name="image"
        onChange={handleChange}
        value={formData.strDrinkThumb}
        />


        <button type="submit">Add Project</button>
    </form>

)
}

export default AddDrinkForm