// parksData.getParksInfo();
// console.log(getParksInfo)

const searchParksButton = document.getElementById("parksButton")
const searchParksOptions = document.getElementById("parksInput")
searchParksButton.addEventListener("click", function() {
    //Return matching api object.//
    const parksInputValue = searchParksOptions.value;
    // if (parksInputValue === "yes") {
    // console.log(parksInputValue)
    // }
    getParksInfo(parksInputValue);
});

const parksInput = document.getElementById("parksInput")
parksInput.addEventListener("click", function() {

})

