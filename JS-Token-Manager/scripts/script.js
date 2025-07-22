/* The Token Manager:
    You are developing a user authentication system, and you need to manage user authentication tokens. 
    Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.
 */


let txtInputAuthToken = document.getElementById("txt-auth-token");

function createAuthTokenListIfNotExists() {
    if(!localStorage.getItem("authTokens")) {
        localStorage.setItem("authTokens", "[]");
    }
}


function registerAuthToken() {

    createAuthTokenListIfNotExists();

    let authToken = txtInputAuthToken.value;

    if(authToken == "" || authToken == null) {
        window.alert("Please Enter an Authentication Token");
        return;
    }

    let lstAuthTokens = localStorage.getItem("authTokens");


    if(authToken == null || authToken == "") {
        return;
    }

    let arrAuthTokens = JSON.parse(lstAuthTokens);
    arrAuthTokens.push(authToken);

    localStorage.setItem("authTokens", JSON.stringify(arrAuthTokens));

    startTokenExpiration();

    window.alert("Successfully Registered!!");
    return;

}

function verifyAuthToken() {

    createAuthTokenListIfNotExists()

    let authToken = txtInputAuthToken.value;

    if(authToken == "" || authToken == null) {
        window.alert("Please Enter an Authentication Token");
        return;
    }

    let lstAuthTokens = localStorage.getItem("authTokens");
    let arrAuthTokens = JSON.parse(lstAuthTokens);

    if(!lstAuthTokens || !arrAuthTokens.includes(authToken)) {
        window.alert("User not Authorised!!");
        return;
    }

    window.alert("Successfully Verified!!");
    return;

}

function startTokenExpiration() {
    setTimeout(() => {
        let lstAuthTokens = localStorage.getItem("authTokens");

        let arrAuthTokens = JSON.parse(lstAuthTokens);
        arrAuthTokens.shift();

        localStorage.setItem("authTokens", JSON.stringify(arrAuthTokens));

    }, 15000);
}


document.getElementById("btn-add-auth-token").addEventListener(
    "click",
    registerAuthToken
);

document.getElementById("btn-verify-auth-token").addEventListener(
    "click",
    verifyAuthToken
);
