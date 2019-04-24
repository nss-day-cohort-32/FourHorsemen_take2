//...//
// const parksData = {
    //...//
    function getParksInfo(info) {
        //...//
        return fetch("https://data.nashville.gov/resource/xbru-cfzi.json/?$$app_token=Vf74GVgJuBMgE8pKXy0iQ4HFm", {
            //...//
            Authorization: {
                Bearer: "Vf74GVgJuBMgE8pKXy0iQ4HFm",
            }})
            //...//
            .then(response => response.json())
            //...//
            .then(parksReturn => {
                ///This filter method gives a new array//
                let filterParks = parksReturn.filter(park => {
                    // console.log(park[info])
                    if (park[info] === "Yes") {
                        INPUT_OBJ = {
                            type: "",
                            name: "",
                            location:"",
                            details: ""
                        }
                        INPUT_OBJ.type = "Parks"
                        INPUT_OBJ.name = park.park_name
                        INPUT_OBJ.location = park.mapped_location_address
                        INPUT_OBJ.details = `Year Established: ${park.year_established}`

                        domBuilder(INPUT_OBJ);
                    return true;
                    } else {
                        return false;
                    }
                })
                console.log(filterParks)
            })
        }
// parksData.getParksInfo();




