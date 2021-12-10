
let myHeaders = new Headers();

myHeaders.append("x-rapidapi-key", "e5fe48d63f247a7bea7161aed29b05fe");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

export const setUserInfo = async (oParams) => {
    var oResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    if(oResponse.status === 200){
        return oResponse;
    }else{
        return false
    }
}

export const getTeams = async (sIdTeam) => {
    await fetch("https://v3.football.api-sports.io/players?team="+ sIdTeam + "&league=140&season=2020", requestOptions)
      .then(response => response.text())
      .then(result => {
        let aoParsedResponse = JSON.parse(result)
        localStorage.setItem('currentTeam', JSON.stringify(aoParsedResponse.response))
        return aoParsedResponse})
       .catch(error => console.log('error', error));
}