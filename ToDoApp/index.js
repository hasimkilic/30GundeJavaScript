const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list')
let items;

//load items
loadItems()

//call event listeners

eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener('submit', addNewItem);

    //delete an item
    taskList.addEventListener('click', deleteItem);

    //delete all items 
    btnDeleteAll.addEventListener('click', deleteAllItems);

}

function loadItems() {
    items = getItemsFromLS()

    items.forEach(function(item) {
        createItem(item);
    })

}
//Local storage

function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = []
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items
}

//set item to localstorage

function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text)
    localStorage.setItem('items', JSON.stringify(items));

}

function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function(item, index) {
        if (item === text) {
            items.splice(index, 1)
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}

function createItem(text) {
    //create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary'
    li.appendChild(document.createTextNode(text))

    //create a
    const a = document.createElement('a')
    a.classList = 'delete-item float-right'
    a.setAttribute('href', '#')
    a.innerHTML = '<i class="bi-x-circle-fill"></i>'

    // add a to li
    li.appendChild(a);

    // add li to ul 
    taskList.appendChild(li)

}

function addNewItem(e) {
    if (input.value === '') {
        alert('Yeni bir görev ekle!')
    }
    //save to LS
    setItemToLS(input.value);

    //create item
    createItem(input.value)

    // clear input 
    input.value = ''

    e.prevenetDefault();
}

function deleteItem(e) {
    //Elemanları tek tek silme

    if (e.target.className === 'bi-x-circle-fill') {
        if (confirm('Silmek istediğine emşin misin?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    //delete item from LS
    deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    e.prevenetDefault(e)
}

function deleteAllItems() {
    //ikinci yol

    // taskList.childNodes.forEach(function(item) {
    //     if (item.nodeType === 1) {
    //         item.remove()
    //     }
    // });

    if (confirm('Tüm görevleri silmek istediğine emin misin?')) {
        taskList.innerHTML = ''
    }
    localStorage.clear()

    e.prevenetDefault(e)
}