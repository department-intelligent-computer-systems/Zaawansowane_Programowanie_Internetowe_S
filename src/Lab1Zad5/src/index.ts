import { Author } from "./Author";

let authorList = []; 

export async function getAuthorFromFile() {
    
    await fetch("/Authors.json")
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                let author = new Author(json[i].id, json[i].firstName, json[i].lastName, json[i].email, json[i].objectCounter);
                authorList.push(author);
            }
            console.log(authorList);
        });
    
    createOption(); 
}

export function createOption() {
    let select = document.createElement("select");
    let option = document.createElement("option");
    option.setAttribute("value", "pkt");
    option.innerHTML = "lista punktowa";
    select.appendChild(option);
    let option1 = document.createElement("option");
    option1.setAttribute("value", "num");
    option1.innerHTML = "lista numerowana";
    select.appendChild(option1);
    let option2 = document.createElement("option");
    option2.setAttribute("value", "tab");
    option2.innerHTML = "tabela";
    select.appendChild(option2);
    document.body.appendChild(select);

    
    let contentContainer = document.createElement("div");
    document.body.appendChild(contentContainer);

    select.onchange = function () {
        
        contentContainer.innerHTML = "";

        if (select.value == "pkt") {
            showAuthorListUnnumbered(contentContainer);
        } else if (select.value == "num") {
            showAuthorListNumbered(contentContainer);
        } else if (select.value == "tab") {
            showAuthorTable(contentContainer);
        }
    };
}

export function showAuthorTable(container:HTMLDivElement) {
    let table = document.createElement("table");
    let header = table.createTHead();
    let headerRow = header.insertRow();
    for (const key in authorList[0]) {
        const cell = document.createElement("th");
        cell.innerHTML = key;
        headerRow.appendChild(cell);
    }
    let body = table.createTBody();
    authorList.forEach(author => {
        let row = body.insertRow();
        for (const key in author) {
            const cell = document.createElement("td");
            cell.innerHTML = author[key];
            row.appendChild(cell);
        }
    });
    container.appendChild(table);
}

export function showAuthorListUnnumbered(container:HTMLDivElement) {
    let ul = document.createElement("ul");
    authorList.forEach(author => {
        let li = document.createElement("li");
        li.innerHTML = `${author._firstname} ${author._lastname} ${author._email}`;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}

export function showAuthorListNumbered(container:HTMLDivElement) {
    let ol = document.createElement("ol");
    authorList.forEach(author => {
        let li = document.createElement("li");
        li.innerHTML = `${author._firstname} ${author._lastname} ${author._email}`;
        ol.appendChild(li);
    });
    container.appendChild(ol);
}

getAuthorFromFile();
console.log(Author.authorData);
