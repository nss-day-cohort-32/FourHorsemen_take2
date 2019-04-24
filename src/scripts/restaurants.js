const foodtypes = [

]
//  1. add event listener
//  2. get value of the select box
//  3. useing value of select box build out the url for the zomato api
//  4. when results come back render to dom


fetch(`https://developers.zomato.com/api/v2.1/cuisines?city_id=1138`, {
    "headers": {
        "user-key": "9a7a390e9abbe0f0700ce1cf8902f707",
    }
})
    .then(response => response.json())
    .then(foodObject => {

        const inputbox = document.getElementById("restaurantsinput")
        for (let i = 0; i < foodObject.cuisines.length; i++) {
            const cuisineTypeObj = foodObject.cuisines[i].cuisine
            inputbox.innerHTML += `<option value="${cuisineTypeObj.cuisine_id}">${cuisineTypeObj.cuisine_name}</option>`

            //console.log("index", i, "nice", element)
        }
    })







const foodbutton = document.getElementById("foodbutton")
foodbutton.addEventListener("click", function () {
    const inputbox = document.getElementById("restaurantsinput")
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${inputbox.value}`, {
        "headers": {
            "user-key": "9a7a390e9abbe0f0700ce1cf8902f707",
        }
    })

        .then(response => response.json())
        .then(parsedFoods => {
            


            parsedFoods.restaurants.forEach(restobj => {
                console.log("place", restobj.restaurant.name),
                console.log("location", restobj.restaurant.location.address ),
                console.log("review", restobj.restaurant.user_rating.aggregate_rating)
            
            
            
            });

            
            // console.log("boo", parsedFoods.restaurants[1].restaurant.user_rating.aggregate_rating)
        })

            //restaurant
});
