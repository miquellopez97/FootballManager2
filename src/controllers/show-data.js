document.addEventListener('DOMContentLoaded', async (oEvent) => {
    var myHeaders = new Headers();

    myHeaders.append("x-rapidapi-key", "e5fe48d63f247a7bea7161aed29b05fe");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // await fetch("https://v3.football.api-sports.io/teams?country=spain&league=140&season=2020", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    
})