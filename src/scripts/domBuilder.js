

function domBuilder(results_obj) {
    //Reference
    /*INPUT_OBJ = {
        type: "",
        name: "",
        location: "",
        details: ""
    }*/

    document.getElementById("resultsHeader").style.visibility = "visible";
    document.getElementById("results").style.visibility = "visible";
    document.getElementById("clearButton").style.visibility = "visible";
    document.querySelector(".resultsHeaderDiv").style.visibility = "visible";
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
    detailsItem.innerHTML = `${results_obj.details}`

    //Add children to the list item container div
    results_entry_div.appendChild(nameItem)
    results_entry_div.appendChild(locationItem)
    results_entry_div.appendChild(detailsItem)

    //Make ze Save Button
    let saveButton = document.createElement("button")
    saveButton.className = "saveButton"
    saveButton.textContent = "Add to Itinerary"
    saveButton.addEventListener("click", function (event) {
        //Make Itinerary visible
        document.getElementById("itineraryHeader").style.visibility = "visible";
        document.getElementById("itinerary").style.visibility = "visible"
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

let clearButton = document.querySelector("#clearButton")
clearButton.addEventListener("click", function(event){
    let results = document.querySelector("#results")
    results.innerHTML = ""
    document.getElementById("resultsHeader").style.visibility = "hidden";
    document.getElementById("results").style.visibility = "hidden";
    clearButton.style.visibility = "hidden";
    document.querySelector(".resultsHeaderDiv").style.visibility = "hidden";
})
