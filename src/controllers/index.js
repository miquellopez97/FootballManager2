validateRegister = (oParams)=>{
    let bValid;
    const vName = /^[A-Za-z ]+$/;
    const vMail = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;


    if(!vName.exec(oParams.sName) || !vMail.exec(oParams.sEmail)){
        bValid = false;
    }

    return bValid;
}

setUserInfo = async (oParams) => {
    var oResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    return oResponse;
}

document.addEventListener('submit', (oEvent) => {

    oEvent.preventDefault();

    let oParams = {
        sEmail: document.getElementById('email').value,
        sUserName: document.getElementById('user-name').value,
        sName: document.getElementById('name').value,
        sSurname: document.getElementById('surname').value,
    }
    if(true){
    // if(this.validateRegister(oParams)){
        const result = this.setUserInfo(oParams);
    if(result){
        console.log(result);
    }
    }else{
        //Printar error de incorrect password
    }
})