// Get F1 Racer Info for JSON Data
function getJson(){
    let season = document.querySelector("#season").value;
    let round = document.querySelector('#round').value;

    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(rawData => {
        for( let i = 0; i < 7; i++){
            let table_row = document.querySelectorAll('.ranking')[i];

            // Postition
            let position = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position;
            let show_postion = document.createElement('td');
            show_postion.innerHTML = show_postion;
            ranking.append(show_postion);


            // Name
            let given = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName;
            let family = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName;
            let show_name = document.createElement('td');
            show_name.innerHTML = given + " " + family;
            ranking.append(show_name);

            // Nationality
            let nationality = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].nationality;
            let show_nat = document.createElement('td');
            show_nat.innerHTML = show_nat;
            ranking.append(show_nat);

            // Sponsor
            let sponsor = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
            let show_sponsor = document.createElement('td');
            show_sponsor.innerHTML = show_sponsor;
            ranking.append(show_sponsor);

            // Points
            let points = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points;
            let show_points = document.createElement('td');
            show_points.innerHTML = show_points;
            ranking.append(show_points);
        }    
    })

    console.log(season,round)
}

