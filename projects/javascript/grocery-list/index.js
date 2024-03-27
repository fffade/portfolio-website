
var id = 0;

/* Creates a new item with an ID and adds it to the list */
function newItem(titleText)
{
  // Initialize the parent P element
  let parent = document.createElement("p");
  parent.id = `item-${id}`;
  parent.className = "item__element";

  // Initialize the title SPAN
  let title = document.createElement("span");
  title.className = "item__name";
  title.innerHTML = titleText;
  parent.appendChild(title);

  // Initialize the delete button
  let deleteLink = document.createElement("a");
  deleteLink.className = "item__delete";
  deleteLink.href = "javascript:void(0)";
  deleteLink.onclick = deleteItem.bind(null, parent.id);
  deleteLink.innerHTML = "Delete";
  parent.appendChild(deleteLink);

  // Append new item to full list
  let items = document.getElementById("items-container");
  items.appendChild(parent);

  id++; // Increment ID

  console.log("Added new item: " + titleText + " (" + id + ")");
}

/* Deletes an item from the list by its ID */
function deleteItem(elementId)
{
  document.getElementById(elementId).remove();

  console.log("Removed item: " + elementId);
}

/* Deletes all the items by searching them thru the class name */
function clearItems()
{
  let items = document.getElementsByClassName("item__element");

  for(let i = items.length - 1; i >= 0; i--) {
    deleteItem(items[i].id);
  }
}

/* Triggered when the users submits a new item */
function onItemSubmit()
{
  // Verify that the input contains text
  let itemName = document.getElementById("item-name");

  if(itemName.value.length <= 0)
    return;

  // Add item to list
  newItem(itemName.value);

  // Clear input
  itemName.value = "";
}


// Add functionality to button
document.getElementById("add").onclick = onItemSubmit;
document.getElementById("clear").onclick = clearItems;
