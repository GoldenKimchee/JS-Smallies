// If a variable is not reassigned a new value, use const
let myWebsites = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const prevWebsites = JSON.parse(localStorage.getItem("myWebsites"));

if (prevWebsites) {
    myWebsites = prevWebsites;
    renderWebsites(myWebsites);
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs){
        console.log(tabs[0].url);
        myWebsites.push(tabs[0].url);
        localStorage.setItem("myWebsites", JSON.stringify(myWebsites));
        renderWebsites(myWebsites);
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myWebsites = [];
    renderWebsites(myWebsites);
})

inputBtn.addEventListener("click", function() {
    myWebsites.push(inputEl.value);
    inputEl.value = null;
    localStorage.setItem("myWebsites", JSON.stringify(myWebsites));
    renderWebsites(myWebsites);
}) //Listen to click from user, then execute func

function renderWebsites(websites) {
    
    let listItems = "";
    for (let i = 0; i < websites.length; i++) {
        //listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";

        // template strings (like f string)... cleaner
        //write like a string... but can add JavaScript using ${} 
        listItems += `
            <li>
                <a href="${websites[i]}" target="_blank">${websites[i]}</a>
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


// falsy____________
// false
// 0
// ""
// null
// undefined
// NaN

// truthy___________
//the rest...
