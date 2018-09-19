const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');
const submitToDoButtonElem = document.getElementById('submitToDoButton');

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');

    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener("click", (e) => {
            // card that the button was on
            const buttonIClicked = e.target;
            const cardToDelete = buttonIClicked.parentNode.parentNode; //DOM traversal? 
            cardToDelete.remove();
            // .parentNode
            //.remove() takes it off the dom
            
        })
    }
    
};

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${toDo}</h5>
      <p class="card-text">${notes}</p>
      <a href="#" class="btn btn-primary deleteButton">Delete this man</a>
    </div>
  </div>`;
    printToDom(domString, 'toDoCards');
    activateDeletes();
}


submitToDoButtonElem.addEventListener('click', (e) => {
    e.preventDefault();

    buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
   
});