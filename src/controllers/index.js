import {setUserInfo} from '../model/modelHandler'
import "../css/index.css"
import "../css/navBar.css"

document.addEventListener('submit', async (oEvent) => {

    oEvent.preventDefault();

    let oParams = {
        sEmail: document.getElementById('email').value,
        sUserName: document.getElementById('user-name').value,
        sName: document.getElementById('name').value,
        sSurname: document.getElementById('surname').value,
        sPsw: document.getElementById('psw').value,
        sRPsw: document.getElementById('rPsw').value
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
    const vPsw = /^([a-zA-Z0-9]{5,16})?$/;
    let errMsg='';

    if(!vName.exec(oParams.sName)){
        errMsg += `ERROR en el nombre\n`;
        bValid = false;
    } if(!vMail.exec(oParams.sEmail)) {
        errMsg += `ERROR en el email\n`;
        bValid = false;
    } if(!vPsw.exec(oParams.sPsw)) {
        errMsg += `ERROR en la contraseña\n`;
        bValid = false;
    } if(oParams.sRPsw !== oParams.sRPsw) {
        errMsg += `ERROR en la confirmación de contraseña\n`;
        bValid = false;
    }

    if (errMsg.length>0) {
        alert(errMsg);
    }

    return bValid;
}