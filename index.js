document.addEventListener('DOMContentLoaded', (event) => {


function setCookie(name, value) {

    const date = new Date();
    date.setFullYear(date.getFullYear() + 100);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";

}

function getCookie(name) {

    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {

        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);

    }
    return null;

}

function deleteCookie(name) {

    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

}

let clickFactor = 1;
let cost = 5;
let score = parseInt(getCookie('score')) || 0;
const scoretext = document.getElementById("score");
scoretext.textContent = score;

function clickmeClick() {

    score = score + clickFactor;
    scoretext.textContent = score;
    setCookie('score', score);

}

function deletescoreClick() {

    deleteCookie('score');
    score = 0;
    scoretext.textContent = score;


}

function upgrade() {

    if(score >= cost) {

        score = score - cost;
        cost = cost * 2;
        clickFactor = clickFactor + 1;
        document.getElementById("perclickandcost").textContent = `${clickFactor} | ${cost}`;
        scoretext.textContent = score;

    }

}

function deleteAllUpgrades() {

    clickFactor = 1;
    cost = 5;
    document.getElementById("perclickandcost").textContent = `${clickFactor} | ${cost}`;

}

document.getElementById("clickme").addEventListener('click', clickmeClick);
document.getElementById("deletescore").addEventListener('click', deletescoreClick);
document.getElementById("purchaseupgrade").addEventListener('click', upgrade);
document.getElementById("deleteallupgrades").addEventListener('click', deleteAllUpgrades);

})