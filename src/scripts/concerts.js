let concertsField = document.querySelector(".concertInput");
let concertsButton = document.querySelector(".concertsButton");

concertsButton.addEventListener("click", function () {
    const concertSelect = concertsField.value

    //console.log(concertSelect);
    getConcertInfo(concertSelect)

})

function getConcertInfo(info) {
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=W1pcXuKqQdPy3aAzokBdFdcfQYOtx8Zb",)
        .then(results => results.json())
        .then(allConcerts => {
            allConcerts._embedded.events.forEach(concert => {
                //console.log(concert)
                if (concert.id === info) {
                    INPUT_OBJ = {
                        type: "",
                        name: "",
                        location: "",
                        details: ""
                    }
                    INPUT_OBJ.type = "Concerts";
                    INPUT_OBJ.name = concert.name;
                    INPUT_OBJ.location = concert._embedded.venues[0].name;
                    INPUT_OBJ.details = `Genre : ${concert.classifications[0].genre.name}`;
                    domBuilder(INPUT_OBJ);
                    return true;
                } else {
                    return false;
                }
                // console.log(concert.name, concert._embedded.venues, concert.classifications[0].genre.name)
                // console.log(concertInput)
            })
            // console.log(INPUT_OBJ)
        });

}
