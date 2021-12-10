import {setUserInfo} from '../model/modelHandler'

document.addEventListener('submit', async (oEvent) => {

    oEvent.preventDefault();

    let oParams = {
        sEmail: document.getElementById('email').value,
        sUserName: document.getElementById('user-name').value,
        sName: document.getElementById('name').value,
        sSurname: document.getElementById('surname').value,
    }
    if(validateRegister(oParams)){
        const oResponse = await setUserInfo(oParams);
        if(oResponse){
            window.location.href = "show-data.html";
        }else{

        }
    }else{
        //Printar error de incorrect password
        console.log("Error!!1")
    }
});

const validateRegister = (oParams)=>{
    let bValid = true;
    const vName = /^[A-Za-z ]+$/;
    const vMail = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;


    if(!vName.exec(oParams.sName) || !vMail.exec(oParams.sEmail)){
        bValid = false;
    }

    return bValid;
}