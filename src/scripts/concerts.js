function getConcertInfo(info) {
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=W1pcXuKqQdPy3aAzokBdFdcfQYOtx8Zb"), {
        async:true,
        dataType: "json"
    }
        .then(concerts => concerts.json())
        .then(allConcerts => {
            let concertInput = allConcerts._embedded.events.filter(concert => {

                let concertsField = document.querySelector(".concertInput");
                let concertsButton = document.querySelector(".concertsButton");

                concertsButton.addEventListener("click", function () {
                    getConcertInfo();
                    const concertSelect = concertsField.value



                    console.log(concertSelect);
                })

                if (concert[info] === "true") {
                     INPUT_OBJ = {
                        type: "",
                        name: "",
                        location: "",
                        details: ""
                    }
                    INPUT_OBJ.type = "Concerts",
                    INPUT_OBJ.name = concert.name,
                    INPUT_OBJ.location = concert._embedded.venues,
                    INPUT_OBJ.details = concert.classifications[0].genre.name

                    console.log(INPUT_OBJ);
                    return true;
                } else {
                    return false;
                }
                // console.log(concert.name, concert._embedded.venues, concert.classifications[0].genre.name)
                // console.log(concertInput)
            })
            console.log(INPUT_OBJ)
        });
    }
