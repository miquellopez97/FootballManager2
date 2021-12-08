validateRegister = (oParams)=>{
    let bValid;
    const vName = /^[A-Za-z ]+$/;
    const vMail = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;


    if(!vName.exec(oParams.sName) || !vMail.exec(oParams.sEmail)){
        bValid = false;
    }


    return bValid;
}

document.addEventListener('submit', (oEvent) => {

    oEvent.preventDefault();

    let sEmail = document.getElementById('email').value;
    let sUserName = document.getElementById('user-name').value;
    let sName = document.getElementById('name').value;
    let sSurname = document.getElementById('surname').value;

    let oParams = {
        sEmail: document.getElementById('email').value,
        sUserName: document.getElementById('user-name').value,
        sName: document.getElementById('name').value,
        sSurname: document.getElementById('surname').value,
    }
})