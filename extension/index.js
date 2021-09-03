let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = null;
    renderLeads();
}) //Listen to click from user, then execute func

function renderLeads() {
    
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";

        // template strings (like f string)... cleaner
        //write like a string... but can add JavaScript using ${} 
        listItems += `
            <li>
                <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
            </li>
        `

        // one way...
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"; // innerHTML regonizes the <li> as HTML; create HTML elements!!
        
        // another way...
        //const li = document.createElement("li"); //create li element
        //li.textContent = myLeads[i] //set its content
        //ulEl.append(li); //add li to the ul
    }
    ulEl.innerHTML = listItems; //manipulate DOM once - cost efficient

}