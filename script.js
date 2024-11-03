class Dish {
    constructor(name, country, prepTime, servings, ingredients, description, nutrition, allergies, image, month, image2, continent, recipeImg1, recipeImg2, recipe1, recipe2, resturantImg1, resturantImg2, resturant1, resturant2) {
        this.name = name;
        this.country = country;
        this.prepTime = prepTime;
        this.servings = servings;
        this.ingredients = ingredients;
        this.description = description;
        this.nutrition = nutrition;
        this.allergies = allergies;
        this.image = image;
        this.month = month;
        this.image2 = image2;
        this.continent = continent;
        this.recipeImg1 = recipeImg1;  
        this.recipeImg2 = recipeImg2;  
        this.recipe1 = recipe1;  
        this.recipe2 = recipe2;  
        this.resturantImg1 = resturantImg1;  
        this.resturantImg2 = resturantImg2;  
        this.resturant1 = resturant1;  
        this.resturant2 = resturant2;  
    }
    
    generateHTML() {
        const newName = this.name.toLowerCase().replace(/ /g, '-');
        console.log(this);
        return `
        <div class="food-item" onclick="setDishData('${this.name}', '${this.country}', '${this.prepTime}', '${this.description}', '${this.nutrition}', '${this.allergies}', '${this.image}', '${this.image2}', '${this.continent}', '${this.recipeImg1}', '${this.recipeImg2}', '${this.recipe1}', '${this.recipe2}', '${this.resturantImg1}', '${this.resturantImg2}', '${this.resturant1}', '${this.resturant2}')">
            <img src="${this.image}" alt="${this.name}">
            <a href="./foodPages/${newName}.html" class="foodButton0">
                <div class="overlay">
                    <h3>${this.name}</h3>
                </div>
            </a>
        </div>
        `;
    }
    
    insertHTML(id) {
        const container = document.getElementById(id); // Use the single container
        container.innerHTML += this.generateHTML(); // Add the HTML to the unified container
    }
}

function filterByContinent() {
    const selectedContinent = document.getElementById("continent").value;
    const foodContainer = document.getElementById("foodContainer1");
    console.log(selectedContinent);
    // Clear current dishes
    foodContainer.innerHTML = "";
    
    for(let i = 0; i < 12; i++){
        for(let j = 0; j < dishes[i].length; j++){
            if (i != months[thisMonth]) {
                if(dishes[i][j].continent === selectedContinent || selectedContinent === "Worldwide"){
                    dishes[i][j].insertHTML("foodContainer1");
                }
            }
        }
    }
}

function setDishData(name, country, prepTime, description, nutrition, allergies, image, image2, continent, recipeImg1, recipeImg2, recipe1, recipe2, resturantImg1, resturantImg2, resturant1, resturant2) {
    const dishData = {
        name,
        country,
        prepTime,
        description,
        nutrition,
        allergies,
        image,
        image2,
        continent,
        recipeImg1,      
        recipeImg2,      
        recipe1,         
        recipe2,         
        resturantImg1,    
        resturantImg2,    
        resturant1,       
        resturant2        
    };

    localStorage.setItem('selectedDish', JSON.stringify(dishData));
}

const months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
};

const date = new Date();
const options = { month: 'long' };
const thisMonth = date.toLocaleDateString('en-US', options);

const dishes = [[], [], [], [], [], [], [], [], [], [], [], []];
try {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        for(let i = 0; i < data.length; i++){
            const dish = new Dish(
                data[i].name,
                data[i].country,
                data[i].prepTime,
                data[i].servings,
                data[i].ingredients,
                data[i].description,
                data[i].nutrition,
                data[i].allergies,
                data[i].image,
                data[i].month,
                data[i].image2,
                data[i].continent,
                data[i].recipeImg1,      
                data[i].recipeImg2,      
                data[i].recipe1,         
                data[i].recipe2,         
                data[i].resturantImg1,    
                data[i].resturantImg2,    
                data[i].resturant1,       
                data[i].resturant2       
            );
            dishes[(data[i].month) - 1].push(dish);
        }
        
        console.log("this is how many months" + dishes[months[thisMonth]].length);
        for (let i = 0; i < dishes[months[thisMonth]].length; i++) {
            dishes[months[thisMonth]][i].insertHTML("foodContainer0");    
        }
        for (let i = 0; i < 12; i++){
            for (let j = 0; j < dishes[i].length; j++) {
                if (i != months[thisMonth]){
                    dishes[i][j].insertHTML("foodContainer1");
                }
            }
        }
    });
} catch (error) {
    console.error('Error fetching json data:', error);
}

function getMonth(){
    const date = new Date();
    const options = { month: 'long' };
    return date.toLocaleDateString('en-US', options);
}

document.getElementById("currentMonth").textContent = getMonth();
