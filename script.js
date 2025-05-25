// Save the id of an element which is being dragged.
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Drop the shit
function drop(event) {
    event.preventDefault();
    let elementId = event.dataTransfer.getData("text");
    // console.log(elementId);
    event.target.appendChild(document.getElementById(elementId));
}

// Makes an element to accept drops
function allowDrop(event) {
    event.preventDefault();
}