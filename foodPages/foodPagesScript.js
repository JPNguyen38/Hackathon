// Retrieve the dish data from localStorage
const dishData = JSON.parse(localStorage.getItem('selectedDish'));

// Check if dishData is not null
if (dishData) {
    const dishDetails = `
        <div class="roboto-slab-title">
            <h1 class="dish-name">${dishData.name}</h1>
            <img src="${dishData.image2}" alt="${dishData.name}" />
            <p class="dish-country">Country: ${dishData.country}</p>
            <p class="dish-prep-time">Preparation Time: ${dishData.prepTime} minutes</p>
            <p class="dish-description">Description: ${dishData.description}</p>
            <p class="dish-nutrition">Nutritional Info: ${dishData.nutrition}</p>
            <p class="dish-allergies">Allergies: ${dishData.allergies}</p>
        </div>
        <div class="additional-info">
            <div class="recipes-section">
                <h3>Recipes for ${dishData.name}</h3>
                <div class="button-container">
                    <button onclick="window.location.href='${dishData.recipe1}';" class="addButton">
                        <img src="${dishData.recipeImg1}" alt="Recipe 1" />
                    </button>
                    <button onclick="window.location.href='${dishData.recipe2}';">
                        <img src="${dishData.recipeImg2}" alt="Recipe 2" />
                    </button>
                </div>
            </div>
            <div class="restaurants-section">
                <h3>Restaurants that serve ${dishData.name}</h3>
                <div class="button-container">
                    <button onclick="window.location.href='${dishData.resturant1}';">
                        <img src="${dishData.resturantImg1}" alt="Restaurant 1" />
                    </button>
                    <button onclick="window.location.href='${dishData.resturant2}';">
                        <img src="${dishData.resturantImg2}" alt="Restaurant 2" />
                    </button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('dishDetails').innerHTML = dishDetails;
} else {
    document.getElementById('dishDetails').innerHTML = '<p>No dish data found.</p>';
}
