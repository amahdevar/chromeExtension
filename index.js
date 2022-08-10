const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");
let myLead =[];
//Push input text into array
inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value);
    inputEl.value = ""
    renderLeads();
}
);
function renderLeads(){
let listItems = "";
for (let i = 0; i < myLead.length; i++){
    listItems += `
    <li>
    <a target='_blank' href='//${myLead[i]}'>
    ${myLead[i]}
    </a>
    </li>
    `
};
ulEL.innerHTML = listItems;
}
// Video link: `https://youtu.be/jS4aFq5-91M?t=19531