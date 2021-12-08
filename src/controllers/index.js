validateRegister = (oParams)=>{
    let bValid = true;
    const vName = /^[A-Za-z ]+$/;
    const vMail = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;


    if(!vName.exec(oParams.sName) || !vMail.exec(oParams.sEmail)){
        bValid = false;
    }

    return bValid;
}

setUserInfo = async (oParams) => {
    var oResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    if(oResponse.status === 200){
        return oResponse;
    }else{
        return false
    }
}

document.addEventListener('submit', async (oEvent) => {

    oEvent.preventDefault();

    let oParams = {
        sEmail: document.getElementById('email').value,
        sUserName: document.getElementById('user-name').value,
        sName: document.getElementById('name').value,
        sSurname: document.getElementById('surname').value,
    }
    if(this.validateRegister(oParams)){
        const oResponse = await this.setUserInfo(oParams);
        if(oResponse){
            window.location.href = "show-data.html";
        }else{

        }
    }else{
        //Printar error de incorrect password
        console.log("Error!!1")
    }
})