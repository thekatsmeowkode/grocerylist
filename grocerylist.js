const userInput = document.getElementById('text-input');
const buttonInput = document.getElementById('button-input');
const groceryList = document.getElementById('grocery-list');

buttonInput.addEventListener('click', listAdd)
function listAdd() {
    let newListItem = document.createElement('p');
    newListItem.className = 'groceryItem';
    newListItem.innerText = userInput.value;
    groceryList.appendChild(newListItem)
    userInput.value=""
    newListItem.addEventListener('click', function(){newListItem.style.textDecoration = 'line-through'})
    newListItem.addEventListener('dblclick', function(){newListItem.remove()})
}
    
