document.write("New World!");

document.body.onload = addElement;

function addElement() {
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode("Welcome!");
    
    newDiv.appendChild(newContent);

    document.body.appendChild(newDiv);
    alert("Append Succeeded");
}