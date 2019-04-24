

function domBuilder(results_obj) {
    //Reference 
    /*INPUT_OBJ = {
        type: "",
        name: "",
        location: "",
        details: ""
    }*/
    let results = document.querySelector("#results")
    
    //create list item container div
    let results_entry_div = document.createElement("div")
    results_entry_div.className = "listItemStyle"
    //Make ze children
    let typeItem = document.createElement("H3")
    let nameItem = document.createElement("H4")
    let locationItem = document.createElement("div")
    let detailsItem = document.createElement("div")
    //Add the text to ze children
    nameItem.innerHTML = `${results_obj.name} `
    locationItem.innerHTML = ` Location : ${results_obj.location} `
    detailsItem.innerHTML = `About: ${results_obj.details}`
    
    //Add children to the list item container div
    results_entry_div.appendChild(nameItem)
    results_entry_div.appendChild(locationItem)
    results_entry_div.appendChild(detailsItem)
    
    //Make ze Save Button
    let saveButton = document.createElement("button")
    saveButton.className = "saveButton"
    saveButton.textContent = "Save"
    saveButton.addEventListener("click", function(event){
        //remove button 
        let parentDiv = saveButton.parentNode
        parentDiv.removeChild(saveButton)
        //add to Itinerary
        let itinerary = document.querySelector("#itinerary")
        itinerary.appendChild(results_entry_div)
    })
    results_entry_div.appendChild(saveButton)
    //add the list item to the results
    results.appendChild(results_entry_div)


    //console.log(results_obj.name)
}