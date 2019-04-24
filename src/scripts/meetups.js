//This needs to be in another file for security..
const token = "WKCHBZHI5XOXOL4XX7MR";

//EVENTS BUTTON FUNCTIONALITY
const meetupsField = document.querySelector(".meetupsInput")
const meetupsBtn = document.querySelector(".meetupsButton")

meetupsBtn.addEventListener("click", function () {
    const inputSelect = meetupsField.value;
    
    console.log(inputSelect) //For Testing
    
    fetchMeetups(inputSelect)
});
///////DATE CONVERT FUNCTION
function date_convert(dateString){
    //Ex. input "2019-04-24T19:00:00"
    //console.log(dateString)
    let yr = dateString.substring(0,4)
    let mo = dateString.substring(5,7)
    let da = dateString.substring(8,10)
    return (`${mo}-${da}-${yr}`)
}
/////////const token = // contained in api_keys.js
function fetchMeetups(searchTerm_ID) {

    let searchURL = `https://www.eventbriteapi.com/v3/events/search/?category_id=103&token=${token}&expand=venue`


    let search2 = `https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.latitude=36.162663&location.longitude=-86.781601&token=${token}&expand=venue`
    //console.log(searchURL)
    fetch(search2)
        .then(response => response.json())
        .then(data => {
            data.events.forEach(event_item => {
                if (event_item.category_id === searchTerm_ID) {
                    //console.log(event_item) //testing
                    const eventDate = date_convert(event_item.start.local)
                    //Define Object that will be passed to DOM builder
                    INPUT_OBJ = {
                        type: "",
                        name: "",
                        location: "",
                        details: ""
                    }
                    INPUT_OBJ.type = "Events"
                    INPUT_OBJ.name = event_item.name.text;
                    INPUT_OBJ.location = event_item.venue.address.address_1;
                    INPUT_OBJ.details = eventDate; //converted above, using date_convert
                    
                    domBuilder(INPUT_OBJ)
                    //console.log(INPUT_OBJ)
                }
            })

            //console.log(data.events[0])
        }).catch(error => console.error(error))
}

/*
103 Music
101 Business
110 Food & Drink
113 Community
105 Arts
104 Film & Media
108 Sports & Fitness
107 Health
102 Science & Tech
109 Travel & Outdoor
111 Charity & Causes
114 Spirituality
115 Family & Education
112 Government
116 Holiday
106 Fashion
117 Home & Lifestyle
118 Auto, Boat & Air
119 Hobbies
199 Other
120 School Activities
*/

