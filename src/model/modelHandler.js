var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/{endpoint}", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


export default setUserInfo = async (oParams) => {
    var oResponse = await fetch("https://jsonplaceholder.typicode.com/users");
}