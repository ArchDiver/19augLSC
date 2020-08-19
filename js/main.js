// Get F1 Racer Info for JSON Data
function getJson(){
    let season = document.querySelector("#season").value;
    let round = document.querySelector('#round').value;

    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(rawData => {
        console.log(rawData)
        let givenName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName;

        let given_name_text = document.createElement('h3');
        given_name_text.innerHTML = givenName;
        document.body.append(given_name_text);

        // family name
        let familyName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName;

        let familyName_text = document.querySelector('#familyName');
        familyName_text.innerHTML = familyName;

        // Get first 3 Constructors for F1 cars
        for(let i =0; i<3; i++){
            let Constructors_name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
            let display_constructors = document.createElement('h1');
            display_constructors.innerHTML = Constructors_name;
            document.body.append(display_constructors);
        }
    })

    console.log(season,round)
}
