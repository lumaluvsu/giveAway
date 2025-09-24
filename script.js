const countEl = document.getElementById('count');
const incrementUrl = 'https://api.counterapi.dev/v2/giveaway/entries/up';
const getCountUrl = 'https://api.counterapi.dev/v2/giveaway/entries';
var fakeCount;

var entered = 0;
var entered2 = 0;

if(!localStorage.getItem(entered) === 0 || !localStorage.getItem(entered) === 1) localStorage.setItem(entered, 0);

document.getElementById('coolbutton').addEventListener('click', async () => {
    if(localStorage.getItem(entered) == 0 && entered2 === 0) {
        const res = await fetch(incrementUrl);
        const data = await res.json();  
        fakeCount+=1;
        countEl.textContent = fakeCount;
        localStorage.setItem(entered, 1);
    } else console.log("you have already entered retard");
    entered2 = 1;
    });


window.addEventListener('DOMContentLoaded', async () => {
const res = await fetch(getCountUrl);
const data = await res.json();
countEl.textContent = data.data.up_count;
fakeCount = data.data.up_count;
});