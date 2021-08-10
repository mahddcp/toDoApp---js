const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');


// form submit event
form.addEventListener('submit', addItem); 

// remove element
itemList.addEventListener('click', removeItem);

// search option
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // get input value
    let newItem = document.getElementById('item');

    // create new li element
    let li = document.createElement('li');
    // add class
    li.className = 'list-group-item';

    console.log(li);

    li.appendChild(document.createTextNode(newItem.value));

    let deleteBtn = document.createElement('delete');

    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);


    itemList.appendChild(li)   
}

// remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            let li = e.target.parentElement;
            
            itemList.removeChild(li);
        }
    }
}


function filterItems(e) {
    // convert text to lowercase
    let text = e.target.value.toLowerCase();

    let items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        console.log(itemName)
        // if(itemName.toLowerCase().indexof(text) != -1) {
        //     item.style.display = 'block';
        // }
        // else{
        //     item.style.display = 'none';
        // }
    } )


}