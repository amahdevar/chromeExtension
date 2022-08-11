const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
let myLead =[];
let leadFromLocalStorage = JSON.parse(localStorage.getItem("mylead"));
if (leadFromLocalStorage) {
    myLead = leadFromLocalStorage;
    render(myLead);
}
function render(leads){
    let listItems = "";
    for (let i = 0; i < leads.length; i++){
        listItems += `
        <li>
        <a target='_blank' href='//${leads[i]}'>
        ${leads[i]}
        </a>
        </li>
        `
    }
ulEL.innerHTML = listItems;
}
deleteBtn.addEventListener("dblclick", function(){
   localStorage.setItem("mylead", null);
   myLead = [];
   render(myLead);
})
inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("mylead", JSON.stringify(myLead));
    render(myLead);
}
)
user = {
    name: "ali",
    age: 22
}


// Video link: https://youtu.be/jS4aFq5-91M?t=22269