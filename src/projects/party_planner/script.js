function strikeThrough(event) {
    const item = event.currentTarget;
    item.className = "strikeThroughTxt";
}

function displayImage() {
    let teaImage = document.getElementById("teaTray");
        teaImage.style.visibility = "visible";
}

function highlightItems() {
    const list = document.getElementsByTagName("ul")[0];
    list.className = "highlighted";
}

function onHighlightClick() {
    highlightItems();
    displayImage();
}

function itemIsInList(findValue) {
    let listItems = document.getElementsByTagName("li");

    for(let i = 0; i < listItems.length; i++) {
        const item = listItems[i];
        const itemText = item.textContent.toLowerCase();

        if (itemText === findValue.toLowerCase()) {
            return true;
        }
    }

    return false;
}

function addItem() {
    const newItemInput = document.getElementById("itemText");
    let newItemValue = newItemInput.value;

    if(newItemValue && !itemIsInList(newItemValue)) {
        newItemInput.value = "";

        let newElement = document.createElement("li");
        newElement.onclick = onHighlightClick;
        newElement.onclick = strikeThrough;

        let newItemTxt = document.createTextNode(newItemValue);
        newElement.appendChild(newItemTxt);

        let list = document.getElementById("tasks");
        list.appendChild(newElement);
    }
}

function setUp() {
    let listItems = document.getElementsByTagName("li");

    for(let i = 0; i < listItems.length; i++) {
        listItems[i].onclick = strikeThrough; //the strike through style
    }

    let highlightButton = document.getElementById("highlight");
    highlightButton.onclick = onHighlightClick;

    let addButton = document.getElementById("addItem");
    addButton.onclick = addItem;
}

setUp();